//import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const UseList = () => {
    // const [list,setList] =useState([]);
    // const [loading , setLoading] = useState(true);
    // useEffect(() =>{
    //     fetch('http://localhost:5000/list')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setList(data)
    //         setLoading(false)
    //     })
    // },[])
    // return [list,loading]



    const axiosPublic = UseAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         });
    // }, [])

    const {data: list = [], isPending: loading, refetch} = useQuery({
        queryKey: ['list'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/list');
            return res.data;
        }
    })


    return [list, loading, refetch]
}

export default UseList;