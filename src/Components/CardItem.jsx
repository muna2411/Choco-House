
import './Yes.css';

const CardItem = ({item}) => {
    const {name,image,price,recipe} =item;
    return (
        <div className="mx-auto mt-[100px]  zoom">
            <img className="w-[280px] h-[400px]" style={{borderRadius:'0 200px 0px 200px'}} src={image}></img>
            <div className="text-center">
              <h2 className="uppercase text-[25px]">{name}</h2>
              <p className="text-[#411900] font-semibold text-[20px]">${price}</p>
              {/* <p className="text-[15px]">{recipe}</p> */}
            </div>
        </div>
    );
};

export default CardItem;