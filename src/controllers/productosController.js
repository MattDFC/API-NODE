import * as Service from "../services/modularizaciones.js";
import { manejarError, recursoNoDisponible } from "../services/manejoErrores.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Service.getAllProducts();
        res.json(products);
    } catch (err) {
        manejarError(res, err, "Error al obtener todos los productos");
    }
};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Service.getProductById(id);
        if (product) {
            res.json(product);
        } else {
            recursoNoDisponible(res, "producto", id);
        }
    } catch (err) {
        manejarError(res, err, "Error al obtener producto por ID");
    }
};

export const createProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const createdProduct = await Service.createProduct(newProduct);
        res.status(201).json(createdProduct);
    } catch (err) {
        manejarError(res, err, "Error al crear producto");
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProductData = req.body;
        const updatedProduct = await Service.updateProduct(id, updatedProductData);
        if (updatedProduct) {
            res.json(updatedProduct);
        } else {
            recursoNoDisponible(res, "producto", id);
        }
    } catch (err) {
        manejarError(res, err, "Error al actualizar producto");
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Service.deleteProduct(id);
        if (deletedProduct) {
            res.json({ message: "Producto eliminado exitosamente" });
        } else {
            recursoNoDisponible(res, "producto", id);
        }
    } catch (err) {
        manejarError(res, err, "Error al eliminar producto");
    }
};
