import { useState, useEffect } from 'react'
import { supabase } from '../client'
import Card from '../components/Card'

const ReadCreators = (props) => {

    const [creator, setCreator] = useState([])

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
        <div className="ReadCreator">
            {
                creators && creators.length > 0 ?
                [...creators]
                .sort((a, b) => a.id - b.id)
                .map((creator,index) => 
                    <Card 
                        key={creator.id}
                        id={creator.id} 
                        name={creator.name}
                        url={creator.url}
                        description={creator.description}
                        imageUrl={creator.imageUrl}
                    />
                ) : <h2>{'No Creators Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadCreators