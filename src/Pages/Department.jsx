import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import AddDepartment from "../Popups/AddDepartment";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import UseFetchDepartments from "../hooks/UseFetchDepartments";
export default function Department() {
  const queryClient = useQueryClient();
  const [AddDepartments, setAddDepartment] = useState(false);
  const { data } = UseFetchDepartments();
  const deleteDepartment = useMutation({
    mutationFn: async (id) => {
      return await axios.delete(`http://localhost:4040/api/departments/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("departments");
    },
  });

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Department Name", width: 200 },
    { field: "location", headerName: "Department Location", width: 200 },
    { field: "abbreviatedName", headerName: "Abbreviated Name", width: 100 },

    {
      field: "numberOfEmployees",
      headerName: "Number of Employees",
      width: 120,
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
  const rows = data?.data?.map((item) => ({
    id: item.department.id,
    name: item.department.name,
    location: item.department.location,
    abbreviatedName: item.department.abbreviatedName,
    numberOfEmployees: item.employeeCount,
  }));

  const handleEdit = (id) => {
    console.log("Edit department with ID:", id);
    // Implement edit functionality
  };

  const handleDelete = (id) => {
    console.log("Delete department with ID:", id);
    deleteDepartment.mutate(id);
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

        <DataGrid rows={rows} columns={columns} pageSize={5} />
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
