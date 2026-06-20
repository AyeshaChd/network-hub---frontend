import {BASE_URL} from "../utils/constants"
import { useDispatch ,useSelector } from "react-redux"
import axios from "axios"
import { useEffect } from "react"
import {addRequests,removeRequest} from "../utils/requestSlice"
import { removeUserFromFeed } from "../utils/feedSlice"
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
    const reviewRequest=async(status,requestId,_id)=>
    {
  
      const res =  await axios.post(BASE_URL+ "/request/review/" + status +"/"+ requestId,{},{withCredentials:true})
      console.log( "rejected",res)
      dispatch(removeRequest(requestId))
      dispatch( removeUserFromFeed(_id))
    }
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
  const {requestId} =request

  //adjusting the about tag to show limited data
    const text = about
const wordLimit= 5
const  truncatedAbout= text.split(" ").slice(0,wordLimit).join(" ") + " ... "
       
return(


    <div key={_id} className="card  card-side bg-base-300 shadow-sm mt-5 w-96   flex gap-0  h-20 items-center justify-start">
 
  <figure className="w-[20%] h-20  ">
    <img
      src= {photoUrl}
      alt="photo" className="w-14 h-14 rounded-full"/> 
  </figure> 
    <div className="card-body p-1  gap-0    w-max">
    <h2 className="card-title text-[14px] sm:text-base">{firstName + " " + lastName}</h2>
  
   { truncatedAbout && <p className="truncate text-[12px] ">{truncatedAbout}</p>}
  { age && gender && <p className="text-[12px] ">{age + " , " + gender }</p>}
   
   </div   > 
   <div className ="  flex gap-2 ml-auto "><button className="btn btn-active btn-primary text-[12px] px-1 py-0  sm:py-1 sm:px-1.5" onClick={()=>{reviewRequest('rejected',requestId,_id)}}>Reject</button>
<button className="btn btn-active btn-secondary mr-6  text-[12px]  px-1 py-0  sm:p-1" onClick={()=>{reviewRequest('accepted',requestId,_id)}}>Accept</button></div>
   </div>
   )})}
   <div/>

 </div>)}
 
export default Requests