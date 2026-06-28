import { BASE_URL } from "../utils/constants"
import axios from "axios"

const Premium = () => {


  const handleBuyButton=async(type)=>
  {
        try{
const order = await axios.post(BASE_URL+"/payment/create",{
membershipType:type
},{
  withCredentials:true
})
  
  const{keyId,amount,currency,orderId,notes}= order.data
  const options = {
        key: keyId ,// Replace with your Razorpay key_id
        amount: amount, // Amount is in currency subunits.
        currency: currency,
        name: 'Dev Tinder',
        description: 'connect to other developers',
        order_id: orderId, // This is the order_id created in the backend
      
        prefill: {
          name: notes.firstName +" "+ notes.lastName,
          email: notes.emailId,
          contact: "9799999999",
        },
        theme: {
          color: '#F37254'
        },
        // 👇 Add this
  handler: function (response) {
    console.log("Payment Success:", response);
  },

  // 👇 Add this
  modal: {
    ondismiss: function () {
      console.log("Checkout popup closed");
    }}
        
      };

  //open dailogue box

    console.log("Before constructor");

const rzp = new window.Razorpay(options);

console.log("After constructor");

rzp.open();

console.log("After open");}
      catch(error)
      {
        console.error("Razorpay Error:", error);
      }
      }
      
  return (
   <div className="flex w-2/3 m-3 mt-18 sm:m-auto sm:mt-20 ">
  <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center"><h1  className="font-bold text-2xl sm:text-2xl text-center">Silver Membership</h1>
  <ul className="ml-3 list-disc"><li>Chat with other people</li>
  <li>100 connections per day</li>
  <li>Blue tick</li>
  <li>3 months</li></ul>
  <button className="btn bg-zinc-400"onClick={()=>handleBuyButton("silver")}>Buy silver</button></div>
 
  <div className="divider divider-horizontal">OR</div>
  <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center"><h1  className="font-bold text-2xl text-center">Gold Membership</h1> <ul className="ml-3 list-disc"><li>Chat with other people</li>
  <li>100 connections per day</li>
  <li>Blue tick</li>
  <li>3 months</li></ul>
   <button className="btn  bg-yellow-500" onClick={()=>handleBuyButton("gold")}>Buy Gold</button></div>
</div>
  )
}

export default Premium