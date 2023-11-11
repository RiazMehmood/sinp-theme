import SearchIcon from './search';
import { SlBag, SlSettings } from 'react-icons/sl'; 

interface Cart {
    itemCount: number;
    totalPrice: number;
}

const ShoppingCart = ({ itemCount, totalPrice }: Cart) => (
  <div className="flex space-x-4 items-center text-[20px] mr-4">
    <SearchIcon />
    <div className="relative flex space-x-2 justify-center items-center">
      <span className="hover:text-orange-400">
        <SlBag />
      </span>
      <div className="absolute right-10 -top-3 text-[15px] bg-black w-5 h-5 flex items-center justify-center font-bold text-white rounded-full">
        {itemCount}
      </div>
      <p className="">{`$${totalPrice}`}</p>
    </div>
    <span className="hover:text-orange-400">
      <SlSettings />
    </span>
  </div>
);

export default ShoppingCart;
