import { useEffect, useState } from "react";


const UsePayment = () => {
    const [payment,setPayment] =useState([]);
    const [loading , setLoading] = useState(true);
    useEffect(() =>{
        fetch('http://localhost:5000/payment')
        .then(res => res.json())
        .then(data =>{
            setPayment(data)
            setLoading(false)
        })
    },[])
    return [payment,loading]
};

export default UsePayment;