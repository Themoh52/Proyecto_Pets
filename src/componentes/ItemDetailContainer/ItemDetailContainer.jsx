import {useState, useEffect} from "react"
import { gFetch } from "../../auxiliar/gFetch"
import ItemDetail from "../ItemDetail/ItemDetail"




const ItemDetailContainer = () =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        gFetch()
        .then(listaCorrecta=>setProducts(listaCorrecta))
        .catch(error =>{error})
        .finally(setLoading(false))   
    },[])

    return(
        <div>
            { loading ?
            <h2>Danos un momento..., y te mostraremos los productos que tenemos para ti</h2> 
                :
                products.map(products =><div className="col-md-3 m-3" key={products.id}>
                                        <div className="card w-100 mt-5">
                                            <div className="card-header">
                                                {products.name}
                                            </div>
                                            <div className="card-body">
                                                <img src={products.foto} alt="imagen del producto en cuestión" />
                                                {products.price}
                                            </div>
                                            <div className="card-footer">
                                                {products.description}
                                            </div>
                                        </div>
                                        </div> 
                    
                    
                    
                    
                    
                    
                    
                    )
            }
            < ItemDetail/>
        </div>
    )
}
export default ItemDetailContainer