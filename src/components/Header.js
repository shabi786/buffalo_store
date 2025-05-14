// import { useState, useContext } from 'react';
import Swiggy from '../images/logo.svg';
import { Link } from 'react-router-dom'
import useOnline from '../hooks/useOnline';
// import UserContext from '../context/UserContext';
import { useSelector } from 'react-redux';
import Search from '../images/search.svg';
import Help from '../images/help.svg';
import Cart from '../images/cart.svg';
import Offer from '../images/offer.svg';
import SignIn from '../images/signIn.svg';




const Title = () => {
    return (
        <div className='pl-8'>

            <Link to="/">
                <img className='px-2' src={Swiggy} alt="logo" />
            </Link>
        </div>
    )
}


const Header = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    // const { user } = useContext(UserContext);
    const cartItem = useSelector(store => store.cart.items)
    return (
        <div className='flex justify-between px-4 py-2 shadow shadow-bottom border fixed top-0 w-full bg-white'>
            <Title />
            <div className='flex py-4 list-none text-slate-700 font-semibold'>
                <div className='flex mx-4 items-center hover:text-orange-400 '>
                    <div>
                        <img src={Search} alt="" />
                    </div>
                    <Link to='/'><li className='mx-2'>Home</li></Link>
                </div>
                <div className='flex mx-4 items-center  hover:text-orange-400 '>
                    <div>
                        <img src={Offer} alt="" />
                    </div>
                    <Link to='/about'><li className='mx-2 text-#282c3f'>About</li></Link>
                </div>

                <div className='flex mx-4 items-center  hover:text-orange-400 '>
                    <div>
                        <img src={Help} alt="" />
                    </div>
                    <Link to='/instamart'><li className='mx-2'>Instamart</li></Link>
                </div>
                <div className='flex mx-4 items-center  hover:text-orange-400 '>
                    <div>
                        <img src={SignIn} alt="" />
                    </div>
                    <Link to='/login'><li className='mx-2'>Sign In</li></Link>
                </div>
                <div className='flex mx-4 items-center  hover:text-orange-400'>
                    <div>
                        <img src={Cart} alt="" />
                    </div>
                    <Link to='/cart'><li className='mx-2'>Cart <span className='text-orange-600'>{cartItem.length}</span></li></Link>
                </div>
                {/* <div>
                    {isOnline ? "🟢" : "🔴  "}
                </div> */}
            </div>
            {/* {isOnline ? "✅" : "🔴"}
            {user.name}
            {isLoggedIn ? <button className='bg-red-500 rounded-sm p-2 text-white' onClick={() => setIsLoggedIn(false)}>LogOut</button> : <button className='bg-green-500 rounded-sm p-2 text-white' onClick={() => setIsLoggedIn(true)}>Login</button>} */}
        </div >
    )
}


export default Header;