import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../../../hooks/useCart";
import { useAdmin } from "../../../../hooks/useAdmin";
import { SearchResults } from "../../../SearchResults/SearchResults";

export const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Adjust this value according to your breakpoint
    };
    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  // const handleSearchInputChange = (event) => {
  //   setSearchValue(event.target.value); 
  //   console.log(searchValue)
  //   // Update the searchValue state with the new input value
  // };

  // Function to handle search submission (e.g., when user presses Enter)
  // const handleSearchSubmit = (event) => {
  //   event.preventDefault(); // Prevent the default form submission behavior
  //   // Use the searchValue state to perform search operations
  //   console.log('Search value:', searchValue);
  //   navigate(`/search-results?item=${encodeURIComponent(searchValue)}`);
  //   // <Link to="/search"><SearchResults item={searchValue}> </SearchResults></Link>
  //   // 
  //   // Here you can perform any actions like fetching search results, navigating to a new page, etc.
  // };

  const navOptions = (
    <>
      <li><Link to="/menu">Our Menu</Link></li>
      <li><Link to="/order/salad">Order Food</Link></li>
      <li><Link to="/">Home</Link></li>
      <li>
        <Link to="/dashboard">
          <button className="btn btn-black">
            <FaShoppingCart className="mr-2 text-black text-xl" />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      <li>
        {/* <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search dish"
            value={searchValue}
            onChange={handleSearchInputChange}
            className="border border-gray-300 px-2 py-1 rounded-md w-36 bg-black"
          />
          <button onClick={handleSearchSubmit} className="btn btn-primary">
            Search
          </button>
        </div> */}
      </li>
      {user && isAdmin && (
        <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
      )}
      {user && !isAdmin && (
        <li><Link to="/dashboard/userHome">Dashboard</Link></li>
      )}
      {user ? (
        <>
          <li>
            <div className="flex items-center space-x-2">
              <span>{user?.displayName}</span>
              <img
                src={user.photoURL}
                alt="User profile"
                className="w-8 h-8 rounded-full border-2 border-gray-300"
              />
            </div>
          </li>
          <li>
            <button onClick={handleLogOut} className="btn btn-active btn-ghost">
              Logout
            </button>
          </li>
        </>
      ) : (
        <li><Link to="/login">Login</Link></li>
      )}
    </>
  );

  return (
    <div className={`navbar fixed z-30 max-w-screen-xl mx-auto text-white bg-black bg-opacity-30`}>
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow ${isSmallScreen ? 'bg-black bg-opacity-75' : 'bg-base-100'} rounded-box w-52`}>
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-l">Pakwaan Restaurant</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">
          {navOptions}
        </ul>
      </div>
    </div>
  );
};
