import {useEffect,useState} from "react"
import{useParams} from "react-router-dom"
import { gFetch } from "../../auxiliar/gFetch"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () =>{
    const[product, setProduct]= useState({})
    const {ProductoId} = useParams()
    useEffect(()=>{
            gFetch(ProductoId)
            .then(listaCorrecta=>setProduct(listaCorrecta))
            .catch(error =>{error})
            },[])
    return(
        <ItemDetail
        product={product}/>
    )
}
export default ItemDetailContainer