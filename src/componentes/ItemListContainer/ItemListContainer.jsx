import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../auxiliar/gFetch"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () =>{
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()
    useEffect(()=>{
        if(categoriaId){
            gFetch()
            .then(listaCorrecta=>setProducts(listaCorrecta.filter(product=> product.categoria==categoriaId)))
            .catch(error =>{error})
            .finally(setLoading(false))   
        }else{
            gFetch()
            .then(listaCorrecta=>setProducts(listaCorrecta))
            .catch(error =>{error})
            .finally(setLoading(false))
        }
    },[categoriaId])
    
    return(
        <div>
            <main>
                <h1 className="ms-3 mb-3">PETS, donde tu mascota es primero</h1>
                    <p className="ms-5 mb-3">Hola!, y bienvenido a PETS, donde ofrecemos productos para todo tipo de mascotas, sean grandes, pequeños, indoor u outdoor.</p>
                    <h2 className="ms-3 mb-3">Estos son los productos que tenemos para ti</h2>
                        { loading ?
                        <h3>Cargando...</h3> 
                        :
                        <ItemList products={products}/> 
                        }
            </main>
        </div>
    ) 
}
export default ItemListContainer
