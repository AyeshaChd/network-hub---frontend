import axios from "axios"
import {BASE_URL} from "../utils/constants"
import {useDispatch} from "react-redux"
import {removeUserFromFeed} from "../utils/feedSlice"

const UserCard = ({user}) => {
  
    const {firstName ,lastName,age ,gender, photoUrl ,about,_id} = user
     const dispatch=useDispatch()
    const handleSendRequest= async(status,_id)=>
    {
      try{
      console.log("userIdddd",_id)
      console.log("status",status)
     const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + _id,{},{withCredentials:true})
     console.log("ress",res)
      dispatch(removeUserFromFeed(_id))
    }
     catch(error)
  {
    console.log(error)
  }
  }
 
  return (
    <div className="card bg-base-300 w-80 shadow-sm mt-6">
  <figure className="h-72 w-full object-cover" >
    <img
      src={photoUrl}
      alt="Picture"
      className="w-full   object-cover " />

  </figure>
  <div className="card-body">
    <h2 className="card-title"> {firstName + " " + lastName}</h2>
    { age && gender && <p>{age + "  , " + gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary"onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
      <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard