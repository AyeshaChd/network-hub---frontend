import { useState } from "react";
 import { useDispatch } from "react-redux";
  import { BASE_URL } from "../utils/constants";
  import axios from "axios"
  import {addUser} from "../utils/userSlice"

const EditProfile = ({user}) => {
  
  
    const [firstName ,setfirstName] =useState(user.firstName);
            const [lastName ,setlastName] =useState(user.lastName)
    const [photoUrl ,setphotoUrl] =useState(user.photoUrl);
            const [age ,setage] =useState(user.age)
    const [gender ,setgender] =useState(user.gender);
            const [about ,setabout] =useState(user.about)
             const dispatch = useDispatch()
               const [error,setError]=useState("")
           
           
             const handleSave = async ()=>
            {
              try{
                 const res= await axios.patch(BASE_URL + "/profile/edit",{
                    firstName,lastName,age,photoUrl,gender,about
                   },{withCredentials:true})
                     dispatch(addUser( res?.data?.data))  // make sure you are sending the updated data to the store
                   
             }
            
              catch(error)
              {
                 setError(error.message)
        console.log(error.message)
              }
            } 
             return (
          
            <div className="flex justify-center mt-2  pb-20">
             <div className="card card-border bg-black w-80 ">
          <div className="card-body gap-1">
            <h3 className="card-title justify-center">Edit Profile</h3>
            <div><fieldset className="fieldset gap-0">
          <legend className="fieldset-legend text-[14px] text-white p-0 mb-0.5">First Name</legend>
          <input value={firstName} onChange={e => setfirstName(e.target.value)} type="text" className="input input-sm mt-0" />
         
        </fieldset></div>
            <div><fieldset className="fieldset gap-0">
          <legend className="fieldset-legend text-[14px] text-white p-0 mb-0.5">Last Name</legend>
          <input value={lastName} onChange={e => setlastName(e.target.value)} type="text" className="input input-sm"  />
         
        </fieldset></div>
            <div><fieldset className="fieldset gap-0">
          <legend className="fieldset-legend text-[14px] text-white p-0 mb-0.5">Photo URL</legend>
          <input value={photoUrl} onChange={e => setphotoUrl(e.target.value)} type="text" className="input input-sm"  />
         
        </fieldset></div>
            <div><fieldset className="fieldset gap-0">
          <legend className="fieldset-legend text-[14px] text-white p-0 mb-0.5 ">Age</legend>
          <input value={age} onChange={e => setage(e.target.value)} type="text" className="input input-sm" />
         
        </fieldset></div>
            <div><fieldset className="fieldset gap-0">
          <legend className="fieldset-legend text-[14px] text-white p-0 mb-0.5">Gender</legend>
          <input value={gender} onChange={e => setgender(e.target.value)} type="text" className="input input-sm"  />
         
        </fieldset></div> 
            <div><fieldset className="fieldset">
          <legend className="fieldset-legend text-[14px] text-white p-0 mb-0.5">About</legend>
          <input value={about} onChange={e => setabout(e.target.value)} type="text" className="input input-sm "  />
         
        </fieldset></div>
        
          <p className="text-red-700">{error}</p>
            <div className="card-actions justify-center">
            <button className="btn btn-primary mt-1" onClick={handleSave}>Save Profile</button>
            </div>
          </div>
        </div> 
      
        </div>
   
  )
        
        
        }
  
        
         


export default EditProfile