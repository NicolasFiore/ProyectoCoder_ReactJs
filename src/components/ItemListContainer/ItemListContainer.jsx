import React from 'react'
import {useState, useEffect} from 'react'
import {getFetch} from '../../helpers/getFetch'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp.filter(prod => prod.categoria === idCate))) 
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))       
    }, [] )  


    return (
        <div>
            <h3>{greeting}</h3>
            { loading ? 
                <h2>Cargando...</h2> 
                :  
               <ItemList productos={productos} />
            }

        </div>
    )
}

export default ItemListContainer
