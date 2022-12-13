import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = ({product}) =>{

    const onAdd =(cantidad)=> alert("Agregaste "+cantidad+" productos al carrito") 

    return(
        <div className="row">
            <h1 className="mb-5 ms-3">Estos son los Detalles del Producto</h1>            
                <h2 className="ms-3">{product.name}</h2>
                <img className ="h-50 w-50 mb-5" src={product.foto} alt="Foto del producto en cuestión"/>
                <h3 className="mb-5 ms-3">Valor: ${product.price}</h3>
                <h4 className="mb-5 ms-3">Stock: {product.stock}</h4>    
            <div className="row">
              < ItemCount stock={10} initial={1} onAdd={onAdd}/>  
            </div>
        </div>
    )
}
export default ItemDetail