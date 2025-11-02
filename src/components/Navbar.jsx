import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md rounded-b-2xl">
      <h1 className="text-2xl font-bold text-indigo-600">FocusFlow</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-indigo-500">Home</Link>
        <Link to="/focus" className="hover:text-indigo-500">Focus Mode</Link>
        <Link to="/stats" className="hover:text-indigo-500">Stats</Link>
      </div>
    </nav>
  );
}
