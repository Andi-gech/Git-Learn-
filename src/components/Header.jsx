import Bottons from "./Buttons";

export default function Header() {
  return (
    <div className="w-[16%] h-full shadow-zinc-300 shadow-sm fixed bg-white  z-30 flex flex-col shadow-sm stroke-zinc-400">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-[54px] h-[54px] bg-zinc-200 rounded-full"></div>
        <div className="text-zinc-900 font-bold text-lg mt-2">User</div>
        <p className="text-[11px] text-blue-600 ">Admin</p>
      </div>
      <div className=" w-full flex flex-col mt-[30px] ">
        <Bottons name="Dashboard" route={"/"} />

        <Bottons name="Department" route={"/departments"} />

        <Bottons name="Employee service" route={"/Employee"} />
        <Bottons name="Attendance Records" route={"/Record"} />
        <Bottons name="Reports" route={"/Report"} />
      </div>
    </div>
  );
}
