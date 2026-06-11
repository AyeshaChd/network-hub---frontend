import axios from "axios";
import { useState } from "react"
import  {addUser}  from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";




const Login = () => {
   const navigate =useNavigate();

    const [emailId ,setEmailId] =useState("faiqa123@gmail.com");
    const [password ,setPassword] =useState("Faiqa123@#")
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
         setError(error.message)
console.log(error.message)
      }
    }
  return (
  
    <div className="flex justify-center mt-11">
    <div className="card card-border bg-black w-96 mt-0">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div><fieldset className="fieldset">
  <legend className="fieldset-legend text-[16px] text-white">Email</legend>
  <input value={emailId} onChange={e => setEmailId(e.target.value)} type="text" className="input" placeholder="Type here"  />
 
</fieldset></div>
    <div><fieldset className="fieldset">
  <legend className="fieldset-legend text-[16px] text-white">Password </legend>
  <input value={password} onChange={e => setPassword(e.target.value)} type="text" className="input" placeholder="Type here" />
 
</fieldset></div>

  <p className="text-red-700">{error}</p>
    <div className="card-actions justify-center">
    
      <button className="btn btn-primary mt-1" onClick={handlelogin}>Login</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Login