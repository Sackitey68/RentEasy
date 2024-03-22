import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-lime-100 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* Clicking the RentRase logo brings you home */}
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-lime-600">Rent</span>
            <span className="text-lime-800">Easy</span>
          </h1>
        </Link>

        <form className="bg-lime-50 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />

          {/* Adding the search-icon */}
          <FaSearch className="text-lime-900" />
        </form>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline font-bold text-lime-900 hover:text-lime-600 transform transition-all duration-0.2s">
              Home
            </li>
          </Link>

          {/* link to about page when the user clicks about */}
          <Link to="/about">
            <li className="sm:inline font-bold text-lime-900 hover:text-lime-600 transform transition-all duration-0.2s">
              About
            </li>
          </Link>

          {/* link to sign-in page when the user clicks sign-in  */}
          <Link to="/sign-in">
            <li className="sm:inline font-bold text-lime-900 hover:text-lime-600 transform transition-all duration-0.2s">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
