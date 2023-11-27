import { useLocation } from 'react-router-dom';
import UseList from './UseList';
import ListItems from './ListItems';

const List = () => {
    const [list] = UseList();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const shopName = queryParams.get('shop');

    // Filter the list based on the shopName
    const filteredList = list.filter(item => item.shopname === shopName);

    return (
        <div>
            {/* <p className="text-center text-[30px] text-orange-950">Total Product : {filteredList.length}</p> */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:mx-[80px] mb-[200px] ">
                {filteredList.map(item => (
                    <ListItems key={item._id} p={item}></ListItems>
                ))}
            </div>
        </div>
    );
};

export default List;
