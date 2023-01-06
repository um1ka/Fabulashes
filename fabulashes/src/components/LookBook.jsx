import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function LookBook() {
    let navigate = useNavigate()
    const [lookbook, setLookbook] = useState([])

    const getData = async () => {
        await axios.get('http://localhost:8000/lookbooks/')
        .then(res => {
            if (res) {
                setLookbook(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const goToLookbook =(x)=>{
        navigate(`${x.id}`)
    }
    return !lookbook? null: (
        <div className='lookbook'>
            {lookbook.map((value) => {
                return (
                    <div className='lookbook_card' key={value.id} onClick={()=>goToLookbook(value)}>
                        <h2>{value.name}</h2>
                        <p>{value.description}</p>
                        <img src={value.photo_url}></img>
                    </div>
                )
            })}
            <h1>LookBook</h1>
        </div>
    );
}

export default LookBook;