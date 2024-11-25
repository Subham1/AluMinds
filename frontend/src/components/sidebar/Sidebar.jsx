import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FaHome, FaBell, FaChartLine, FaDatabase, FaSignOutAlt } from "react-icons/fa";
export default function Sidebar()
{
    return(
        <>
          
          <div className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard" className="sidebar-link">
            <FaHome className="icon" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/realtime-dashboard" className="sidebar-link">
            <FaBell className="icon" /> Alerts
          </Link>
        </li>
        <li>
          <Link to="/analytics" className="sidebar-link">
            <FaChartLine className="icon" /> Analytics
          </Link>
        </li>
        <li>
          <Link to="/display-data" className="sidebar-link">
            <FaDatabase className="icon" /> Display Data
          </Link>
        </li>
        <li className="logout">
          <Link to="/logout" className="sidebar-link">
            <FaSignOutAlt className="icon" /> Logout
          </Link>
        </li>
      </ul>
    </div>
        </>
    )
}