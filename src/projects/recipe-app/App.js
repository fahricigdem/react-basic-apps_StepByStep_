import React, { useState, useEffect } from 'react';
import Recipe from "./Recipe"


const App = () => {

    const [recipes, setRecipes] = useState([])
    const [name, setName] = useState("")
    const [calories, setCalories] = useState(10000)
    const [filters, setFilters] = useState({ name: "", calories: 10000 })

    const APP_ID = "fdd263e4"
    const APP_KEY = "a43678d2012a0b9c6d815c7bbbfea1ef"

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        setRecipes(data.hits)
    }

    useEffect(() => {
        getRecipes()
    }, [])

    // recipes.map(i => console.log(i.recipe.label))

    const handleName = (e) => {
        setName(e.target.value.toLowerCase())
    }

    const handleCalories = (e) => {
        setCalories(e.target.value)
    }

    const handleSubmit = (e) => {
        if (calories == "") {
            setFilters({ name: name, calories: 10000 })
        } else {
            setFilters({ name: name, calories: calories })
        }


        e.preventDefault();
    }

    console.log(filters)


    const data = recipes.map((recipe, index) => {

        if (recipe.recipe.label.toLowerCase().includes(filters.name) &&
            (Number(recipe.recipe.calories) < filters.calories)) {
            return (
                <Recipe key={index} label={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} />
            )

        } else {
            return (
                <span></span>
            )
        }

    }

    )

    const style = {
        display: 'flex', flexDirection: "column", justifyContent: 'space-around', alignItems: 'center', flexFlow: 'row wrap'
    }

    return (
        <div className="App">

            <form className="search-form" onSubmit={handleSubmit}>

                <input type="text" className="search-bar" placeholder="Search by Name!..." onChange={handleName} /><br />
                <input type="text" className="search-bar" placeholder="Search by Max Calories!..." onChange={handleCalories} /><br />
                <button className="search-button" style={{ borderRadius: "50%" }} >Submit</button></form>

            <div style={style} >
                {data}  </div></div>
    )
}

export default App

