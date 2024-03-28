import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

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

        <form
          onSubmit={handleSubmit}
          className="bg-lime-50 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Adding the search-icon */}
          <button>
            <FaSearch className="text-lime-900" />
          </button>
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

          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile picture"
              />
            ) : (
              <li className="sm:inline font-bold text-lime-900 hover:text-lime-600 transform transition-all duration-0.2s">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
