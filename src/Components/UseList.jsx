import { useEffect, useState } from "react";


const UseList = () => {
    const [list,setList] =useState([]);
    const [loading , setLoading] = useState(true);
    useEffect(() =>{
        fetch('http://localhost:5000/list')
        .then(res => res.json())
        .then(data =>{
            setList(data)
            setLoading(false)
        })
    },[])
    return [list,loading]
};

export default UseList;