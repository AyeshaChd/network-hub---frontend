import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import { BASE_URL } from "../utils/constants"
import axios from "axios"
import {useDispatch,  useSelector } from "react-redux"
import {addUser} from "../utils/userSlice"
import {useNavigate} from "react-router-dom"
import { useEffect } from "react"
const Body = () => {
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const fetchData= async()=>
  {
    try{
  if(user) return
    const res = await axios.get(BASE_URL+"/profile/view" ,{
      withCredentials:true 
    })
    dispatch (addUser(res.data))
  
  }
catch(error)
{ 
  if(error.status === 401)
  {
    navigate("/login")
  }
  
}}
  useEffect(() => {
    fetchData();
  }, []); // Empty array ensures this only runs once when the component mounts

  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body