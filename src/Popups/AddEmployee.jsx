/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";

const departments = [
  { id: 1, name: "Sales" },
  { id: 2, name: "Human Resources" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Finance" },
  { id: 5, name: "IT Support" },
  { id: 6, name: "Research and Development" },
  { id: 7, name: "Customer Service" },
];

export default function AddEmployee({ onClose }) {
  const [employeeName, setEmployeeName] = useState("");
  const [department, setDepartment] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      employeeName,
      department,
      jobTitle,
      salary,
    });

    setEmployeeName("");
    setDepartment("");
    setJobTitle("");
    setSalary("");

    onClose();
  };

  return (
    <div className="absolute z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-md shadow-md shadow-zinc-600 p-4 w-96">
        <Typography variant="h6" className="mb-2">
          Add New Employee
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Employee Name"
            variant="outlined"
            margin="normal"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Department</InputLabel>
            <Select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              label="Department"
            >
              {departments.map((dept) => (
                <MenuItem key={dept.id} value={dept.name}>
                  {dept.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Job Title"
            variant="outlined"
            margin="normal"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <TextField
            fullWidth
            label="Salary"
            variant="outlined"
            margin="normal"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <div className="flex justify-between mt-4">
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Add Employee
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
