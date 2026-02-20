import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

const JournalContent = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="p-4 flex flex-col gap-4">
      
      {/* Top Card */}
      <div className='bg-card rounded-sm border flex flex-col gap-4'>
        
        <div className='flex justify-between items-center p-2'>
          <h4 className="text-sm font-semibold text-foreground">Join user</h4>

          <button
            onClick={() => setActive(!active)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300
            ${active ? "bg-[#0d786b]" : "bg-gray-300"}`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-300
              ${active ? "translate-x-6" : "translate-x-0"}`}
            />
          </button>
        </div>

        <hr className='m-2' />

        {/* Form Grid */}
        <div className='p-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
          
          <div className='flex flex-col gap-2'>
            <label htmlFor="heading" className='text-sm'>Heading</label>
            <input
              id="heading"
              name="heading"
              type="text"
              placeholder='All In One Place CRM System'
              className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1 focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="description" className='text-sm'>Description</label>
            <input type='text'
              id="description"
              name="description"
              
              placeholder='Use these awesome forms to login or create new account in your project for free.'
              className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1 focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm"
            />
          </div>

        </div>

        <hr className='my-5 border-gray-200' />

        <div className='flex justify-end pr-4 pb-2'>
          <Button className="bg-[#0d786b] hover:bg-[#0a5e54]">
            Save Changes
          </Button>
        </div>

      </div>

      {/* Table Card */}
      <div className='p-2 bg-card rounded-sm border'>

        <hr className='my-5 border-gray-200' />

        <div className="rounded-md border mx-2 mb-4 overflow-hidden">
          <Table>
            <TableHeader className='bg-muted/50 text-center'>
              <TableRow>
                <TableHead className="w-1/3">No</TableHead>
                <TableHead className='w-1/3'>Name</TableHead>
                <TableHead className="px-6">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Data rows will go here */}
            </TableBody>
          </Table>
        </div>

      </div>

    </div>
  );
};

export default JournalContent;
