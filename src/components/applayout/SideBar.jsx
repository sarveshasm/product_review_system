import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';

function SideBar(props) {
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/dashboard") {
      setActiveItem("Dashboard");
    } else if (pathname === "/student") {
      setActiveItem("Product");
    }
  }, [location]);

  return (
    <div
      className={props.open ? "app-sidebar sidebar-open" : "app-sidebar"}
      style={{
        backgroundColor: "#233045",
      }}
    >
      <ul className="list-div">
        <li
          className={`list-items ${activeItem === "Dashboard" ? "active" : ""}`}
          onClick={() => setActiveItem("Dashboard")}
        >
          <Link className="link" to="/dashboard">
            <AssignmentTwoToneIcon sx={{ marginRight: "10px", color: "#1c0c6a" }} />
            Dashboard
          </Link>
        </li>
        <li
          className={`list-items ${activeItem === "Product" ? "active" : ""}`}
          onClick={() => setActiveItem("Product")}
        >
          <Link className="link" to="/student">
            <LibraryBooksTwoToneIcon sx={{ marginRight: "10px", color: "#1c0c6a" }} />
            Product
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
