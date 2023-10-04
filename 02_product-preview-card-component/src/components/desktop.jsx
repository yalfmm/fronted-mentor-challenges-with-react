import { useState } from "react";
import desktop from "../assets/images/image-product-desktop.jpg";

export default function Desktop() {
    const [items] = useState(desktop)
    return (
        <img src={items} alt="desktop" className="hidden md:block w-1/2 rounded-l-2xl" />
    )
}