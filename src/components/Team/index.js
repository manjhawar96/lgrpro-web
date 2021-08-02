import React from 'react';
import nickAvatar from '../../images/nick-avatar.png';

const Team = () => {
  return (
    <div className="py-12 bg-yellow-100 flex justify-center flex-col relative">
      <div className="container mx-auto px-3 space-y-8">
        <div className="font-sans text-center text-[40px] leading-[1.1]  font-bold lg:w-3/4 ">
          Meet the Team
        </div>

        <div className="flex flex-col space-y-2">
          <div className="flex flex-col justify-center text-center items-center">
            <img src={nickAvatar} className="w-[200px]" />
            <p className="text-[#1B2647] font-heading text-base font-bold">
              Nick Zhang CPO
            </p>
            <p className="text-[#1B2647] font-heading text-base font-bold">
              Nerdy kid
            </p>
            <p className="text-[#1B2647] font-heading text-base font-bold">
              nzhang.jiahui@gmail.com
            </p>
          </div>

          <div className="flex flex-col justify-center text-center items-center">
            <img src={nickAvatar} className="w-[200px]" />
            <p className="text-[#1B2647] font-heading text-base font-bold">
              Nick Zhang CTO
            </p>
            <p className="text-[#1B2647] font-heading text-base font-bold">
              Nerdy kid
            </p>
            <p className="text-[#1B2647] font-heading text-base font-bold">
              nzhang.jiahui@gmail.com
            </p>
          </div>

          <div className="flex flex-col justify-center text-center items-center">
            <img src={nickAvatar} className="w-[200px]" />
            <p className="text-[#1B2647] font-heading text-base font-bold">
              Nick Zhang CTO
            </p>
            <p className="text-[#1B2647] font-heading text-base font-bold">
              Nerdy kid
            </p>
            <p className="text-[#1B2647] font-heading text-base font-bold">
              nzhang.jiahui@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
