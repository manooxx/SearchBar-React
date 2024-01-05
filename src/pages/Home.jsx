import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


const Home = ({ placeholder, data }) => {

  const [input, setInput] = useState("")

  

  const [empty, SetEmpty] = useState("")

  


  const handleChange = (event) => {
    const searchWord = event.target.value;
    SetEmpty(searchWord);
    const newFelter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") setInput([])
    else setInput(newFelter)

  }

  const emptyBar=()=>{

    setInput([]);

    SetEmpty("");


  }

  return (
    <div className='w-full h-screen bg-gradient-to-r from-violet-950 to-purple-700 text-white flex flex-col  items-center gap-1 pt-20'>

      <h1 className='text-7xl font-extrabold'>
        Book SearchBar
      </h1>
      <div className='w-80 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full'>

      </div>

      <div className='w-1/3 h-12 bg-white mt-10 flex items-center gap-3 px-2'>

        <input className='outline-none text-gray-600 text-xl font-semibold w-full' type="text" value={empty} onChange={handleChange} placeholder={placeholder} />
        {input.length === 0 ? <FaSearch className='text-gray-600 text-xl hover:cursor-pointer' /> : <IoClose className='text-gray-600 text-2xl hover:cursor-pointer' onClick={emptyBar} />

        }

      </div>


      {input.length != 0 &&
        (<div className='w-1/3 max-h-60 bg-white  overflow-scroll text-gray-600 text-lg font-semibold  '>
          {
            input.slice(0, 10).map((value, key) => {

              return <div className='hover:bg-purple-400 px-2 hover:text-gray-900' key={key}> <a href={value.link}>{value.title}</a> </div>
            })
          }

        </div>)

      }

    </div>
  )
}

export default Home
