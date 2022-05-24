import React, { useState,useEffect } from 'react'
import Paragraph from './Paragraph';
import {fetchText} from '../redux/textSlice'
import {useDispatch} from 'react-redux'


function Form() {

  
  const dispatch = useDispatch();

  const [html,setHtml] = useState(false);
  const [length,setLength] = useState(1)
 
  let url = `https://baconipsum.com/api/?type=all-meat&paras=${length}&format=text`;


    useEffect(()=>{
      dispatch(fetchText(url));

  },[length,dispatch,url])

  return (
    <div className='form' style={{marginTop:20}}>
        <form style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
           <div className='paragraphs'>
           <label htmlFor="paragraphs">paragraphs</label>
            <input min={1} max={10} value={length} 
            onChange={(e)=>setLength(e.target.value)} 
            id='paragraphs' type="number" />
           </div>

           <div className='html'>
           <label htmlFor="html">Include HTML</label>
            <select onChange={(e)=>setHtml(e.target.value)} value={html} name="html" id="html">
              <option value={true}>yes</option>
              <option value={false}>no</option>
            </select>
           </div>
        </form>

        <Paragraph html={html}/>
        

        
    </div>
  )
}

export default Form