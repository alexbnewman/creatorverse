import React, { useState } from 'react';
import { supabase } from '../client';

function AddCreator() {
    const [creator, setCreator] = useState({ name: "", url: "", description: "", imageURL: "" })
    
    const handleChange = (event) => {
        const { name, value } = event.target
        setCreator((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const addCreator = async (event) => {
        event.preventDefault();

        const { error } = await supabase
            .from('creators')
            .insert({
                name: creator.name,
                url: creator.url,
                description: creator.description,
                imageURL: creator.imageURL
            })

        if (error) {
            console.error("Error inserting data: ", error);
        } else {
            console.log("Creator created successfully!");
            window.location = "/";
        }
    }
    
    return(
        <div>
            <form onSubmit={addCreator}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={creator.name}
                    onChange={handleChange} 
                /><br />
                <br />

                <label htmlFor="url">URL</label><br />
                <input 
                    type="text" 
                    id="url" 
                    name="url" 
                    value={creator.url}
                    onChange={handleChange} 
                /><br />
                <br />

                <label htmlFor="description">Description</label><br />
                <input 
                    type="text" 
                    id="description" 
                    name="description" 
                    value={creator.description}
                    onChange={handleChange} 
                /><br />
                <br />

                <label htmlFor="imageUrl">Image URL</label><br />
                <input 
                    type="text" 
                    id="imageUrl" 
                    name="imageUrl" 
                    value={creator.imageUrl}
                    onChange={handleChange} 
                /><br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default AddCreator