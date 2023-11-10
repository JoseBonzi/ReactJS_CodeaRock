import { useEffect, useState } from "react";
import axios from "axios";
import ItemListado from "../components/ItemListado";
  
export default function Productos() {
  const [mercaderia, setMercaderia] = useState([]);
  let traemeProductos = async () => {
    const res = await axios.get(
      "https://fakerapi.it/api/v1/products?_quantity=20&_taxes=12&_categories_type=uuid"
    );
    setMercaderia(res.data.data);
    
  };
  useEffect(() => {
    traemeProductos();
  }, []);
  return <div>
    <h1>Somos lo' producto</h1>
    {mercaderia.map((item) => (
       <ItemListado {...item}></ItemListado> 
      ))};                                 

  </div>;
}
//<ItemListado>{...item}</ItemListado>  lo que hace esto es que los props son una descontrucción de todo lo que tenga item, traigo name y precio porque lo especifique en Item Listado
//setMercaderia(res.data.data);  termino el await y con mi hook useState dentro mercadería guarde los datos, los productos 
    