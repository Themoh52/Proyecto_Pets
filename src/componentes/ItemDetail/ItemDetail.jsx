import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = ({product}) =>{

    const onAdd =(cantidad)=> alert("Agregaste "+cantidad+" productos al carrito") 

    return(
        <div className="row">
            <h1>Estos son los Detalles del Producto</h1>            
                <h2>Nombre: {product.name}</h2>
                <img src={product.foto} alt="Foto del producto en cuestión" />
                <h3>Valor:{product.price}</h3>
                <h4>Cantidad:{product.stock}</h4>    
            <div className="row">
              < ItemCount stock={10} initial={1} onAdd={onAdd}/>  
            </div>
        </div>
    )
}
export default ItemDetail