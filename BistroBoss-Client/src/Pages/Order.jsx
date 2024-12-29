import orderImage from "../assets/shop/banner2.jpg";
import FoodCard from "../Components/FoodCard";
import UseMenu from "../Hooks/UseMenu";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "../Shared/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const {menu} = UseMenu()
    const {category} = useParams()
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
        <Tabs className='my-10'>
          <TabList className='text-center'>
            <Tab>SALAD</Tab>
            <Tab>PIZZAQ</Tab>
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
