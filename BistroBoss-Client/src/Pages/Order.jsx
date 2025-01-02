import orderImage from "../assets/shop/banner2.jpg";
import UseMenu from "../Hooks/UseMenu";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "../Shared/OrderTab";
import { useState } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "../Components/FoodCard";

const Order = () => {
    const categorys = ['salad','pizza','soup','dessert','drinks']
    const {category} = useParams()
    const initialIndex = categorys.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const {menu} = UseMenu()

    // const {category} = useParams()
    const dissert = menu?.filter (diss => diss.category === 'dessert')
    const pizza = menu?.filter (diss => diss.category === 'pizza')
    const salad = menu?.filter (diss => diss.category === 'salad')
    const soup = menu?.filter (diss => diss.category === 'soup')
    const drinks = menu?.filter (diss => diss.category === 'drinks')
  return (
    <div>
      <Cover
        img={orderImage}
        title="OUR SHOOP"
        subtitle="Would you like to try a dish?"
      ></Cover>

      <div>
      
        <Tabs className='mt-10' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className='text-center'>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUP</Tab>
            <Tab>DESSETRS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          
          
          <TabPanel >
           <OrderTab category={salad}></OrderTab>
          </TabPanel>
          <TabPanel >
           <OrderTab category={pizza}></OrderTab>
          </TabPanel>
          <TabPanel >
           <OrderTab category={soup}></OrderTab>
          </TabPanel>
          <TabPanel >
           <OrderTab category={dissert}></OrderTab>
          </TabPanel>
          <TabPanel >
           <OrderTab category={drinks}></OrderTab>
          </TabPanel>

        </Tabs>
      </div>
    </div>
  );
};

export default Order;
