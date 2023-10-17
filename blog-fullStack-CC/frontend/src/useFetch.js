import { useEffect, useState } from "react";
const useFetch = (url)=>{
// Debut Hook
   const [Mydata, setMyData] = useState(null);
   const[isPending, setIsPending] = useState(true); // En attente 
   const[error, setError] = useState(null);
    useEffect(()=>{
    
    setTimeout(()=>{ // Debut setTimeout
        fetch(url)
          .then(res =>{
            //console.log(res);
            if(!res.ok){
                throw Error('Could not fetch the data for Blog resource ');                
            }
            return res.json();
          })
          .then(data => {
            setIsPending(false);
            setMyData(data);
            setError(null);
            console.log(data);
          })
          .catch((err) => {
            console.log(err.message);
            setIsPending(false);
            setError(err.message);
          })
    }, 2000); // Fin setTimeout   
   }, [url])   
// Fin Hook
   return {Mydata, isPending, error}
}
export default useFetch;