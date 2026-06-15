 import { useSelector } from "react-redux"
 import EditProfile from "./EditProfile"
  import UserCard from "./UserCard"



const Profile = () => {

   const user = useSelector(store => store.user)
    if( ! user) return
 
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 p-4">
    <div className="w-full max-w-sm flex justify-center"><EditProfile user={user} />
    </div >
     <div className=" w-full max-w-sm flex justify-center md:mt-1"><UserCard user={user}  />
    </div>  
    </div>
  )
}

export default Profile