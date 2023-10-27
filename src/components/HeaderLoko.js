//REACT DEL NUEVO: FUNCTIONAL COMPONENT
//importaciones
import React from "react";

//el componente en si
const HeaderLoco = () => {
    // aca iría todo nuestro codigo en js 
    let marcelo = "pepe loco";
    return(
        //aca todo lo que se ve del componente 
        <div>
            <h1>por ese futuro mio {marcelo}</h1>
        </div>
    );
};

//Exportación del componente 
export default HeaderLoco;