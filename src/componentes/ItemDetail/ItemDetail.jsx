import {useState, useEffect} from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = () =>{

    return(
        <div className="row">
            <div className="row m-1">Detalle</div>
            <div className="row">
               <ItemCount/>
            </div>
        </div>
    )
}
export default ItemDetail