"use client"
import React, { useState } from 'react'

const page = () => {

  // Variable declared and used
  
  let renderTask="No Task Present"
  const [title, settitle] = useState("")//pass an empty string 
  const [desc, setdesc] = useState("")//pass an empty string 
  const [mainTask, setmainTask] = useState([])//pass an array

  // Function use in react js
  const submitHandler =(e)=>
  {
  e.preventDefault()
  if (title.trim() === '' || desc.trim() === '') {
    alert('Please enter both title and description');
    return; // Stop the function execution
  }

  setmainTask([...mainTask,{title,desc}]);
  settitle("")
  setdesc("")
  }

  const deleteHandler=(i)=>{
  let copytask=[...mainTask]
  copytask.splice(i,1)
  setmainTask(copytask)
  }
    
// condition use so that we can print No avaible task
// mainTask array lengthn should be greater than zero

if(mainTask.length>0)
{
// use of Map in react js From javascript
// In map we pass a arrow function with two parameter and return the things...

renderTask=mainTask.map( (t,i) =>
{
return(
  // key is used as a id to uniquely identify deleted item
  <li key={i} className='flex items-center justify-between '>


  <div className='flex justify-between w-2/3'>

    <h5 className='text-2xl font-semibold'>
      {t.title}  </h5>
    

    <h6 className='text-xl font-medium'>
      {t.desc}  </h6>
    
 
  </div>

  {/* function to delete the task */}

  <button onClick={()=>
  {
    deleteHandler(i)
  }} className='bg-red-500 text-white px-4 py-2 rounded font-bold'>Delete</button>

  </li>
)

})}


return (
  <>
<h1 className='bg-black text-white p-5 text-3xl font-bond text-center'>TO-DO-LIST</h1>

<form onSubmit={submitHandler}>

<input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-3 py-2'//For taking input

placeholder='Enter title here'
value={title}
onChange={(e)=>{
  settitle(e.target.value)// this e.target select the input tag and then .value will take the value of the input tag and we pass that in settitle 
}}

/>


<input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'//For taking input
  placeholder='Enter description here'
  value={desc}
  onChange={(e)=>{
    setdesc(e.target.value)
}}

/>

  <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
</form>

<hr/>
<div className='p-8 bg-slate-200'>
<ul>

{renderTask}

</ul>

</div>

  </>


  )
}

export default page