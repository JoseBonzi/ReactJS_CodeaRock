import { useState, useEffect } from "react";
import Cuenta from "./Cuenta";

export default function Hooks() {
  const [cuenta1, setCuenta] = useState(0);
  const [cuenta2, setCuenturra] = useState(0);
  const handleClick = (e) => {
    const quien = e.target.getAttribute("name");
    if (quien == "cuenta1") {
      setCuenta(cuenta1 + 1);
      console.log("useState", cuenta1);
    } else {
      setCuenturra(cuenta2 + 1);
      console.log("useState cuenta2", cuenta2);
    }
  };
  useEffect(() => {
    console.log("useEffect, Me ejecuto");
  }, [cuenta2]);
  return (
    <div>
      {cuenta1 == 0 ? (
        <h1>Arranquemos a contar a ver si nos dormimos.</h1>
      ) : (
        <Cuenta cuenta1={cuenta1}></Cuenta>
      )}
      <button onClick={handleClick} name="cuenta1">
        Contar otra
      </button>
      <button onClick={handleClick} name="cuenta2">
        Contar otra cuenturra
      </button>
    </div>
  );
}
