import { BrowserRouter,Routes ,Route} from "react-router-dom"
import Body from "./Body"
import Login from "./Login"
import Profile from "./Profile"
function App() {
 

  return (
    <>
      <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>}> // parent Route
          
            <Route path="/login" element={<Login/>}/>  // children Route
            <Route path="/profile" element={<Profile/>}/> // children Route
        </Route>
      </Routes>
      </BrowserRouter>
      


                
           
    </>
  )
}

export default App
