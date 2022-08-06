import React, { useEffect } from 'react'

function useSrollToTop() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
          
    },[])
}

export default useSrollToTop