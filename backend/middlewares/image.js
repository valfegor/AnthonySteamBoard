//middleware para validar la imagen

//empezamos realizando una funcion.

const upload = async(req, res,next) =>{
    //si la imagen enviada es igual a null es decir no viene la imagen sigue el proceso ya que podemos generar tareas con imagen o sin imagen
    if(req.files.image.type == null){
        next();
    }
    else{
        if(req.files.image.type){
            //enviamos por medio de una variable para la validacion
            let type = req.files.image.type
            //Recordando en el if si alguno de estos se cumple entra al true por lo tanto si se cumple se itera sobre el true que es el primer bloque
            if(
            type !== "image/png" &&
            type !== "image/jpg" &&
            type !== "image/jpeg" &&
            type !== "image/gif"){
                return res.status(400).send("Sorry format not supported");
            }
            else{
                next();
            }
        }
    }
}

module.exports = upload;