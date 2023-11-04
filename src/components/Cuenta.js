import React from "react";

export default function Cuenta(props) {
  let { cuenta1 } = props;
  return (
    <div>
      {cuenta1 > 1 ? (
        <h1>Contamos {cuenta1} obejitas.</h1>
      ) : (
        <h1>Contamos {cuenta1} obejita.</h1>
      )}
      {/* Ej: {cuenta > 1 ? ():()},  trabaja como un if */}
      {cuenta1 && <h4>Que bueno a ver si nos dormimos</h4>}
    </div>
  );
}
