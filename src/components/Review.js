import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Review.css'
import StarRating from './StarRating'




function Review(props) {

    const [posts, setPosts] = useState([]);

    const [show, setShow] = useState(false);

    const [product_id, setProduct_id] = useState(props.history.location.state.ProductNumber);

    const [ViewID, setViewId] = useState(props.history.location.state.viewItem);

    useEffect(async () => {

        console.log(product_id, ViewID, 'hi');

        const response = await axios.get(`http://www.i2ce.in/reviews/${product_id}/${ViewID}`);

        console.log(response.status);

        if (response.status === 200) {

            console.log(response.data);

            setPosts(response.data.reviews);
        }

        else { alert('Something went wrong') }

    }, []);



    return (
        <div>
            {
                <div className='table-content'>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Comment</th>
                                <th className='usefull'>Usefulness</th>
                                <th>Reviewer Name</th>
                                <th>Ratings</th>
                            </tr>
                        </thead>


                        <div className='bgc'></div>
                         
                        {posts.map((item, index) =>
                            item.friend && <div className='content'>
                                <tbody>
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.comment}</td>
                                        <td>{item.usefulness}</td>
                                        <td>{item.reviewer.name}</td>
                                        <td>
                                            <div className='ratings'>
                                                <em>Overall Ratings : {item.ratings.Overall}</em>
                                                <StarRating numOfstars={item.ratings.Overall} />
                                                {show ? <div>
                                                    <div>Item Price : {item.ratings.price}</div>
                                                    <div>Delivery Time : {item.ratings.delivery_time}</div>
                                                    <div>Packaging : {item.ratings.packaging}</div>
                                                    <div>Matches Photo : {item.ratings.matches_photo}</div>
                                                    <div>Matches Description : {item.ratings.matches_description}</div>
                                                    <div>Discounts & Offers : {item.ratings.discounts_and_offers}</div>
                                                </div> : null}
                                                <div>
                                                    <a onClick={() => setShow(!show)} className='review'>
                                                        <button className='show-btn'>{show ? ' show less' : 'show more'}</button></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <div className='bgca'></div>
                            </div>
                        )}

                    </table>
                </div>
            }
        </div>
    )
}

export default Review

