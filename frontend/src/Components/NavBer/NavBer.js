import { Link } from "react-router-dom"
import { service } from "../NavBer";
import { Cart } from "../index";

const NavBer = () => {
  return (
    <>
    <nav className="flex items-center justify-between mt-5">
        <div className=' w-24 flex items-center justify-center gap-1'>
            <img className='w-10' src="\Photos\logo.png"  alt=" Not Found" loading='lazy'/>
            <h4>Pizza</h4>
        </div>
        <div className=''>
            <ul className=' w-52 flex items-center justify-center gap-3'>
              {service?.map((list,index)=>(

              <li key={index}><Link to={list?.link}>{list?.name}</Link></li>

              ))}
              <Cart/>
            </ul>
            
        </div>
    </nav>
    
    </>
  )
}

export default NavBer