import {useState, useEffect} from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = () =>{

    return(
        <div className="row">
            <div className="col">Detalle</div>
            <div className="col">
               <ItemCount/>
            </div>
        </div>
    )
}
export default ItemDetail