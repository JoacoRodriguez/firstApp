import { useEffect, useState } from "react";

import { GifItem } from "./GifItem";
// import { GetGifs } from "../helpers/getgifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrilla = ({categoria}) => {

    const{images, isLoading} = useFetchGifs(categoria);


    return(

        <>
            <h3>{categoria}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                images.map(( image) =>(
                    <GifItem key = {image.id}
                    {...image}
                    />
                ))}
            </div>

        </>

    )

}