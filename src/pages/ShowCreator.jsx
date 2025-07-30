import { useState, useEffect } from 'react'
import { supabase } from '../client'
import { useParams } from 'react-router-dom';
import Card from '../components/Card'

const ShowCreator = () => {
    const { id } = useParams();
    const [creator, setCreator] = useState([])

    useEffect(() => {
        const fetchCreator = async () => {
            const {data} = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single();

            setCreator(data)
        }
        fetchCreator()
    }, [])
    
    return (
        <div className="ShowCreator">
            <Card 
                key={creator.id}
                id={creator.id} 
                name={creator.name}
                url={creator.url}
                description={creator.description}
                imageURL={creator.imageURL}
            />
        </div>  
    )
}

export default ShowCreator