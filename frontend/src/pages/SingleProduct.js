import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import image from "../assets/products/1.png";


const SingleProduct = () => {
    const [data, setData] = useState([]);
    const { id } = useParams()

    const fetchApi = async () => {
        var value = await fetch(`http://localhost:4000/item-api/${id}`);
        value = await value.json();
        setData(value);
        console.log(data)
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <img className="card-img-top" src={image} alt="Card image cap" />
              
                    </div>
                    <div className='col-md-6'>
                    <h1>{data._id}</h1>
                    <h1>{data.title}</h1>
                    <h1>{data.desc}</h1>
                    <h1>{data.price}</h1>
                    </div>
                </div>

            </div>
            {/* <p>
                {data._id}
                {data.title}
                {data.desc}
                {data.price}

            </p> */}

        </div>
    )
}

export default SingleProduct