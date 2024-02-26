import React from "react";
import Breadcrumb from "../Components/Breadcrumb"
import { useLocation } from "react-router-dom";
import { BreadcrumbItem } from "../types";
import Galeriaimagenes from "../Components/Galeriaimagenes";
import Body from "../Components/Body";

export function Home() {

  const arrayImagenes = [
    "/imagen1.jpg",
    "/imagen2.jpg",
    "/imagen3.jpg"
  ] 

  return <div><Breadcrumb/>
  {/* <Galeriaimagenes images = {arrayImagenes}/> */}
  <div>Turismo aventura</div>
  <div>Producto</div>
  <div>Detalle del producto</div>
  <div><Body/></div>

  
  </div>
}
