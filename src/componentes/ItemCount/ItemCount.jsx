import {useState, useEffect} from "react"

const ItemCount = ({stock =10 , ini= 1, onAdd}) =>{
    const titulo = "PETS, lo mejor para tu mascota";
    const presentacion = "Hola y Bienvenido a PETS, donde el bienestar de tu mascota es nuestra prioridad";
    const [count, setCount] = useState(ini);

    const controladorCount =() => {
        if(count<stock) setCount(count+1)    
    }
    const resetCount=() =>{
        if(count>ini) setCount(count-1)
    }
    const agregar=()=>{
         alert("Has agregado "+count+" productos al carrito")
    }
    return(
    <main>
        <h1>{titulo}</h1>
            <p>{presentacion}</p>
            <h2>Contador de Prueba</h2>
                {count}
                <button className="btn btn-outline-primary" onClick={controladorCount}>+</button>
                <button className="btn btn-outline-primary" onClick={resetCount}>-</button>
                <button className="btn btn-outline-primary" onClick={agregar}>Agregar al Carrito</button>
    </main>
    )
}
export default ItemCount