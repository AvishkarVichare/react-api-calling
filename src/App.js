import React,{useEffect, useState} from 'react'

const App = () => {

    const [list, setList] = useState([]);

useEffect(() => {

    const fetchApi = async()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setList(data);
    }
    fetchApi()

}, [])

// console.log(list)
  return (
    <div className='flex flex-col gap-3'>
        <h1 className='text-center font-extrabold text-[20px] my-6'>Listed Items using api json placeholder</h1>
    {list.map((e,index)=>{
        return(
        <div  className='bg-gray-300 w-full p-3 mx-4' key={index}>
            <div>
            <span className='font-extrabold'>{e.id}.</span> <span className='font-bold'>{e.title}</span>
            </div>
            <div >
                {e.body}
            </div>
        </div>
        )
    })}
   </div>
  )
}

export default App