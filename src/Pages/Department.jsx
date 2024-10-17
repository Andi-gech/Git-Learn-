import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import AddDepartment from "../Popups/AddDepartment";
export default function Department() {
  const [AddDepartments, setAddDepartment] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "departmentName", headerName: "Department Name", width: 200 },
    { field: "departmentHead", headerName: "Department Head", width: 200 },
    {
      field: "numberOfEmployees",
      headerName: "Number of Employees",
      width: 180,
    },

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
      departmentName: "Sales",
      departmentHead: "John Doe",
      numberOfEmployees: 15,
      budgetAllocation: "$150,000",
    },
    {
      id: 2,
      departmentName: "Human Resources",
      departmentHead: "Jane Smith",
      numberOfEmployees: 10,
      budgetAllocation: "$100,000",
    },
    {
      id: 3,
      departmentName: "Marketing",
      departmentHead: "Alice Johnson",
      numberOfEmployees: 8,
      budgetAllocation: "$80,000",
    },
    {
      id: 4,
      departmentName: "Finance",
      departmentHead: "Bob Williams",
      numberOfEmployees: 12,
      budgetAllocation: "$120,000",
    },
    {
      id: 5,
      departmentName: "IT Support",
      departmentHead: "Emily Davis",
      numberOfEmployees: 20,
      budgetAllocation: "$200,000",
    },
    {
      id: 6,
      departmentName: "Research and Development",
      departmentHead: "Michael Brown",
      numberOfEmployees: 25,
      budgetAllocation: "$300,000",
    },
    {
      id: 7,
      departmentName: "Customer Service",
      departmentHead: "Sarah Wilson",
      numberOfEmployees: 18,
      budgetAllocation: "$160,000",
    },
  ];

  const handleEdit = (id) => {
    console.log("Edit department with ID:", id);
    // Implement edit functionality
  };

  const handleDelete = (id) => {
    console.log("Delete department with ID:", id);
    // Implement delete functionality
  };
  return (
    <div className="w-full ml-[15%] bg-white flex flex-row px-[20px] py-[20px] min-h-screen justify-between">
      {AddDepartments && (
        <AddDepartment onClose={() => setAddDepartment(false)} />
      )}
      <div className="flex flex-col w-[80%] h-full bg-white  rounded-md justify-between ">
        <div className="w-full  h-[50px]">
          <p className="text-[24px] text-gray-800 font-bold">
            Manage Departments
          </p>
        </div>
        <div>
          <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
      </div>
      <div className="w-[19%]  ">
        <div className="w-full border-[1px] border-gray-200 bg-white h-[200px] rounded-md p-2 flex flex-col">
          <div className="w-full h-[40px] border-b-[1px] border-gray-700 flex bg-blue-600 items-center justify-center">
            <p className="text-[14px]  text-white px-4 py-2">View Department</p>
          </div>
          <div
            onClick={() => setAddDepartment(true)}
            className="w-full h-[40px] border-b-[1px] border-gray-200 flex items-center justify-center"
          >
            <p className="text-[14px]  text-black px-4 py-2">
              Add New Department
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
