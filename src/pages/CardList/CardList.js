import React,{useEffect,useState} from 'react'
import Card from '../../components/BoxModal/Card/Card'
import axios from 'axios'
const CardList = () => {
    const[todos,setTodos]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/').then((response)=>{
            console.log(response)
            setTodos(response.data)
        })
    },[])
  return (
    <div>
        {todos.map((todo)=>{
            return(
                <Card id={todo.id}title={todo.title}/>
            )
        })}
        
        
    </div>
  )
}

export default CardList