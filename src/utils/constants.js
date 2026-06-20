//  export const BASE_URL="/api"; -----production
 //export const BASE_URL= "http://localhost:3000"; ---- dev

// ------ dynamic
 export const BASE_URL= 
           location.hostname === "localhost" ? "http://localhost:3000":"/api"  

