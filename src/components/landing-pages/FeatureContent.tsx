import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Edit, Plus, Save, Trash2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

import { MenuDialog2 } from './MenuDialog2';
import { Card } from '../ui/card';

const FeatureContent = () => {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);
  const [dialogType, setDialogType] = useState<'second' | 'fourth'>('second');
  const [logo, setLogo] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };


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

  const menuItems2 = [
    {
      id: 1,
      name: 'ERPGo SaaS All In One Business ERP With Project, Account, HRM, CRM',

    },
  ];
  return (
    <>
      <div className='p-2 flex flex-col gap-4'>
        {/* first card */}
        <div className='bg-card rounded-sm border '>
          <div className='flex p-2 '>
            <h4 className="text-sm font-semibold text-foreground">Feature</h4>
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
            <div className='flex flex-col gap-2'>
              <label htmlFor="title" className='text-sm'>Description</label>
              <input type="text" name="" className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1  focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm" id="" placeholder='Use these awesome forms to login or create new account in your project for free. Use these awesome forms to login or create new account in your project for free.' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="title" className='text-sm'>Buy Now Link</label>
              <input type="text" name="" className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1  focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm" id="" placeholder='https://codecanyon.net/item/erpgo-saas-all-in-one-business-erp-with-project-account-hrm-crm-pos/33263426' />
            </div>



          </div>
          <hr className='my-5 border-gray-200' />
          <div className='flex justify-end pr-4 pb-2'>
            <Button className="bg-[#0d786b] hover:bg-[#0a5e54]">Save Changes</Button>
          </div>
        </div>
        {/* second card */}
        <div className='p-2 bg-card rounded-sm border'>
          <div className='flex justify-between items-center p-2'>
            <h4 className="text-sm font-semibold text-foreground">Menu Bar</h4>
            <div className="relative group">
              <button
                onClick={() => handleCreate('second')}
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
            showBuyNow={dialogType === 'fourth'}
          />
        </div>
        {/* third card */}

        <div className='p-2 bg-card rounded-sm border-b'>
          <div className='flex p-2'>
            <h4 className="text-sm font-semibold text-foreground">Home Section</h4>
          </div>

          <hr className='m-2' />

          <div className='p-4 flex flex-col md:flex-row justify-between items-center'>



            {/* Description */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              <div className='flex flex-col gap-2'>
                <span className='text-sm'>Heading</span>
                <input type='text'
                  placeholder="ERPGo SaaS All In One Business ERP With Project, Account, HRM, CRM"
                  className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1 md:w-[280px] lg:w-[440px] focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm"
                />
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-sm'>Site Description</span>
                <input type='text'
                  placeholder="Use these awesome forms to login or create new account in your project for free."
                  className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1 md:w-[280px] lg:w-[440px] focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm"
                />
              </div>
            </div>

          </div>
          {/* Logo Upload */}
          <div className='flex flex-col gap-2'>
            <span className='text-sm'>Site Logo</span>

            <Card className='h-[150px] w-[150px] flex items-center justify-center overflow-hidden bg-muted'>
              {logo ? (
                <img src={logo} alt="logo preview" className="object-contain h-full w-full" />
              ) : (
                <span className="text-xs text-muted-foreground font-medium">Preview</span>
              )}
            </Card>

            <label className="cursor-pointer">
              <Button asChild className="gap-2 text-sm">
                <span>
                  <Save className="h-4 w-4" />
                  Choose File
                </span>
              </Button>

              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

          </div>
          <hr className='my-5 border-gray-200' />
          <div className='flex justify-end pr-4 pb-2'>
            <Button className="bg-[#0d786b] hover:bg-[#0a5e54]">Save Changes</Button>
          </div>
        </div>
        {/* fourth card */}
        <div className='p-2 bg-card rounded-sm border'>
          <div className='flex justify-between items-center p-2'>
            <h4 className="text-sm font-semibold text-foreground">Menu Bar</h4>
            <div className="relative group">
              <button
                onClick={() => handleCreate('fourth')}
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
                  <TableHead className="w-auto">No</TableHead>
                  <TableHead className='w-auto'>Name</TableHead>
                  <TableHead className="w-auto px-6">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {menuItems2.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell className="text-right px-6">
                      <div className="flex  items-center gap-4">
                        <button
                          onClick={() => handleEdit(item, 'fourth')}
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
        </div>
      </div>




    </>
  );
};

export default FeatureContent;
