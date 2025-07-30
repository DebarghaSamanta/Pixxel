import { useEffect, useState } from "react"

export const useParallax=()=>{
    const[scrollY,setscrollY] = useState(0);
    useEffect(()=>{
        const handleScroll = ()=>setscrollY(window.scrollY);
        window.addEventListener("scroll",handleScroll);
        return ()=>window.removeEventListener("scroll",handleScroll);
    },[])
    return scrollY
}