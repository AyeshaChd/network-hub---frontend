 import { useSelector } from "react-redux"
 import EditProfile from "./EditProfile"
  import UserCard from "./UserCard"



const Profile = () => {

   const user = useSelector(store => store.user)
    if( ! user) return
   console.log(user)
  return (
    <div className="flex  justify-center">
    <div className="mx-2"><EditProfile user={user} />
    </div >
     <div className=" mt-2"><UserCard user={user}  />
    </div>  
    </div>
  )
}

export default Profile