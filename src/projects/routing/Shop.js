import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

function Shop() {

    const [data, setData] = useState([])

    const fetchItems = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const json = await response.json()
        setData(json)
    }

    useEffect(() => {
        fetchItems()
    }, [])

    const dataList = data.map(item =>
        <li key={item.id}>
            <Link to={`/react-apps-firststeps/shop/${item.id}`}>{item.title}</Link>
        </li>)

    return (
        <div>
            <h1>Shop</h1>
            <ul className="routingShopUl">
                {dataList}
            </ul>
        </div>
    )
}

export default Shop