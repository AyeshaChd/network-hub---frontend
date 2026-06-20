import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { BASE_URL } from "../utils/constants"
import axios from "axios"
import { useDispatch } from "react-redux"
import {removeUser} from "../utils/userSlice"
import { useNavigate } from "react-router-dom"
const NavBar = () => {
 
    const user =  useSelector(store => store.user)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const logoutHandle= async()=>
    {   try{
        document.activeElement?.blur(); 
      await axios.post(BASE_URL+"/logout",{},{
        withCredentials :true
      })
  dispatch(removeUser())
  
  return navigate("/login")
  
  } catch (error) {
    console.log(error.reponse);
  }
    }

  return (
  
            <div className="navbar 	bg-black  shadow-sm ">
  <div className="flex-1">
    <Link to="/" className="btn btn-white text-xl">devTinder</Link>
  </div>
  <div className="flex gap-2 mx-4">
    {user && <p className="mt-1">welcome {user.firstName}!</p>}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
         { user && <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoUrl} />
        </div>}
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between" onClick={document.activeElement?.blur()}>
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/connections">Connections</Link></li>
        <li><Link to="/requests">Requests</Link></li>
        <li><Link to="/feed">feed</Link></li>
        <li><a onClick={logoutHandle}>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    
  )
}

export default NavBar