import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Gallery() {
    let navigate = useNavigate()
    const [gallery, setGallery] = useState([])

    const getData = async () => {
        await axios.get('http://localhost:8000/galleries/')
        .then(res => {
            if (res) {
                setGallery(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const goToGallery =(x)=>{
        navigate(`${x.id}`)
    }
    return !gallery? null: (
        <div className='gallery'>
            {gallery.map((value) => {
                return (
                    <div className='gallery_card' key={value.id} onClick={()=>goToGallery(value)}>
                        <div className='space'></div>
                        <h2>{value.name}</h2>
                        <img src={value.photo_url}></img>
                    </div>
                )
            })}
            

        </div>
    );
}

export default Gallery;