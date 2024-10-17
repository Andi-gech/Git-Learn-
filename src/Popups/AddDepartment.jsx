/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

export default function AddDepartment({ onClose }) {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentDescription, setDepartmentDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic (e.g., API call)
    console.log({
      departmentName,
      departmentDescription,
    });

    // Clear the form
    setDepartmentName("");
    setDepartmentDescription("");

    // Close the modal
    onClose();
  };

  return (
    <div className="absolute z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-md shadow-md shadow-zinc-600 p-4 w-96">
        <Typography variant="h6" className="mb-2">
          Add New Department
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Department Name"
            variant="outlined"
            margin="normal"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Department Description"
            variant="outlined"
            margin="normal"
            value={departmentDescription}
            onChange={(e) => setDepartmentDescription(e.target.value)}
          />
          <div className="flex justify-between mt-4">
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Add Department
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
