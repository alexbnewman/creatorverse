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
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <form onSubmit={addCreator} className="space-y-6">
                {/* Name */}
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={creator.name}
                    onChange={handleChange}
                    className="text-gray-900 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                {/* URL */}
                <div>
                <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
                    URL
                </label>
                <input
                    type="text"
                    id="url"
                    name="url"
                    value={creator.url}
                    onChange={handleChange}
                    className="text-gray-900 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                {/* Description */}
                <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={creator.description}
                    onChange={handleChange}
                    className="text-gray-900 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                {/* Image URL */}
                <div>
                <label htmlFor="imageURL" className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL
                </label>
                <input
                    type="text"
                    id="imageURL"
                    name="imageURL"
                    value={creator.imageURL}
                    onChange={handleChange}
                    className="text-gray-900 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                {/* Submit Button */}
                <div>
                <input
                    type="submit"
                    value="Submit"
                    className="text-gray-900 cursor-pointer rounded bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition"
                />
                </div>
            </form>
        </div>

    )
}
export default AddCreator