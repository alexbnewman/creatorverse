import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = ({data}) => {
    const { id } = useParams();
    const [creator, setCreator] = useState({ name: "", url: "", description: "", imageUrl: "" });

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
    };

    useEffect(() => {
        const fetchCreator = async () => {
            const {data} = await supabase
                .from('creator')
                .select()
                .eq('id', id) // filter by id
                .single();

            setCreator(data)
        }
        fetchCreator()
    }, [])

    const updateCreator = async (event) => {
        event.preventDefault();
        const { error } = await supabase
            .from('creators')
            .update({ title: creator.title, author: creator.author, description: creator.description })
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
        <div>
            <form onSubmit={updateCreator}>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" value={creator.title} onChange={handleChange} /><br /><br />

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" value={creator.author} onChange={handleChange} /><br /><br />

                <label htmlFor="description">Description</label><br />
                <textarea 
                    rows="5" 
                    cols="50" 
                    id="description" 
                    name="description" 
                    value={creator.description} 
                    onChange={handleChange}>
                </textarea><br />
                
                <input type="submit" value="Submit" />
                <button type="button" className="deleteButton" onClick={deletecreator}>Delete</button>
            </form>
        </div>
    );
};

export default EditCreator