import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddEmployee from "../Popups/AddEmployee";
import { useState } from "react";

export default function Employee() {
  const [AddEmploye, setAddEmployee] = useState();
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "employeeName", headerName: "Employee Name", width: 200 },
    { field: "department", headerName: "Department", width: 200 },
    { field: "jobTitle", headerName: "Job Title", width: 180 },
    {
      field: "actions",
      headerName: "Actions",
      width: 230,
      renderCell: (params) => (
        <>
          <Button onClick={() => handleEdit(params.row.id)}>Edit</Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      employeeName: "John Doe",
      department: "Sales",
      jobTitle: "Sales Manager",
      salary: "$70,000",
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      department: "Human Resources",
      jobTitle: "HR Specialist",
      salary: "$60,000",
    },
    {
      id: 3,
      employeeName: "Alice Johnson",
      department: "Marketing",
      jobTitle: "Marketing Coordinator",
      salary: "$55,000",
    },
    {
      id: 4,
      employeeName: "Bob Williams",
      department: "Finance",
      jobTitle: "Financial Analyst",
      salary: "$75,000",
    },
    {
      id: 5,
      employeeName: "Emily Davis",
      department: "IT Support",
      jobTitle: "IT Support Specialist",
      salary: "$65,000",
    },
    {
      id: 6,
      employeeName: "Michael Brown",
      department: "Research and Development",
      jobTitle: "Research Scientist",
      salary: "$85,000",
    },
    {
      id: 7,
      employeeName: "Sarah Wilson",
      department: "Customer Service",
      jobTitle: "Customer Service Representative",
      salary: "$50,000",
    },
  ];

  const handleEdit = (id) => {
    console.log("Edit employee with ID:", id);
    // Implement edit functionality
  };

  const handleDelete = (id) => {
    console.log("Delete employee with ID:", id);
    // Implement delete functionality
  };

  return (
    <div className="w-full ml-[15%] bg-white flex flex-row px-[20px] py-[20px] min-h-screen justify-between">
      {AddEmploye && (
        <AddEmployee
          onClose={() => {
            setAddEmployee(false);
          }}
        />
      )}
      <div className="flex flex-col w-[80%]  h-full bg-white rounded-md justify-between ">
        <div className="w-full h-[50px]">
          <p className="text-[24px] text-gray-800 font-bold">
            Manage Employees
          </p>
        </div>
        <div>
          <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
      </div>
      <div className="w-[19%]">
        <div className="w-full border-[1px] border-gray-200 bg-zinc-900 h-[200px] rounded-md p-2 flex flex-col">
          <div className="w-full h-[40px] border-b-[1px] border-gray-700 flex bg-blue-600 items-center justify-center">
            <p className="text-[14px] text-white px-4 py-2">View Employee</p>
          </div>
          <div
            onClick={() => setAddEmployee(true)}
            className="w-full h-[40px] border-b-[1px] border-gray-700 flex items-center justify-center"
          >
            <p className="text-[14px] text-white px-4 py-2">Add New Employee</p>
          </div>
        </div>
      </div>
    </div>
  );
}
