import React from 'react';
import { BiChevronDown } from 'react-icons/bi';

// import link
import { Link } from 'react-router-dom';
// import logo
import { useBoolean } from '@chakra-ui/react'

const Header = () => {
  const [flag, setFlag] = useBoolean()
  return (
  <div className='bg-gray-50'> 
  <div className='flex p-8 items-center justify-between bg-white'>
      <div className='flex gap-40 align-middle items-center '>
        <div  className='text-xl font-bold cursor-pointer' to='/'>REUNION</div>
        <div className='flex flex-row gap-8 align-middle items-center'>
          <Link className='bg-violet-200/80 hover:text-violet-900 text-violet-600 px-3 py-2 rounded-lg border transition' to='/' onClick={setFlag.toggle}>
            Rent
          </Link>
          <Link
            className=' hover:bg-violet-200/80 text-black px-3 py-2 rounded-lg transition'
            to='/' onClick={setFlag.toggle}
          >
            Buy
          </Link>
          <Link className='hover:bg-violet-200/80 text-black px-3 py-2 rounded-lg  transition' to='/'>
            Sell 
          </Link>
            <Link className='hover:bg-violet-200/80 text-black px-3 py-2 rounded-lg  transition flex items-center gap-2' to='/'>
            Manage Property <BiChevronDown/>
          </Link>
          <Link
            className='hover:bg-violet-200/80 text-black px-5 py-2 rounded-lg transition flex items-center gap-2'
            to='/'
          >
            Resorces <BiChevronDown/>
          </Link>
        </div>
      </div>
     <div className='flex items-center gap-6'>
          <Link className='text-violet-600 hover:text-violet-900 px-3 py-2 rounded-lg border transition flex items-center gap-2' to='/'>
            Log in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-5 py-2 rounded-lg transition flex items-center gap-2'
            to='/'
          >
            Sign up
          </Link>
    </div>
    </div>
    <div className='text-4xl p-12 pl-28 font-medium'>Search properties to {flag ? 'Rent' : 'Buy'}</div>
    </div>
  );
};

export default Header;
