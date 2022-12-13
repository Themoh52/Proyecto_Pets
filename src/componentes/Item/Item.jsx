import { Link } from "react-router-dom"

const Item = ({product}) =>{
    return(
        <div className="card w-75 h-75 mt-5 mb-3 ms-5" key={product.id}>
            <Link to={`/detail/${product.id}`}>
                <div className="card-header">
                    {product.name}
                </div>
                <div className="card-body">
                    <img  className="w-50 h-50" src={product.foto} alt="imagen del producto en cuestión" />
                    {product.price}
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-primary">Detalles del producto</button>
                </div>
            </Link>
        </div>          
    ) 
}
export default Item