import { FaHome, FaShoppingCart, FaCalendar, FaRProject, FaBook, FaSearch, FaUtensils } from "react-icons/fa"; 
import { Link, Outlet } from "react-router-dom";
import useCard from "../../Hooks/useCard";

const DashBoard = () => {
    const [cart]= useCard()
  return (
    <div className="flex">
        {/* left  */}
      <div className="w-2/12 min-h-screen bg-orange-500">
        <ul className="menu">
          <li> <Link to="deshboard/userHome"> <FaHome /> User Home </Link></li>
          <li><Link to="deshboard/reservation"> <FaUtensils /> Reservation  </Link> </li>
          <li> <Link to="/deshboard/cart"> <FaShoppingCart /> My Cart({cart.length})</Link> </li>
          <li> <Link to="deshboard/paymentHistory"><FaCalendar /> Payment History </Link> </li>
          <li> <Link to="deshboard/review"> <FaRProject /> Review </Link> </li>
          <li>  <Link to="deshboard/booking"> <FaBook /> My Booking </Link>  </li>

          <div className="divider"></div>
          <li><Link to="/"><FaHome /> Home </Link>  </li>
          <li><Link to="/order/salad"><FaSearch /> Menu</Link> </li>
          </ul>
      </div>
      {/* right */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
