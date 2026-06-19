import { useDispatch ,useSelector} from "react-redux"
import { BASE_URL } from "../utils/constants"
import axios from "axios"
import { useEffect } from "react"
import {addFeed} from "../utils/feedSlice"
import UserCard from "./UserCard"


const Feed = () => {
   
 
  const feed = useSelector(store => store.feed)
  const dispatch=useDispatch()
 
    const getFeed= async()=>
    {
      if(feed) return
      try{
      const res = await axios.get(BASE_URL + "/user/feed", {withCredentials:true})
  
        dispatch(addFeed(res.data))
      }catch(error)
      {
        console.log(error)
      }
      
    }

     useEffect(() => {
    getFeed();
  }, []);
  if( ! feed) return
  if(feed.length === 0) return <div className="flex justify-center text-xl mt-2 font-bold"><h2 >No More Other Users  are available</h2></div>

  return (
  
  feed && <div className=" flex justify-center  ">
 <UserCard  user={feed[0]}/>
    </div>

)

  }

export default Feed