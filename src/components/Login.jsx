import axios from "axios";
import { useState } from "react"
import  {addUser}  from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";




const Login = () => {
   const navigate =useNavigate();
    const [firstName,setfirstName]=useState("")
    const [lastName,setlastName]=useState("")
    const [emailId ,setEmailId] =useState("");
    const [password ,setPassword] =useState("")
    const [isLoggedIn ,setLoggedIn]=useState(false)
    
    const dispatch = useDispatch()
     const [error,setError]=useState("")
   
   
    const handlelogin = async ()=>
    {
      try{
        const res =   await axios.post(BASE_URL+"/login",{
            emailId,password
           },{withCredentials:true})
             dispatch(addUser(res.data))
             return navigate("/")
      }
    
      catch(error)
      {
         setError(error.response?.data?.message || error.response?.data || "Invalid credentials")
    console.log(error.message)
      }
    }
    const handleSignUp = async()=>
    {
      try{
        const res=  await axios.post(BASE_URL+"/signup",{firstName,lastName,emailId,password},{withCredentials:true})
             dispatch(addUser(res?.data?.data))
             setLoggedIn(true)
             return navigate("/profile")
      
      }
      catch(error)
      {
        setError(error.response?.data?.message || error.response?.data || "Invalid credentials")
    console.log(error.message)
      }
    }
  return (
  
    <div className="flex justify-center mt-5 mb-20">
    <div className="card card-border bg-black w-96 mt-0">
  <div className="card-body">
    <h2 className="card-title justify-center">{isLoggedIn ? "Login" : "SignUp"} </h2>
   { !isLoggedIn && <><div><fieldset className="fieldset">
 <legend className="fieldset-legend text-[16px] text-white ">First Name</legend>
  <input value={firstName} onChange={e => setfirstName(e.target.value)} type="text" className="input " placeholder="Type here"  />
 
</fieldset></div>
    <div><fieldset className="fieldset">
  <legend className="fieldset-legend text-[16px] text-white">Last Name</legend>
  <input value={lastName} onChange={e => setlastName(e.target.value)} type="text" className="input " placeholder="Type here" />
 
</fieldset></div>
</>}
    <div><fieldset className="fieldset">
  <legend className="fieldset-legend text-[16px] text-white">Email</legend>
  <input value={emailId} onChange={e => setEmailId(e.target.value)} type="text" className="input " placeholder="Type here"  />
 
</fieldset></div>
    <div><fieldset className="fieldset">
  <legend className="fieldset-legend text-[16px] text-white">Password </legend>
  <input value={password} onChange={e => setPassword(e.target.value)} type="text" className="input " placeholder="Type here" />
 
</fieldset></div>

  {error && <p className="text-red-700">{error}</p>}
   
    <div className="card-actions  flex-col justify-center items-center ">
    <p className="text-white cursor-pointer" onClick={()=>setLoggedIn(value=>!value)}>{isLoggedIn ? "New user ! SignUp here" :"aleady registered! login here"}</p>
      <button className="btn border-t-green-900 mt-1" onClick={isLoggedIn ? handlelogin :handleSignUp}>{isLoggedIn ? "Login" : "SignUp"}</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Login