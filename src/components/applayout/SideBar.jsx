import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import Cookies from 'js-cookie';

function SideBar(props) {
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();
  const role = Cookies.get("userRole"); 

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
        {role === "student" && (
          <li
            className={`list-items ${activeItem === "Product" ? "active" : ""}`}
            onClick={() => setActiveItem("Product")}
          >
            <Link className="link" to="/student">
              <LibraryBooksTwoToneIcon sx={{ marginRight: "10px", color: "#ffff" }} />
              Product
            </Link>
          </li>
        )}

        {role === "faculty" && (
          <>
            <li
              className={`list-items ${activeItem === "Faculty" ? "active" : ""}`}
              onClick={() => setActiveItem("Faculty")}
            >
              <Link className="link" to="/faculty">
                <LibraryBooksTwoToneIcon sx={{ marginRight: "10px", color: "#fffff" }} />
                Faculty
              </Link>
            </li>
            <li
              className={`list-items ${activeItem === "Marks" ? "active" : ""}`}
              onClick={() => setActiveItem("Marks")}
            >
              <Link className="link" to="/marks">
                <LibraryBooksTwoToneIcon sx={{ marginRight: "10px", color: "#ffff" }} />
                Marks
              </Link>
            </li>
            <li
              className={`list-items ${activeItem === "Review" ? "active" : ""}`}
              onClick={() => setActiveItem("Review")}
            >
              <Link className="link" to="/review">
                <LibraryBooksTwoToneIcon sx={{ marginRight: "10px", color: "#ffff" }} />
                Review
              </Link>
            </li>
          </>
        )}

        {role === "admin" && (
          <li
            className={`list-items ${activeItem === "AdminReview" ? "active" : ""}`}
            onClick={() => setActiveItem("AdminReview")}
          >
            <Link className="link" to="/adminreview">
              <LibraryBooksTwoToneIcon sx={{ marginRight: "10px", color: "#ffff" }} />
              Admin Review
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default SideBar;
