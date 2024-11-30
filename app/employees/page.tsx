'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function EmployeesPage() {
  const [departments] = useState(['HR', 'IT', 'Finance']); // Fetch this dynamically in the future
  const [employees, setEmployees] = useState<{ name: string; fatherName: string; department: string }[]>([]);
  const [newEmployee, setNewEmployee] = useState({ name: '', fatherName: '', department: '' });

  const handleAddEmployee = () => {
    if (newEmployee.name && newEmployee.fatherName && newEmployee.department) {
      setEmployees([...employees, newEmployee]);
      setNewEmployee({ name: '', fatherName: '', department: '' });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employees</h1>
      <div className="space-y-2">
        <Input
          value={newEmployee.name}
          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
          placeholder="Employee Name"
        />
        <Input
          value={newEmployee.fatherName}
          onChange={(e) => setNewEmployee({ ...newEmployee, fatherName: e.target.value })}
          placeholder="Father Name"
        />
        <Select
          value={newEmployee.department}
          onValueChange={(value) => setNewEmployee({ ...newEmployee, department: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Department" />
          </SelectTrigger>
          <SelectContent>
            {departments.map((dep, index) => (
              <SelectItem key={index} value={dep}>
                {dep}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleAddEmployee}>Add Employee</Button>
      </div>
      <ul className="mt-4 space-y-2">
        {employees.map((emp, index) => (
          <li key={index} className="p-2 border rounded">
            <strong>{emp.name}</strong> (Father: {emp.fatherName}, Department: {emp.department})
          </li>
        ))}
      </ul>
    </div>
  );
}
