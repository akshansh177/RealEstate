import React from 'react';
import { BiHeartCircle } from 'react-icons/bi';
// import icon
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  return (
    <div className='bg-white shadow-1 w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition rounded-xl'>
      <div className='overflow-hidden'>
        <img className='object-cover w-full h-full' src={house.imageLg} alt='' />
        <div className='absolute rounded-lg w-20 py-2.5 bottom-0 inset-x-0 bg-violet-400 text-white text-xs text-left px-3 leading-4 flex items-center space-x-2'>
        <div><BiHeartCircle/></div> <div>Popular</div>
      </div>
      </div>
      <div className='p-4'>
        <div className='flex items-center justify-between mb-4'>
        <div className='text-lg font-semibold text-violet-500'>
        $ {house.price}
      </div>
      <div>
        <BiHeartCircle height={20} width={20} className='h-4 w-4'/>
      </div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{house.address}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBed />
          </div>
          <div className='text-base'>{house.bedrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBath />
          </div>
          <div className='text-base'>{house.bathrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiArea />
          </div>
          <div className='text-base'>{house.surface}</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default House;
