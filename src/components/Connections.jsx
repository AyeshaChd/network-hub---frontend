
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import {useEffect} from "react"
import { useDispatch,useSelector } from "react-redux"
import { addConnection } from "../utils/connectionSlice";
  ; 
const Connections = () => {
     const dispatch   = useDispatch()
     const connections = useSelector(store => store.connection)
    const fetchConnections=async()=>
      
{
       
        try{
           
           const res = await axios.get(BASE_URL + "/user/connections",{withCredentials:true})
           console.log(res?.data?.data)
           dispatch(addConnection(res?.data?.data))
        }
        catch(error){
console.log(error)
        }
    } 
    useEffect(()=>
    {
        fetchConnections();
    }
    ,[])
    if( !connections)return
    if(connections.length=== 0) return <h2> Connections Not Found</h2>
  return (
    <div className="flex flex-col items-center">
        <h3 className="text-1xl font-bold mt-3" >Connections</h3>
       {connections.map(connection =>{
  const {firstName,lastName, photoUrl,about , _id ,age,gender}= connection
  // adjusting the about tag to show limited data
    const text = about
const wordLimit= 8
const  truncated= text.split(" ").slice(0,wordLimit).join(" ") + " ... "
       
return(
    
    <div key={_id} className="card  card-side bg-amber-600 shadow-sm mt-5   w-80 md:w-1/3 flex gap-1  h-20 items-center ">
  <figure className="w-1/4 h-20  ">
    <img
      src= {photoUrl}
      alt="photo" className="w-16 h-16 rounded-full"/> 
  </figure>
  <div className="card-body p-1 w-1/2 text-sm gap-0">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
  
   { truncated && <p className="truncate">{truncated}</p>}
  { age && gender && <p>{age + " , " + gender }</p>}
   
  </div>
</div>
)

       })}
    </div>
  )
}

export default Connections