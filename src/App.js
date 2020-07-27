import React,{useState,Fragment,useEffect} from 'react';
//import Map from './map';
import Lesson from './lesson/Lesson';


export default function App() {
  
  
  const [watchComplete, setWatchComplete] = useState(false);
  const local=localStorage.getItem("key")
  const a=local?JSON.parse(local):[];
  const [url, setUrl] = useState('');
  
   const [values, setValues] = useState(a);
   
   const [currenturl,setCurrenturl]=useState(a[0]);
   useEffect(
     ()=>{
      localStorage.setItem("key",JSON.stringify(values))
     },[values]
   )
   useEffect(
     ()=>{
     if(watchComplete){
      values.shift();
      setCurrenturl(values[0]);
      setWatchComplete(false);
     }
     },[watchComplete]
   )
    const validUrlRegex = RegExp(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
    const handleChange = e =>{
        setUrl(e.target.value);
        //localStorage.setItem("key",JSON.stringify(url))
    }
    const handleSubmit = e =>{
        e.preventDefault();
        //const ur = url
        
        
       if (validUrlRegex.test(url)){
        setValues([...values,url]);
        
        
        if(values.length===0){
        console.log("url",url)
        setCurrenturl(url)
        }
        setUrl('')
       }
        
    }
    

	return (
  
  <div>
          
          <form onSubmit={handleSubmit }>
			<input type="text" name="url" value={url} onChange={handleChange} /> <br/>
            <button type="submit">Add</button><br/>
            </form>
            
          <Fragment>
            {console.log("length",values.length)}
          {console.log("value",values)}
         { values.map((val,i) => <div  key={i}><label onClick={() =>setCurrenturl(val)} > {val}</label></div>)}<br/>
         
         
         <Lesson url={currenturl} watchComplete={watchComplete} setWatchComplete={setWatchComplete}/>         
         {/* {watchComplete&&(values.shift())&&setCurrenturl(values[0])&&setWatchComplete(false)} */}
          </Fragment>
            
            
		
	</div>);
}

