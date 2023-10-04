import inconCart from "../assets/images/icon-cart.svg";

export default function Button() {
    return (
    
        <button className="flex justify-center items-center rounded-lg h-12 w-full bg-dark_cyan hover:bg-verydark_cyan mt-5 md:mt-[30px] ">
            <img className="pr-3" src={inconCart} alt="Shopping Card" />
            <span className="font-montserrat font-bold text-sm text-white">Add to Cart</span>
        </button>
    
    )}

