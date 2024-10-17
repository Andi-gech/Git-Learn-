import { FaBell } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { AreaChart, Area, XAxis, Tooltip } from "recharts";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import Settings from "../Popups/Settings";
import { useState } from "react";
export default function Home() {
  const [settingson, setsetting] = useState();
  const data = [
    {
      name: "Sales",
      EmployeeNo: 4000,
    },
    {
      name: "Marketing",
      EmployeeNo: 3000,
    },
    {
      name: "Finance",
      EmployeeNo: 2000,
    },
    {
      name: "Human Resources",
      EmployeeNo: 2780,
    },
    {
      name: "Operations",
      EmployeeNo: 1890,
    },
  ];

  const rows = [
    {
      id: 1,
      employeeName: "John Doe",
      payrollDate: "2024-10-01",
      amount: "3,500",
      status: "Paid",
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      payrollDate: "2024-10-01",
      amount: "4,200",
      status: "Paid",
    },
    {
      id: 3,
      employeeName: "Mark Johnson",
      payrollDate: "2024-10-01",
      amount: "2,800",
      status: "Pending",
    },
    {
      id: 4,
      employeeName: "Emily Davis",
      payrollDate: "2024-10-01",
      amount: "3,750",
      status: "Paid",
    },
    {
      id: 5,
      employeeName: "Michael Brown",
      payrollDate: "2024-10-01",
      amount: "3,200",
      status: "Failed",
    },
  ];

  const columns = [
    { field: "employeeName", headerName: "Employee Name", width: 200 },
    { field: "payrollDate", headerName: "Payroll Date", width: 150 },
    { field: "amount", headerName: "Amount", width: 120 },
    { field: "status", headerName: "Status", width: 100 },
  ];

  return (
    <div className="w-full ml-[15%] bg-white flex flex-col px-[20px] py-[20px]">
      {settingson && (
        <Settings
          onClose={() => {
            setsetting(false);
          }}
        />
      )}
      <div className="w-full h-[50px]  rounded-md flex flex-row items-center justify-between px-4">
        <p className="text-[24px] text-gray-800 font-bold">Payroll Dashboard</p>
        <div className="flex flex-row ">
          <div className="w-[40px] h-[40px] mx-2  bg-white shadow-sm shadow-zinc-300 rounded-md flex items-center justify-center">
            <FaBell />
          </div>
          <div
            onClick={() => setsetting(true)}
            className="w-[40px] h-[40px] mx-2 bg-white shadow-sm shadow-zinc-300 rounded-md flex items-center justify-center"
          >
            <FaGear />
          </div>
          <Button variant="contained" color="primary">
            CREATE NEW ORGANIZATIONS
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-row  flex-wrap overflow-hidden  mt-4 rounded-md">
        <div className="w-full flex flex-row flex-wrap overflow-hidden mt-4 rounded-md">
          <div className="w-[650px] flex items-center justify-center flex-shrink-0 bg-white border-[1px] border-gray-200 h-[250px] mr-5 rounded-md">
            <AreaChart
              width={600}
              height={240}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4caf50" stopOpacity={0.6} />{" "}
                  {/* Green shade */}
                  <stop
                    offset="99%"
                    stopColor="#4caf50"
                    stopOpacity={0.2}
                  />{" "}
                  {/* Lighter green shade */}
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />{" "}
              {/* Smaller text size */}
              <Tooltip />
              <Area
                type="monotone"
                dataKey="EmployeeNo"
                stroke="#4caf50"
                fillOpacity={0.2}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </div>

          <div className="w-[382px] flex-shrink-0 bg-yellow-50 flex flex-row items-center justify-center rounded-md h-[250px] border-[1px] border-gray-200">
            <div className="w-[150px] rounded-md h-[200px] bg-zinc-900 flex flex-col items-center justify-center">
              <p className="text-[20px] text-white font-bold">April</p>
              <p className="text-[90px] text-white font-bold">23</p>
            </div>
            <div className="ml-5 flex flex-col justify-center items-center ">
              <p className="text-[17px] text-zinc-900 font-bold">
                Next Payment Date
              </p>
              <p className="text-[17px] text-zinc-400 font-bold">
                25th April 2024
              </p>
            </div>
          </div>
        </div>
        <div className="w-[650px] border-[1px] border-gray-200 flex-shrink-0  mr-5  mt-5 h-[400px] rounded-[10px]">
          <div className="w-full h-[50px] flex items-center mx-2 ">
            <p className="text-[18px] text-gray-800 font-bold">
              Transaction History
            </p>
          </div>
          <DataGrid rows={rows} columns={columns} pageSize={5}></DataGrid>
        </div>
        <div className="w-[35%] flex-shrink-0 bg-white border-[1px] border-gray-200   p-2  mt-5 h-[450px] rounded-md">
          <div className="w-full h-[50px] bg-white flex flex-row items-center justify-between ">
            <div>
              <p className="font-bold">Payroll Summary</p>
              <p className="text-gray-500">From 1-31 March,2022</p>
            </div>
            <p className=" font-bold text-[14px] text-blue-500">View Report</p>
          </div>
          <div className="h-[60px] flex flex-row mt-5">
            <div className="flex flex-row mx-3">
              <div className="w-[4px] bg-zinc-900"></div>
              <div className="flex flex-col items-center justify-between ">
                <p className="text-[17px]  text-gray-600 mx-3">Payment</p>
                <p className="text-[24px] font-bold">200Birr</p>
              </div>
            </div>
            <div className="flex flex-row mx-3">
              <div className="w-[4px] bg-blue-900"></div>
              <div className="flex flex-col mx-2 items-center justify-between ">
                <p className="text-[17px]  text-gray-600 mx-3">Paid</p>
                <p className="text-[24px] font-bold">200Birr</p>
              </div>
            </div>
            <div className="flex flex-row mx-3">
              <div className="w-[4px] bg-blue-100"></div>
              <div className="flex flex-col mx-2 items-center justify-between ">
                <p className="text-[17px]  text-gray-600 mx-3">Pending</p>
                <p className="text-[24px] font-bold">200Birr</p>
              </div>
            </div>
          </div>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 40, color: "black" },
                  { id: 1, value: 30, color: "blue" },
                  { id: 2, value: 20, color: "lightblue" },
                ],
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -45,
                endAngle: 225,

                cx: 150,
                cy: 150,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
