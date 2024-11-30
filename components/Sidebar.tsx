'use client';

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-200 shadow-lg transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button onClick={onClose} className="p-4">Close</button>
      <ul>
        <li>Departments</li>
        <li>Employees</li>
      </ul>
    </div>
  );
}
