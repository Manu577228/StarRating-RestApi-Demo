import React from 'react'
import { Link } from 'react-router-dom'
import './ProductId.css'



function productId() {

    const numbers = []
    for (let i = 1; i <= 20; i++) {
        numbers.push('Product ' + i)
    }
    console.log('numbers ', numbers)

    const listItems = numbers.map((number, index) =>
        <div className='prod'>
            <Link to={{ pathname: '/viewid', state: { productItem: index } }}
                style={{ textDecoration: 'none', color: 'black' }}
            >
                <h3>{number}</h3>
            </Link>
        </div>
    );

    return (
        <div className='product'>
            {listItems}
        </div>
    )
}

export default productId
