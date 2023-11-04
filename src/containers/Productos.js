import { useEffect } from "react";
import axios from "axios";
export default function Productos() {
  let traemeProductos = async () => {
    const res = await axios.get(
      "https://fakerapi.it/api/v1/products?_quantity=20&_taxes=12&_categories_type=uuid"
    );
    console.log(res.data.data);
  };
  useEffect(() => {
    traemeProductos();
  }, []);
  return <div></div>;
}
