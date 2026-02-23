import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Save } from 'lucide-react';

const HomeContent = () => {
  const [logo, setLogo] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };


  return (
    <>
      <div className='p-2 bg-card rounded-sm border-b'>
        <div className='flex p-2'>
          <h4 className="text-sm font-semibold text-foreground">Home Section</h4>
        </div>

        <hr className='m-2' />

        <div className='p-4 flex flex-col md:flex-row justify-between items-center'>



          {/* Description */}
          <div className='flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Offer Text</span>
              <input type='text'
                placeholder="70% Special Offer"
                className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1 w-full lg:w-[440px] focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm"
              />
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Title</span>
              <input type='text'
                placeholder="Home"
                className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1 w-full lg:w-[440px] focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm"
              />
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Heading</span>
              <input type='text'
                placeholder="ERPGo SaaS All In One Business ERP With Project, Account, HRM, CRM"
                className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1 w-full lg:w-[440px] focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm"
              />
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Trusted by</span>
              <input type='text'
                placeholder="1000+ Customer"
                className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1 w-full lg:w-[440px] focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm"
              />
            </div>
            <div className='flex flex-col col-span-2 gap-2 w-full'>
              <span className='text-sm'>Discription</span>
              <input type='text'
                placeholder="Use these awesome forms to login or create new account in your project for free."
                className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1 w-full focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm"
              />
            </div>

            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Live Demo Link</span>
              <input type='text'
                placeholder="https://demo.rajodiya.com/erpgo-saas/login"
                className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1 w-full lg:w-[440px] focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm"
              />
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Buy Now Link</span>
              <input type='text'
                placeholder="https://codecanyon.net/item/erpgo-saas-all-in-one-business-erp-with-project-account-hrm-crm-pos/33263426"
                className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1 w-full lg:w-[440px] focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm"
              />
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Trusted by</span>
              <input type='text'
                placeholder="1000+ Customer"
                className="p-2 border rounded-md border-gray-300 outline-none focus:ring-1 w-full lg:w-[440px] focus:ring-[#0d786b] focus:border-[#0d786b] transition-all duration-200 text-sm"
              />
            </div>
          </div>
        </div>
        {/* Logo Upload */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <div className='flex flex-col gap-2'>
            <span className='text-sm'>Banner</span>

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
          <div className='flex flex-col gap-2'>
            <span className='text-sm'>Logo</span>

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

        </div>
        <hr className='my-5 border-gray-200' />
        <div className='flex justify-end pr-4 pb-2'>
          <Button className="bg-[#0d786b] hover:bg-[#0a5e54]">Save Changes</Button>
        </div>
      </div>
    </>
  );
};

export default HomeContent;














