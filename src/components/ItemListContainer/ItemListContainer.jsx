import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer({greeting}) {
    return (
        <div>
            <h3>
                {greeting}
            </h3>
            <ItemCount/> 
        </div>
    )
}

export default ItemListContainer
