import { useEffect, useState } from "react";

const UseOffer = () => {
    const [offer,setOffer] =useState([]);
    const [loading , setLoading] = useState(true);
    useEffect(() =>{
        fetch('https://returant-server.vercel.app/offer')
        .then(res => res.json())
        .then(data =>{
            setOffer(data)
            setLoading(false)
        })
    },[])
    return [offer,loading]
};

export default UseOffer;