import { Router } from "express";
import { 
    getCategorias, 
    createCategoria,
    getCategoria,
    updateCategoria,
    deleteCategoria } from '../controllers/categoria.controller.js'

const router = Router()

router.get('/', getCategorias);

router.post('/', createCategoria);

router.get('/:id', getCategoria);

router.put('/.id', updateCategoria);

router.delete('/:id', deleteCategoria);

export default router;