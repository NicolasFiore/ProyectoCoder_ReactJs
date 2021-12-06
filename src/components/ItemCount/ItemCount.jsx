import React, {useState} from 'react'
import './ItemCount.css'

const inicial = 1;
const stockMax = 5;

function ItemCount() {
    const [valor, setValor] = useState(inicial);

    const sumarUnidad= ()=>{
        if(valor < stockMax){
            setValor(valor + 1);
        }
    }
    const restarUnidad= ()=>{
        if(valor > inicial){
            setValor(valor - 1);
        }
    }

    return (
        <div>
            <p><strong>{valor}</strong></p>
            <button onClick={restarUnidad}>-</button>
            <button onClick={sumarUnidad}>+</button>
            <p id="stock">Stock: <strong>{stockMax}</strong></p>
        </div>
    )
}

export default ItemCount
