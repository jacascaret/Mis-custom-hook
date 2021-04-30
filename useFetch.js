import { useState, useEffect,useRef} from "react"


export const useFetch = (url) => {
    const ISMounter = useRef(true);
   
const [state, setstate] = useState({data:null, loading:true, error:null});
useEffect(() => {
   
    return () => {
        ISMounter.current= false;
    }
}, []) 

useEffect(() => {
    setstate({data:null, loading:true, error:null});
    fetch(url)
         .then(resp => resp.json())
         .then(data => {
            setTimeout(() => {
                if(ISMounter.current){
                    setstate({
                        loading: false,
                        error: null,
                        data
                    })  
                }else{
                    console.log('set estate no se llamo');
                }
                
            }, 2000); 
            
         });
 }, [url])
 return state; 

}
