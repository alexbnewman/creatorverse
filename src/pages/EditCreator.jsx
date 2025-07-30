import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
    const { id } = useParams();
    const [creator, setCreator] = useState({ name: "", url: "", description: "", imageURL: "" });

    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select('*')
                .eq('id', id)
                .single(); // Get a single creator
            
            if (error) {
                console.log('Error fetching creator:', error);
            } else {
                setCreator(data);
            }
        };
        fetchCreator();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        });
    }

    const updateCreator = async (event) => {
        event.preventDefault();
        const { error } = await supabase
            .from('creators')
            .update({ name: creator.name, url: creator.url, description: creator.description, imageURL: creator.imageURL })
            .eq('id', id);
        
        if (error) {
            console.log('Error updating creator:', error);
        } else {
            window.location = "/";
        }
    };

    const deleteCreator = async (event) => {
        event.preventDefault()
        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', id);

        if (error) {
            console.log('Error deleting creator:', error);
        } else {
            window.location = "/";
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <form onSubmit={updateCreator} className="space-y-6">
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
                <textarea
                    rows="5"
                    cols="50"
                    id="description"
                    name="description"
                    value={creator.description}
                    onChange={handleChange}
                    className="text-gray-900 w-full rounded border border-gray-300 px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
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

                {/* Buttons */}
                <div className="flex gap-4">
                <input
                    type="submit"
                    value="Submit"
                    className="cursor-pointer rounded bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition"
                />
                <button
                    type="button"
                    onClick={deleteCreator}
                    className="rounded bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition"
                >
                    Delete
                </button>
                </div>
            </form>
            </div>

    );
};

export default EditCreator