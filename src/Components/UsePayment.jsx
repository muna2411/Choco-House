import { useEffect, useState } from "react";


const UsePayment = () => {
    const [payment,setPayment] =useState([]);
    const [loading , setLoading] = useState(true);
    useEffect(() =>{
        fetch('https://returant-server.vercel.app/payment')
        .then(res => res.json())
        .then(data =>{
            setPayment(data)
            setLoading(false)
        })
    },[])
    return [payment,loading]
};

export default UsePayment;