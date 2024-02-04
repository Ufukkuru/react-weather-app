import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search({setCity}) {

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };
  
  return (
    <div >
      <form onSubmit={handleSubmit} className='w-5/6 mx-auto justify-center  flex mt-10'>
      <input onChange={handleInputChange}  name='city' className='w-full rounded-2xl pl-5 h-12' type="text" placeholder='Seacrh Location here... ' />
      </form>
    </div>
  )
}

export default Search