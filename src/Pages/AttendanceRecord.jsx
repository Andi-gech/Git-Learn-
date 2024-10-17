import { useState } from "react";
import { Button, Select, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Sample attendance records
const initialRows = [
  { id: 1, name: "John Doe", date: "2024-10-01", status: "Present" },
  { id: 2, name: "Jane Smith", date: "2024-10-01", status: "Absent" },
  { id: 3, name: "Alice Johnson", date: "2024-10-01", status: "Present" },
];

export default function AttendanceRecord() {
  const [rows, setRows] = useState(initialRows);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRow = {
      id: rows.length + 1,
      name,
      date,
      status,
    };
    setRows([...rows, newRow]);
    setName("");
    setDate("");
    setStatus("Present");
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
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

  const handleEdit = (id) => {
    console.log("Edit attendance with ID:", id);
    // Implement edit functionality
  };

  const handleDelete = (id) => {
    console.log("Delete attendance with ID:", id);
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <div className="w-full ml-[15%] bg-white flex flex-col px-[20px] py-[20px]">
      <h1 style={{ marginBottom: "20px", paddingBottom: "10px" }}>
        Attendance Record
      </h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ flexGrow: 1 }} // Allow it to take available space
          />
          <TextField
            value={date}
            type="date"
            onChange={(e) => setDate(e.target.value)}
            required
            style={{ flexGrow: 1 }} // Allow it to take available space
          />
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{ flexGrow: 1 }} // Allow it to take available space
          >
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
            <option value="Late">Late</option>
          </Select>
        </div>
        <Button variant="contained" color="primary" type="submit">
          Add Attendance Record
        </Button>
      </form>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
