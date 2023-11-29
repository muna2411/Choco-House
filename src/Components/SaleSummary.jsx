import UseList from "./UseList";

const SaleSummary = () => {
const [list] = UseList();

    return (
        <div>
<p className="text-center font-a text-[40px]">Sales Summary</p>
<div className="divider"></div>

            <div className="flex justify-around items-center bg-slate-300">
      <div className="mx-auto mt-[100px] ">
            <div className='w-[300px] m-[20px] shadow-lg bg-white'>
              <figure><img className='h-[400px] w-[300px]'  src='https://i.ibb.co/Czp4Sd4/b.jpg'/></figure>
                <div className=" text-black mx-[20px] my-[20px] bg-white">      
                  <h2 className="card-title font-a text-center mb-[20px] "><span className='text-orange-500 mb-[20px]'>Total Income : </span> <span className="mb-[20px]">{list.length}</span>  </h2>
                 
                </div>
            </div>
        </div>

        <div className="mx-auto mt-[100px]">
            <div className='w-[300px] m-[20px] shadow-lg bg-white'>
              <figure><img className='h-[400px] w-[300px]'  src='https://i.ibb.co/SmN4H3D/n.jpg'/></figure>
                <div className=" text-black mx-[20px] my-[20px]  ">     
                  <h2 className="card-title font-a text-center "><span className='text-orange-500 mb-[20px]'>Total Product : </span> <span className="mb-[20px]">{list.length}</span> </h2>
                  
                </div>
            </div>
        </div>

        <div className="mx-auto mt-[100px]"> 
            <div className='w-[300px] m-[20px] shadow-lg bg-white'>
              <figure><img className='h-[400px] w-[300px]'  src='https://i.ibb.co/19qSMZR/bbb.jpg'/></figure>
                <div className=" text-black mx-[20px] my-[20px]">     
                  <h2 className="card-title font-a text-center mb-[20px]"><span className='text-orange-500 mb-[20px]'>Total Sales : </span> <span className="mb-[20px]">{list.length}</span>  </h2>
                  
                </div>
            </div>
        </div>


        </div>
        </div>
    );
};

export default SaleSummary;