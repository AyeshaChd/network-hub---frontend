 import { useSelector } from "react-redux"
 import EditProfile from "./EditProfile"

import ProfileViewCard from "./ProfileViewCard"



const Profile = () => {

   const user = useSelector(store => store.user)
    if( ! user) return
 
  return (
    <div className="flex flex-col mt-2 mb-12 sm:flex-row justify-center items-center sm:items-start  sm:gap-4 p-4">
    <div className="w-full max-w-sm flex justify-center"><EditProfile user={user} />
    </div >
     <div className=" w-full max-w-sm flex justify-center md:mt-1"><ProfileViewCard user={user}  />
    </div>  
    </div>
  )
}

export default Profile