import {useState} from "react"

export const ItemCount = ({stock =10 , ini= 1, onAdd}) =>{
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
            <h2>Contador de Prueba</h2>
                <button className="btn btn-outline-primary" onClick={controladorCount}>+</button>
                {count}
                <button className="btn btn-outline-primary" onClick={resetCount}>-</button>
                <button className="btn btn-outline-primary" onClick={agregar}>Agregar al Carrito</button>
    </main>
    )
}