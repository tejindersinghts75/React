import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../App.css'
import { addToCart } from '../Features/AddtoCart/AddToCart';
import { UseSelector, useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import Logout from '../Logout';
import Button from './Button';

function Navigation(props) {
    

    const {cart,totalPrice} = useSelector((store)=>store.todoSlice)
    console.log("cart",cart)   
    // console.log("totalPrice",totalPrice)
    const totalprice =[]
    cart.map((item)=>{totalprice.push(item.totalPerQty)})
    console.log(totalprice)
    let sum =0;
    for(let i =0 ; i<totalprice.length; i++)
    {
        sum += totalprice[i]
    }
    console.log(sum)
    const getToken = localStorage.getItem('token')
    const {loginToken} = useSelector((store)=>store.todoSlice)
    let isShow = getToken
    console.log(isShow)
    return (
        <div>
            <div className='navbar'>
                <div className='navbar-ul'>
                {isShow &&<li><Link to="/">Home</Link></li>}
                   {isShow &&  <li><Link to="/about">About</Link></li>}
                   {isShow && <li><Link to="/socialmedia">Social Medial</Link></li>}
                   {isShow && <li><Link to="/pages">Pages</Link></li>}
                   {isShow && <li><Link to="/news">News</Link></li>}
                   {isShow && <li><Link to="/shop">Shop</Link></li>}
                   {isShow && <li><Link to="/contact">Contact</Link></li>}
                    <li><Link to="/login">login</Link></li>
                   {isShow && <li><Link to="/signup">Sign Up</Link></li> }
                   {isShow && <li><Link to="/dashboard">Dashboard</Link></li>}
                </div>
                <div style={{display:'flex', gap:"10px", alignItems:"center"}}> 
                    {isShow && <Logout/>}
                    {isShow &&   <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
      {cart.length}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {cart.map((item,index)=>(
            
                    <div key={index} style={{width:"350px",display:"flex", padding:"20px", gap:"30px", alignItems:"center", border:'grey'}}>
                <img style={{width:"100px", height:"100px"}} src={item.thumbnail} alt=''/>

                <div>
                <p>{item.title}</p>
                    
               <p>{item.price}</p>
                <p>{item.quantity}</p>
        <p>{item.totalPerQty}</p>
                </div>
             
                </div>
                ))}
                   <p>Total {sum} </p>
      </Dropdown.Menu>
             
    </Dropdown>}
    </div>
    
            </div>
        </div>
    );
}

export default Navigation;