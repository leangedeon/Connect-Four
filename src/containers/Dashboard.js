import React, { useEffect, useState } from 'react';

export const Dashboard = () => {
    
    const [title, setTitle] = useState([]);
    
    useEffect(async () => {
        
        const data = await fetch(`/api/sample`)
        const dataJSON = await data.json()
        setTitle(dataJSON.title)
    }, []);
    

    return (
        <>
            <div className="row">
                <h3>{title}</h3>
            </div>
        </>
    )

}