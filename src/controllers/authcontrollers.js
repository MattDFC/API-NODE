import jwt from "jsonwebtoken";
import { manejarError } from "../services/manejoErrores.js";

const default_user = {
    id: 1,
    email: "JeanPaulCrack@email.com",
    password: "mejorDocente2025",
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = { id: 1, email };
        if (email === default_user.email && password === default_user.password) {
            const payload = { id: user.id };
            const expiration = { expiresIn: "1y" };
            const token = jwt.sign(payload, process.env.JWT_SECRET, expiration);
            const nombreUsuario = email.split("@")[0];
            return res.json({
                message: `LOGIN OK! BIENVENIDO! ${nombreUsuario} - su token es: ${token}`
            });
        } else {
            return res.status(401).json({ error: "Sus credenciales no coinciden." });
        }
    } catch (err) {
        manejarError(res, err, "Error en el login");
    }
};