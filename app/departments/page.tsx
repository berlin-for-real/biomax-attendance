'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState<string[]>([]);
  const [newDepartment, setNewDepartment] = useState('');

  const handleAddDepartment = () => {
    if (newDepartment) {
      setDepartments([...departments, newDepartment]);
      setNewDepartment('');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Departments</h1>
      <div className="flex gap-2">
        <Input
          value={newDepartment}
          onChange={(e) => setNewDepartment(e.target.value)}
          placeholder="New Department Name"
        />
        <Button onClick={handleAddDepartment}>Add</Button>
      </div>
      <ul className="mt-4 space-y-2">
        {departments.map((dep, index) => (
          <li key={index} className="p-2 border rounded">
            {dep}
          </li>
        ))}
      </ul>
    </div>
  );
}
