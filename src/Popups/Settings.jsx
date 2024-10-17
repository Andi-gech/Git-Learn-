/* eslint-disable react/prop-types */

export default function Settings({ onClose }) {
  return (
    <div className="absolute z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white h-[500px] rounded-md shadow-md shadow-zinc-600 p-4 w-[800px] flex flex-row">
        <div className="w-[25%]  h-full  bg-blue-500 ">
          <div className="flex w-full h-[50px] items-center justify-center bg-blue-500 text-white">
            General
          </div>
          <div className="flex w-full h-[50px] items-center justify-center bg-blue-500 text-white">
            Security
          </div>
          <div className="flex w-full h-[50px] items-center justify-center bg-blue-400 rounded-md px-3 text-white">
            Organizations
          </div>
          <div className="flex w-full h-[50px] items-center justify-center bg-blue-500 text-white">
            Notifications
          </div>
          <div className="flex w-full h-[50px] items-center justify-center bg-blue-500 text-white">
            Integrations
          </div>
        </div>
        <div className="w-[75%] h-full bg-white">
          <div className="h-[50px] w-full px-4  flex flex-row justify-between">
            <p className="font-bold text-[25px]">Adjust Payroll Policy</p>
            <p onClick={onClose}>X</p>
          </div>
        </div>
      </div>
    </div>
  );
}
