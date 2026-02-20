import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Edit, Plus, Save, Trash2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { MenuDialog2 } from './MenuDialog2';
import { TestimonialDialog } from './TestimonialDialog';

const TestimonialContent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editData, setEditData] = useState<any>(null);
    
    const handleCreate = () => {
      
      setEditData(null);
      setIsDialogOpen(true);
    };
  
    const handleEdit = (item: any, ) => {
      
      setEditData(item);
      setIsDialogOpen(true);
    };
  
    const handleSave = (data: any) => {
      console.log('Saving menu item:', data);
      // Logic to save the data (API call or state update) goes here
      setIsDialogOpen(false);
    };
  
    const handleDelete = (id: number) => {
      console.log('Deleting item:', id);
      // Logic to delete the item
    };
  
    // Mock data for the table
    const menuItems = [
      {
        id: 1,
        name: 'Feature',
      },
    ];
  return (
    <>
      <div className="flex flex-col gap-4">
        {/* first card */}
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

            <div className='flex flex-col md:col-span-2 gap-2 '>
              <label htmlFor="title" className='text-sm'>Long Description</label>
              <textarea name="" className="p-2 border rounded-md border-gray-300 h-[200px] outline-none focus:ring-1  focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm" id="" >
                WorkDo seCommerce package offers you a “sales-ready.”secure online store. The package puts all the key pieces together, from design to payment processing. This gives you a headstart in your eCommerce venture. Every store is built using a reliable PHP framework -laravel. Thisspeeds up the development process while increasing the store’s security and performance.Additionally, thanks to the accompanying mobile app, you and your team can manage the store on the go. What’s more, because the app works both for you and your customers, you can use it to reach a wider audience.And, unlike popular eCommerce platforms, it doesn’t bind you to any terms and conditions or recurring fees. You get to choose where you host it or which payment gateway you use. Lastly, you getcomplete control over the looks of the store. And if it lacks any functionalities that you need, just reach out, and let’s discuss customization possibilities
              </textarea>
            </div>

          </div>

          <hr className='my-5 border-gray-200' />
          <div className='flex justify-end pr-4 pb-2'>
            <Button className="bg-[#0d786b] hover:bg-[#0a5e54]">Save Changes</Button>
          </div>
        </div>

        {/* second card */}
        <div className='p-2 bg-card rounded-sm border'>
        <div className='flex justify-end items-center p-2'>
         
          <div className="relative group">
            <button
              onClick={() => handleCreate()}
              className='bg-[#0d786b] p-1.5 text-white rounded-sm hover:bg-[#0a5e54] transition-colors shadow-sm'
            >
              <Plus className="h-4 w-4" />
            </button>

            <span className="absolute right-0 -top-8 bg-black text-white text-[10px] px-2 py-1 rounded
                   opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              Create
            </span>
          </div>

        </div>

        <hr className='my-5 border-gray-200' />

        <div className="rounded-md border mx-2 mb-4 overflow-hidden">
          <Table>
            <TableHeader className='bg-muted/50 text-center'>
              <TableRow>
                <TableHead className="w-1/3">No</TableHead>
                <TableHead className='w-1/3'>Name</TableHead>
                <TableHead className=" px-6">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menuItems.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="text-right px-6">
                    <div className="flex  items-center gap-4">
                      <button
                        onClick={() => handleEdit(item, )}
                        className="text-blue-600 hover:text-blue-800 transition-colors p-1 rounded-full hover:bg-blue-50"
                        title="Edit"
                      >
                        <Edit className='h-4 w-4' />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-1 rounded-full hover:bg-red-50"
                        title="Delete"
                      >
                        <Trash2 className='h-4 w-4' />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <TestimonialDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onSave={handleSave}
          editData={editData}
          
          hideDescription={false}
        />
      </div>

      </div>
    </>
  );
};

export default TestimonialContent;
