import Cover from "./Cover";
import orderImg from '../assets/pic/pexels-lisa-fotios-1129510.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import UseMenu from "./UseMenu";
import OrderItem from "./OrderItem";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {
    const categories = ['Donut' , 'Cup_Cakes' , 'Cookies' , 'Cake' , 'Choco_Drinks'];
    const {category} =useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex , setTabIndex]=useState(initialIndex);
    const [menu] = UseMenu();

    const Cake =menu.filter(item => item.category === 'Cake');
    const Cookies =menu.filter(item => item.category === 'Cookies');
    const Donut =menu.filter(item => item.category === 'Donut');
    const Cup_Cakes =menu.filter(item => item.category === 'Cup_Cakes');
    const Choco_Drinks =menu.filter(item => item.category === 'Choco_Drinks');
    return (
        <div>
            <Helmet>
                <title>Choco House | Item</title>
            </Helmet>

           {/* <Cover img = {orderImg} title = "OUR ORDER"></Cover> */}
           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='flex justify-around items-start'>
             <TabList className='text-left mt-[50px] grid grid-cols-1 '>
               <p className="text-[40px]  font-a text-[#411900]">Categories</p>
               <div className="divider bg-[#411900] h-[3px] w-[300px]"></div>
                <Tab className='my-[20px] text-[25px] font-a'>Donut</Tab>
                <Tab className='my-[20px] text-[25px] font-a'>Cup_Cakes</Tab>
                <Tab className='my-[20px] text-[25px] font-a'>Cookies</Tab>
                <Tab className='my-[20px] text-[25px] font-a'>Cake</Tab>
                <Tab className='my-[20px] text-[25px] font-a'>Choco_Drinks</Tab>
             </TabList>
               <TabPanel>
               <div className="grid grid-cols-3 ">
                {
                   Donut.map(item => <OrderItem key={item._id} item={item}></OrderItem>) 
                }
               </div>
                </TabPanel>
               <TabPanel>
                <div className="grid grid-cols-3 ">
                {
                   Cup_Cakes.map(item => <OrderItem key={item._id} item={item}></OrderItem>) 
                }
                </div>
               </TabPanel>
               <TabPanel>
               <div className="grid grid-cols-3 ">
                {
                   Cookies.map(item => <OrderItem key={item._id} item={item}></OrderItem>) 
                }
               </div>
               </TabPanel>
               <TabPanel>
              <div className="grid grid-cols-3 ">
                {
                   Cake.map(item => <OrderItem key={item._id} item={item}></OrderItem>) 
                }
             </div>
               </TabPanel>
               <TabPanel>
              <div className="grid grid-cols-3 ">
               {
                   Choco_Drinks.map(item => <OrderItem key={item._id} item={item}></OrderItem>) 
                }
              </div>
               </TabPanel>
           </Tabs>
        </div>
    );
};

export default Order;