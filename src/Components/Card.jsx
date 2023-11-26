
import CardItem from "./CardItem";
import UseMenu from "./UseMenu";


const Card = () => {

const [menu] = UseMenu();
const popular =menu.filter(item => item.category === 'popular');

    return (
        <div>
            <div className=' items-center justify-around flex my-[80px]'>
                <p className='text-center text-[40px] mt-[50px] border-b-4 border-[#411900] font-b text-[#411900]'>WEEKLY BEST SELLERS</p>
            </div>
            {/* <div className=' items-center justify-around flex mt-[100px] '>
              <p className='text-center text-[40px] mb-[50px] border-y-4 font-a'>Our Menu List</p>
            </div> */}
            <div className="grid grid-cols-4 ">
            {
                popular.map(item => <CardItem key={item._id} item={item}></CardItem>)
            }
        </div>
        </div>
    );
};

export default Card;

