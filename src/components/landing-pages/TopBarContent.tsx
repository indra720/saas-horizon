import React, { useState } from 'react';

const TopBarContent = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      <div className='p-2 bg-card'>
        <div className='flex justify-between items-center p-2'>
          <h4 className="text-sm font-semibold text-foreground">Top Bar </h4>
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
        <hr />
        <div className='p-4'>
          <textarea
            className="border border-gray-300 rounded-sm outline-none w-full p-2 h-[200px]
             focus:border-[#0d786b]
             focus:ring-1 focus:ring-[#23998b]
             transition"
          >
            Join us
          </textarea>

        </div>
      </div>

    </>
  );
};

export default TopBarContent;
