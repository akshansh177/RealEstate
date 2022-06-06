import React, { useContext } from 'react';

// import context
import { HouseContext } from './HouseContext';

// import components
import House from './House';

// import link
import { Link } from 'react-router-dom';

const HouseList = () => {
  const { houses } = useContext(HouseContext);

  return (
    <div className='container mx-auto'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>
        {houses.map((house, index) => {
          return (
            <Link to={`/property/${house.id}`}>
              <House house={house} key={index} />;
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HouseList;
