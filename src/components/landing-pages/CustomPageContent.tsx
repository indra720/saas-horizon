import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Edit, Plus, Save, Trash2 } from 'lucide-react';
import { Card } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { MenuDialog } from './MenuDialog';

const CustomPageContent = () => {
  const [logo, setLogo] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  const handleCreate = () => {
    setEditData(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (item: any) => {
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
      name: 'About Us', 
      type: 'page-content', 
      content: 'About us content...', 
      showHeader: true, 
      showFooter: true, 
      showLogin: true 
    },
  ];

  return (
    <>
      <div className='flex flex-col gap-4 '>
        {/* home section */}
        <div className='p-2 bg-card rounded-sm border-b'>
          <div className='flex p-2'>
            <h4 className="text-sm font-semibold text-foreground">Home Section</h4>
          </div>

          <hr className='m-2' />

          <div className='p-4 flex flex-col md:flex-row justify-between items-center'>

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

            {/* Description */}
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Site Description</span>
              <textarea
                placeholder="Enter site description..."
                className="border border-input rounded-sm outline-none p-3 w-[200px] md:w-[400px] h-[100px] bg-background text-sm
            focus:border-[#0d786b]
            focus:ring-1 focus:ring-[#0d786b]
            transition"
              />
            </div>

          </div>
          <hr className='my-5 border-gray-200' />
          <div className='flex justify-end pr-4 pb-2'>
            <Button className="bg-[#0d786b] hover:bg-[#0a5e54]">Save Changes</Button>
          </div>
        </div>
       
       {/* menu bar  */}
        <div className='p-2 bg-card rounded-sm border-t '>
          <div className='flex justify-between items-center p-2'>
            <h4 className="text-sm font-semibold text-foreground">Menu Bar</h4>
            <div className="relative group">
              <button 
                onClick={handleCreate}
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
              <TableHeader className='bg-muted/50'>
                <TableRow>
                  <TableHead className="w-1/3">No</TableHead>
                  <TableHead className='w-1/3'>Name</TableHead>
                  <TableHead className=" w-1/3 px-6">Action</TableHead>
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
                          onClick={() => handleEdit(item)}
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

      <MenuDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        onSave={handleSave} 
        editData={editData} 
      />
    </>
  );
};

export default CustomPageContent;
