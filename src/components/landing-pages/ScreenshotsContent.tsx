import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Edit, Plus, Save, Trash2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { MenuDialog2 } from './MenuDialog2'; // Reusing the dialog component

const ScreenshotsContent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);
  const [dialogType, setDialogType] = useState<'second' | 'fourth'>('second'); // Can be adjusted if more types are needed

  const handleCreate = (type: 'second' | 'fourth') => {
    setDialogType(type);
    setEditData(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (item: any, type: 'second' | 'fourth') => {
    setDialogType(type);
    setEditData(item);
    setIsDialogOpen(true);
  };

  const handleSave = (data: any) => {
    console.log('Saving menu item (from ScreenshotsContent):', data);
    // Logic to save the data (API call or state update) goes here
    setIsDialogOpen(false);
  };

  const handleDelete = (id: number) => {
    console.log('Deleting item (from ScreenshotsContent):', id);
    // Logic to delete the item
  };

  // Mock data for the table
  const menuItems = [
    {
      id: 1,
      name: 'Screenshot 1',
      description: 'This is a description for screenshot 1', // Example description, though it will be hidden
      buyNowLink: 'https://example.com/screenshot1'
    },
    {
      id: 2,
      name: 'Screenshot 2',
      description: 'This is a description for screenshot 2',
      buyNowLink: 'https://example.com/screenshot2'
    },
  ];

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className='bg-card rounded-sm border '>
        <div className='flex p-2 '>
          <h4 className="text-sm font-semibold text-foreground">Discover</h4>
        </div>

        <hr className='m-2' />

        <div className='p-4 flex flex-col md:grid md:grid-cols-2 gap-2'>

          <div className='flex flex-col gap-2'>
            <label htmlFor="title" className='text-sm'>Heading</label>
            <input type="text" name="" className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1 w-full focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm" id="" placeholder='All In One Place CRM System' />
          </div>          <div className='flex flex-col gap-2'>
            <label htmlFor="title" className='text-sm'>Description</label>
            <input type="text" name="" className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1 w-full focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm" id="" placeholder='Use these awesome forms to login or create new account in your project for free. Use these awesome forms to login or create new account in your project for free.' />
          </div>



        </div>
        <hr className='my-5 border-gray-200' />
        <div className='flex justify-end pr-4 pb-2'>
          <Button className="bg-[#0d786b] hover:bg-[#0a5e54]">Save Changes</Button>
        </div>
      </div>


      <div className='p-2 bg-card rounded-sm border'>
        <div className='flex justify-end items-center p-2'>
          <div className="relative group">
            <button
              onClick={() => handleCreate('second')} // Use 'second' or a specific type for screenshots if needed
              className='bg-[#0d786b] p-1.5 text-white rounded-sm hover:bg-[#0a5e54] transition-colors shadow-sm'
            >
              <Plus className="h-4 w-4" />
            </button>
            <span className="absolute right-0 -top-8 bg-black text-white text-[10px] px-2 py-1 rounded
                   opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              Create New Screenshot
            </span>
          </div>
        </div>

        <hr className='my-5 border-gray-200' />

        <div className="rounded-md border mx-2 mb-4 overflow-x-auto">
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
                        onClick={() => handleEdit(item, 'second')}
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
        <MenuDialog2
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onSave={handleSave}
          editData={editData}
          showBuyNow={false} // Assuming 'ScreenshotsContent' doesn't need 'Buy Now Link'
          hideDescription={true} // Hide description for Screenshots
        />
      </div>
    </div>
  );
};

export default ScreenshotsContent;
