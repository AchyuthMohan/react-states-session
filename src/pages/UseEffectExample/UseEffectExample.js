import React,{useEffect,useState} from 'react'

const UseEffectExample = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        // console.log("Hello DSC")
        document.title=`you clicked ${count} times`;
    })
  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={()=>{
            setCount(count+1)
        }}>Click Me</button>
    </div>
  )
}

export default UseEffectExample