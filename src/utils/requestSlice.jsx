import { createSlice } from "@reduxjs/toolkit"

const requestSlice = createSlice({
    name :"requests",
    initialState:null,
    reducers:{
        addRequests:(state,action)=>
        {
           return action.payload
        },
        removeRequest:(state,action)=>{
        
            // console.log("actionID",action.payload)

            const newARR=state.filter(req=>req.requestId !== action.payload)
            // console.log("newArr",newARR)
         return newARR
        }

    },
})
export const {addRequests,removeRequest}=requestSlice.actions
export default requestSlice.reducer