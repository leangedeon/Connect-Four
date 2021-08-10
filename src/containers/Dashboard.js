import React, { useEffect, useState } from 'react';
import { Row } from "../components/Row/index.jsx";
import { initialState } from "../constants.js";

export const Dashboard = () => {

    const [title, setTitle] = useState([]);
    
    useEffect(async () => {
        
        const data = await fetch(`/api/sample`)
        const dataJSON = await data.json()
        setTitle(dataJSON.title)
    }, []);

    const { 
        dashboard,
        state,
        player,
    } = initialState;

    console.log(dashboard, state, player);

    return (
        <>
            <div className="row">
                <h3>{title}</h3>
            </div>
            <div>
                {
                    dashboard.map((row, index) => (
                        <Row rowData={row} key={`row_${index}`} />
                    ))
                }
            </div>
        </>
    )

}