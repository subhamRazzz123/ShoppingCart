import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { BiCartDownload } from "react-icons/bi";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  //console.log(cart);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex items-top justify-center gap-40">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} post={item} index={item.index} />;
            })}
          </div>

          <div className="flex flex-col items-center  text-gray-700 font-semibold text-lg  gap-10 mt-20">
            <div>
              <p>
                <span>Total item:{cart.length}</span>
              </p>
            </div>
            <div>
              <p>Total Amount : ${totalAmount}</p>
            </div>
            <button className="bg-green-400 text-white border-2  rounded-full font-semibold text-lg p-1 px-3 uppercase  transition duration-250 ease-in hover:scale-110 w-60">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-700 font-semibold text-lg mt-40">
          <BiCartDownload className="text-4xl" />
          <h1>Cart is empty</h1>
          <NavLink to="/">
            <button className="bg-green-400 text-white border-2  rounded-full font-semibold text-lg p-1 px-3 uppercase  transition duration-250 ease-in hover:scale-110 w-60">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
