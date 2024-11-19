import React from "react";
import { Link } from "react-router-dom";
import { PiGreaterThan } from "react-icons/pi";


export const Breadcrumb = ({ classes, items }) => {
    return (
        <ul className={`${classes} flex flex-row items-center`} style={{ textTransform: 'capitalize' }}>
            {items.map((item, index) => {
                return (
                    item.url ? <li className="text-gray-700 text-[13px] flex items-center justify-between"   key={index}><Link  to={item.url}>{item.title}</Link> <PiGreaterThan size={10} className="text-gray-700 mx-2" /></li> : <li className="text-[13px] text-[#424242] font-semibold" key={index}>{item.title}</li>
                )
            })}
        </ul>
    )
}