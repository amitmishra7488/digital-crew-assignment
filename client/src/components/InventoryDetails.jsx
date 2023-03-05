import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './inventoryDetails.css'


export default function InventoryDetails() {
    
    const [data, setData] = useState({});
    const { id } = useParams();
    const display = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/inventory/${id}`);
            setData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        display();
    }, [])
    return (
        <div>
            <div>
            <div className="detailsBox">
                
                {Object.keys(data).length > 0 ? 
                        <div className="card" key={data._id.toString()}>
                            <img
                                src={data.image}
                                alt="Inventory"
                            />
                            <div className="card-body">
                                <h2 className="card-title">{data.title}</h2>
                                <p className="card-price">${data.price}</p>
                                <p className="card-price">{data.category}</p>
                                <p className="card-price">{data.description}</p>


                            </div>
                        </div>
                    : "Loading..."
                }
            </div>
            </div>
        </div>
    )
}
