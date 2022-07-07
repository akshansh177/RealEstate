import React from 'react';

// import components
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import Search from '../components/Search';

const Home = () => {
  return (
    <div className='min-h-[1800px] bg-gray-50'>
      <Search />
      <HouseList />
    </div>
  );
};

export default Home;
