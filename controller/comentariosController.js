import { comentario } from "../models/comentarios.js";
const guardarComentarios = async (req, res) => {
    const { correo, imagen, opinion} =req.body;
    const errores = [];
    if(correo.trim() === "") {
        errores.push({ mensaje: "El correo no debe ser vacio"});
    }
    if(imagen.trim() ==="") {
        errores.push({ mensaje: "La imagen no debe ser vacio"} );
    }

    if(opinion.trim() ===""){
        errores.push({ mensaje: "La opinion no debe estar vacia"});
    }

    if(errores.length > 0){
        res.render("comentarios", {
            pagina: "Comentarios", 
            errores,
            correo,
            imagen,
            opinion,
        });

    } else{
        //almacenar en la base de datos
        try {
            await comentario.create({
                correo, 
                imagen,
                opinion
            });
            res.redirect('/comentarios');
        }   catch(error) {
            console.log(error);
        }
    }
    
};

export { guardarComentarios };