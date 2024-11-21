import './Sidebar.css';
import { FaHome, FaBell, FaChartLine, FaDatabase, FaSignOutAlt } from "react-icons/fa";
export default function Sidebar()
{
    return(
        <>
            <div className="sidebar">
                <ul>
                    <li><FaHome /> Dashboard</li>
                    <li><FaBell /> Alerts</li>
                    <li><FaChartLine /> Analytics</li>
                    <li><FaDatabase /> Display Data</li>
                    <li className='logout'><FaSignOutAlt /> Logout</li>
                </ul>
            </div>
        </>
    )
}