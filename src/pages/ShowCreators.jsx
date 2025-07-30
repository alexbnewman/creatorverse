import { useState, useEffect } from 'react'
import { supabase } from '../client'
import Card from '../components/Card'
import { Link } from 'react-router-dom';

const ReadCreators = () => {

    const [creators, setCreators] = useState([])

    useEffect(() => {
        const fetchCreators = async () => {
            const {data} = await supabase
                .from('creators')
                .select()
                .order('created_at', { ascending: true })

            setCreators(data)
        }
        fetchCreators()
    }, [])
    
    return (
        <div className="flex flex-col gap-6">
            {
                creators && creators.length > 0 ?
                [...creators]
                .sort((a, b) => a.id - b.id)
                .map((creator) => 
                    <Link to={`/${creator.id}`} key={creator.id}>
                        <Card 
                        id={creator.id} 
                        name={creator.name}
                        url={creator.url}
                        description={creator.description}
                        imageURL={creator.imageURL}
                    />
                    </Link>
                ) : <h2>{'No Creators Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadCreators