import React, { useEffect, useState, useRef } from 'react'

export const useFetch = (url) => {


    const isMounted = useRef(true);



    const [state, setstate] = useState({
        data: null, 
        loading: true,
        error: null
    });

    useEffect(() => {
        
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        fetch(url)
        .then(quote => quote.json())
        .then(data => {

            
                if(isMounted.current){
                   setstate({
                    loading: false,
                    error: null,
                    data
                })  
                }else{
                    console.log("No esta montado ")
                }
                
          

            
        })
        .catch()
    }, [url])

    return state;
}
