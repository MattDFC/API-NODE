import "dotenv/config";
import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Proyecto Final Node.js" });
});

import productsRouter from "./routes/productosRoutes.js";
app.use("/api", productsRouter);

import authRouter from "./routes/authRoutes.js";
app.use("/api/auth", authRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: "Not found"});
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));