import { useState } from "react"
import { AddCategory, GifGrid } from './components/'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'Halo' ])


    const onAddCategory = ( onNewCategory )=> {
        if ( categories.includes(onNewCategory) ) return;
        setCategories([onNewCategory,...categories])

        // setCategories( cat => [...cat,onNewCategory])
    }
    


    return (
        <>
        
            <h1>Gifs App</h1>
            
            <AddCategory onNewCategory={ (event) => onAddCategory(event)} />

            { categories.map( (category)=> { 
                return <GifGrid key={crypto.randomUUID()} category={category} /> 
            })}


        </>
    )
}
