import React,{useState} from 'react'
import BoxModal from '../../components/BoxModal/BoxModal'
const OpenBox = () => {
    const[open,setOpen]=useState(false)
    const show=()=>{
        setOpen(true)
    }
    const hide=()=>{
        setOpen(false)
    }
  return (
    <div>
        <button onClick={show}>Show</button>
        <button onClick={hide}>Hide</button>
        {open?<BoxModal/>:null}
        
    </div>
  )
}

export default OpenBox