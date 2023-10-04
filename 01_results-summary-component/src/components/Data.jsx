import { useState } from 'react'
import data from "../data.json";

export default function Data() {
    const [items] = useState(data) 
    return(
    <div className=''>      
      {items.map((item, index) => (
        <div key={index} style={{backgroundColor: item.bgColor,}} className='my-3 rounded-xl flex py-5 px-6 items-center'>
          <img src={item.icon} alt={item.category} className='' />
          <p style={{color: item.color,}} className=''>
            <p className='ml-3 text-lg'>{item.category}</p>
          </p>
          <p className='ml-auto font-bold text-ntl-grayblue'>
            {item.score}
            <span className='text-ntl-grayblue/70'>/ 100</span>
          </p>
        </div>
      ))}
    </div>
)}
