import React from 'react';
import { Button } from '../ui/button';

const PricingPlanContent = () => {
  return (
    <div className="p-4">
      <div className='bg-card rounded-sm border '>
        <div className='flex p-2 '>
          <h4 className="text-sm font-semibold text-foreground">Discover</h4>
        </div>

        <hr className='m-2' />

        <div className='p-4 grid grid-cols-1 md:grid-cols-2 gap-2'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="title" className='text-sm'>Title</label>
            <input type="text" name="" className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1  focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm" id="" placeholder='Feature' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="title" className='text-sm'>Heading</label>
            <input type="text" name="" className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1  focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm" id="" placeholder='All In One Place CRM System' />
          </div>
          
          <div className='flex flex-col md:col-span-2 gap-2'>
            <label htmlFor="title" className='text-sm'>Description</label>
            <input type="text" name="" className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1  focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm" id="" placeholder='Use these awesome forms to login or create new account in your project for free. Use these awesome forms to login or create new account in your project for free.' />
          </div>
        
        </div>
        
        <hr className='my-5 border-gray-200' />
        <div className='flex justify-end pr-4 pb-2'>
          <Button className="bg-[#0d786b] hover:bg-[#0a5e54]">Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlanContent;
