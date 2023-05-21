import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { Toaster, toast } from "react-hot-toast";

const CartItem = ({ post }) => {
  const dispatch = useDispatch();

  function removeItem() {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }

  return (
    <div className="flex flex-col items-center justify-between p-4 mt-10 ml-5 rounded-xl  shadow-[14px_4px_11px_6px_#718096] ">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <img className="max-h-40" src={post.image} />
      </div>
      <div>
        <p className="w-40 text-gray-500 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div>
        <p>${post.price}</p>
      </div>
      <div>
        <button
          className="bg-red-400 text-white border-2  rounded-full font-semibold text-[10px] p-1 px-3 uppercase hover:bg-red-400 hover:text-white transition duration-250 ease-in hover:scale-110"
          onClick={removeItem}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
