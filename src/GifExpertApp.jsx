import { useState } from 'react';
import { AddCategory, GifGrid } from './components/';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        //setCategories([...categories, 'Valorant']);
        //  setCategories(cat => [...cat, newCategory])
        //validar que no esté repetido

        if (!categories.includes(newCategory)) {
            setCategories([newCategory, ...categories])
        }

    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
