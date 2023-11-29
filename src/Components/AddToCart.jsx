
import AddToCartMap from "./AddToCartMap";
import UseMenu from "./UseMenu";
import UseOffer from "./UseOffer";


const AddToCart = () => {
    // const [cart,setCart] =useState([]);
    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         const popularMenu =data.filter(item => item.category === 'popular');
    //         setCart(popularMenu)
    //     })
    // },[])
    const [offer] = UseOffer();
    const popular =offer.filter(item => item.category === 'popular');
    return (
        <div>
             <div className=' items-center justify-around flex mt-[200px]'>
                <p className='text-center text-[40px] mt-[50px] border-b-4 border-[#411900] font-b text-[#411900]' data-aos="fade-down">OUR SELECTIONS</p>
            </div>
            {/* <div>
            <img className="h-[1000px] w-full mt-[100px]" src="r17.jpg"></img>
            </div> */}
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 mt-[100px] mb-[200px]" >
            {
                popular.map(item => <AddToCartMap key={item._id} item={item}></AddToCartMap>)
            }
        </div>
        </div>
    );
};

export default AddToCart;