import express from "express";
import { paginaComentarios, paginaCreadores, paginaInicio, paginaMaterias } from "../controller/paginascontroller";
import { guardarComentarios } from "../controller/comentariosController";


const rutas =express.Router();
rutas.get("/",paginaInicio);

rutas.get("/creadores",paginaCreadores);

rutas.get("/materias",paginaMaterias);

rutas.get("/comentarios",paginaComentarios);
rutas.post("/comentarios", guardarComentarios);

export default rutas;