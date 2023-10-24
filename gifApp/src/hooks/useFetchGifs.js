import React, { useEffect, useState } from 'react'
import { GetGifs } from "../helpers/getgifs";


export const useFetchGifs = (categoria) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState([true])

    const getImages = async() =>{
        const newImages = await GetGifs(categoria)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect( () =>{
            getImages()                
    }, [])


    useEffect( () =>{
            getImages()                
    }, [])

    return{
        images,
        isLoading
    }

}
