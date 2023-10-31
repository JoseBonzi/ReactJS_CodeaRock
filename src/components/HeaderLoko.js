//REACT DEL NUEVO: FUNCTIONAL COMPONENT
//importaciones
import React from "react";
import "../assets/css/HeaderLoko.css";

//el componente en si
const HeaderLoco = () => {
    // aca iría todo nuestro codigo en js 
    let nombre = "Jose Bonzi";
    const styles = {
        p: {
            color: "white",
            backgroundColor: "orange",
        },
        a: {
            color: "red",
        },

    };
    const handleClick = (e)=> {
        const quien = e.target.getAttribute('name')
        if(quien == "Secondary"){
            alert("Hola soy Secondary");
        }
    }
    const handleChange = (e) => {
        console.log(e.target.value);

    }
    return(
        //aca todo lo que se ve del componente 
        <div>
            <button type="button" class="btn btn-primary" name="Primary" onClick={handleClick}>Primary</button>
            <button type="button" class="btn btn-secondary" name="Secondary" onClick={handleClick}>Secondary</button>
            <button type="button" class="btn btn-success" name="Succes" onClick={handleClick}>Success</button>
            <input type="text"onChange={handleChange}/>
            <h1>por ese futuro mio {nombre}</h1>
            <p style={styles.p}>Hola perri con rojo</p>
            <a style={styles.a} href="https://codearock.com/ver/react">Pinchame</a>
        </div>
    );
};

//Exportación del componente 
export default HeaderLoco;