import React from 'react'
import './ViewId.css'
import { Link } from 'react-router-dom'

function ViewId(props) {



    const viewNumbers = []
    for (let i = 1; i <= 10; i++) {
        viewNumbers.push('View ' + i)
    }

    console.log('viewNumbers ', viewNumbers)
    const listItems2 = viewNumbers.map((viewNumber, index) =>
        <div className='view'>
             <Link to={{pathname :'/review',state:{viewItem: index,ProductNumber: props.history.location.state.productItem} }}
             style={{ textDecoration: 'none', color: 'black' }}>
            <h3>{viewNumber}</h3>
             </Link> 
        </div>
    );

    return (
        <div className='viewlist'>
            {listItems2}
        </div>
    )
}

export default ViewId