import { Link, useNavigate } from 'react-router-dom';
// import './Sidebar.css';

const Sidebar = () => {

  const navigate = useNavigate();

  const handleLogOut = ()=>{
    localStorage.removeItem('isAuthenticated')
    navigate('/srseating-signin')
  }
return (
  <div className="sidebar">
    {/* <h2>Dashboard</h2> */}
    <nav>
      {/* <Link to="/">Tables</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link> */}
      <Link to="/srseating-signup" onClick={handleLogOut}>Log Out</Link> 
    </nav>
  </div>
  )
}

export default Sidebar;
