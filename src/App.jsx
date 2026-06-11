import { BrowserRouter,Routes ,Route} from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import appStore from "./utils/appStore"
import {Provider} from "react-redux"
import Feed from "./components/Feed"
function App() {
 

  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>}> // parent Route
          
            <Route path="/" element={<Feed/>}/>  // children Route
            <Route path="/login" element={<Login/>}/>  // children Route
            <Route path="/profile" element={<Profile/>}/> // children Route
        </Route>
      </Routes>
      </BrowserRouter>
      
</Provider>

                
           
    </>
  )
}

export default App
