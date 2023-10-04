import { useState } from "react";
import mobile from "../assets/images/image-product-mobile.jpg";

export default function Mobile() {
    const [items] = useState(mobile)
    return (
        <img src={items} alt="Mobile Image" className="block md:hidden h-60 rounded-t-2xl" />
    )
}