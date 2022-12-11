import {useState, useEffect} from "react"
import { gFetch } from "../../auxiliar/gFetch"
import{Link, useParams} from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"




const ItemDetailContainer = () =>{

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
            { loading ?
            <h2>Danos un momento..., y te mostraremos los productos que tenemos para ti</h2> 
                :
                products.map(products =><div className="col-md-3 m-3" key={products.id}>
                                        <div className="card w-100 mt-5">
                                            <Link to={`/detail${products.id}`}>
                                                <div className="card-header">
                                                    {products.name}
                                                </div>
                                                <div className="card-body">
                                                    <img src={products.foto} alt="imagen del producto en cuestión" />
                                                    {products.price}
                                                </div>
                                                <div className="card-footer">
                                                    <button className="btn btn-outline-primary">Descripción del producto</button>
                                                </div>
                                            </Link>
                                        </div>
                                        </div>
                    )
            }
            < ItemDetail/>
        </div>
    )
}
export default ItemDetailContainer