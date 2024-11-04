/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from "react";
import {
  Select,
  MenuItem,
  CircularProgress,
  Button,
  Modal,
  Typography,
  Box,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import UseFetchPayroll from "../hooks/UseFetchPayroll";

const deletePayrolls = async ({ year, month }) => {
  await axios.delete(
    `http://localhost:5252/api/v1/payroll/year/${year}/month/${month + 1}`
  );
};

const PayrollRecord = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const [open, setOpen] = useState(false);
  const [payrollStatus, setPayrollStatus] = useState("");
  const queryClient = useQueryClient();

  const {
    data: payrollData,
    error,
    isLoading,
  } = UseFetchPayroll(selectedYear, selectedMonth);

  const rows = useMemo(() => {
    if (!payrollData) return [];
    return payrollData?.data?.map((record) => ({
      id: record.id,
      employeeId: record.employeeId,
      name: record.employeeFirstName,
      salary: record.baseSalary,

      pensionDeduction: record.pensionDeduction,
      taxDeduction: record.taxDeduction,
      overtimeHours: record.overtimeHours,
      overtimePay: record.overtimePay,
      bonuses: record.bonuses,
      totalDeductions: record.totalDeductions,
      grossPay: record.grossPay,
      netPay: record.netPay,
      status: record.paymentStatus,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      absentDeduction: record.absentDeduction,
      deductionDetails: record.deductionDetails,
    }));
  }, [payrollData]);

  const mutation = useMutation(deletePayrolls, {
    onSuccess: () => {
      setPayrollStatus("Payroll deleted successfully.");

      queryClient.invalidateQueries(["payroll", selectedYear, selectedMonth]);
    },
    onError: () => {
      setPayrollStatus("Failed to delete payroll. Please try again.");
    },
  });

  const handleDeletePayroll = () => {
    mutation.mutate({ year: selectedYear, month: selectedMonth });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleYearChange = (event) => setSelectedYear(event.target.value);
  const handleMonthChange = (event) => setSelectedMonth(event.target.value);

  if (error) {
    return (
      <div className="h-[600px] w-full flex bg-white items-center justify-center">
        <div className="text-red-600 text-lg">
          Error fetching data. Please try again later.
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-[600px] w-full flex bg-white items-center justify-center">
        <CircularProgress />
        <span className="ml-2 text-lg">Loading data...</span>
      </div>
    );
  }

  return (
    <div className="h-screen w-full pl-[17%] bg-white overflow-x-auto overflow-hidden flex flex-col">
      <h1 className="text-2xl font-bold mb-4">
        Payroll Record For ({selectedMonth + 1} - {selectedYear}){" "}
      </h1>

      <div className="flex mb-4">
        <Select
          value={selectedYear}
          onChange={handleYearChange}
          className="mr-4"
        >
          {Array.from({ length: 5 }, (_, index) => (
            <MenuItem key={index} value={2023 + index}>
              {2023 + index}
            </MenuItem>
          ))}
        </Select>

        <Select value={selectedMonth} onChange={handleMonthChange}>
          {Array.from({ length: 12 }, (_, index) => (
            <MenuItem key={index} value={index}>
              {new Date(0, index).toLocaleString("default", { month: "long" })}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div style={{ flex: 1, height: "400px" }}>
        <DataGrid
          rows={rows}
          columns={[
            { field: "name", headerName: "name", width: 150 },
            { field: "salary", headerName: "salary", width: 150 },
            { field: "bonuses", headerName: "Bonuses", width: 150 },
            { field: "grossPay", headerName: "Gross Pay", width: 150 },
            {
              field: "pensionDeduction",
              headerName: "Pension Deduction",
              width: 150,
            },
            { field: "taxDeduction", headerName: "Tax Deduction", width: 150 },
            {
              field: "absentDeduction",
              headerName: "Absent Deduction",
              width: 150,
            },
            {
              field: "totalDeductions",
              headerName: "Total Deductions",
              width: 150,
            },

            { field: "netPay", headerName: "Net Pay", width: 150 },
            { field: "status", headerName: "status", width: 150 },
          ]}
          pageSize={5}
          rowsPerPageOptions={5}
          checkboxSelection
          className="data-grid"
        />
      </div>

      <div className="mb-[30px]">
        <Button
          variant="contained"
          onClick={handleDeletePayroll}
          color="secondary"
        >
          Delete Payroll
        </Button>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            border: "1px solid #ccc",
          }}
        >
          <Typography variant="h6" component="h2" align="center" gutterBottom>
            Payroll Status
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            {payrollStatus}
          </Typography>
          <Button variant="contained" onClick={handleClose} fullWidth>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default PayrollRecord;
