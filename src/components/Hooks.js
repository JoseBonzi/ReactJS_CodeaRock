import { useState } from "react";

export default function Hooks() {
  const [cuenta, setCuenta] = useState(0);

  const handleClick = () => {
    setCuenta(cuenta + 1);
    console.log(cuenta);
  };
  return (
    <div>
      {cuenta == 0 ? (
        <h1>Arranquemos a contar a ver si nos dormimos.</h1>
      ) : (
        <div>
          {cuenta > 1 ? (
            <h1>Contamos {cuenta} obejitas.</h1>
          ) : (
            <h1>Contamos {cuenta} obejita.</h1>
          )}
          {/* Ej: {cuenta > 1 ? ():()},  trabaja como un if */}
          {cuenta && <h4>Que bueno a ver si nos dormimos</h4>}
        </div>
      )}
      <button onClick={handleClick}>Contar otra</button>
    </div>
  );
}
