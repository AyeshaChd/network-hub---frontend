import {BASE_URL} from "../utils/constants"
import { useDispatch ,useSelector } from "react-redux"
import axios from "axios"
import { useEffect } from "react"
import {addRequests} from "../utils/requestSlice"
const Requests = () => {

    const dispatch = useDispatch()
       const requests = useSelector(store => store.request)

    const fetchRequests= async()=>{
     const res = await axios.get( BASE_URL + "/user/requests/received",{withCredentials:true})
    
     dispatch(addRequests(res?.data?.data))
     console.log(res?.data?.data)
   
    }
     
  
    useEffect(()=>
    {
      console.log("hii from useEt")
fetchRequests()

    },[]
    )
      console.log("requests from ayesha ",requests)
       if( ! requests)return
     if(requests.length=== 0) return <h2> No friend Requests</h2>
 
  return (
    <div className="flex flex-col items-center">
       
        <h3 className="text-1xl font-bold mt-3" > Friend Requests</h3>
       {requests.map(request =>{

        console.log("hello")
        console.log("request",request)
  const {firstName,lastName,about , photoUrl,_id,age,gender}= request.fromUserId

  //adjusting the about tag to show limited data
    const text = about
const wordLimit= 8
const  truncatedAbout= text.split(" ").slice(0,wordLimit).join(" ") + " ... "
       
return(


    <div key={_id} className="card  card-side bg-amber-600 shadow-sm mt-5   w-80 md:w-1/3 flex gap-1  h-20 items-center ">
 
  <figure className="w-1/4 h-20  ">
    <img
      src= {photoUrl}
      alt="photo" className="w-16 h-16 rounded-full"/> 
  </figure> 
    <div className="card-body p-1 w-1/2 text-sm gap-0">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
  
   { truncatedAbout && <p className="truncate">{truncatedAbout}</p>}
  { age && gender && <p>{age + " , " + gender }</p>}
   
   </div>
   </div>
   )})}
   <div/>

 </div>)}
 
export default Requests