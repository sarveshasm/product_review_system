import React from "react";
import AppLayout from "../../components/applayout/AppLayout";
import "../../components/applayout/styles.css";
import "./faculty.css";

const data = {
  fields: [
    {
      label: "Department",
      type: "dropdown",
      options: ["Computer Science", "Mathematics", "Physics", "Chemistry"],
    },
    {
      label: "Course",
      type: "text",
      placeholder: "Enter course name",
    },
    {
      label: "Instructor",
      type: "text",
      placeholder: "Enter instructor name",
    },
    {
      label: "Semester",
      type: "dropdown",
      options: ["Fall", "Spring", "Summer"],
    },
    {
      label: "Year",
      type: "text",
      placeholder: "Enter year",
    },
  ],
  dropdowns: [
    {
      label: "Country",
      options: ["USA", "Canada", "UK", "Australia"],
    },
    {
      label: "State",
      options: ["California", "Texas", "New York", "Florida"],
    },
    {
      label: "City",
      options: ["Los Angeles", "Houston", "New York City", "Miami"],
    },
    {
      label: "Campus",
      options: ["North", "South", "East", "West"],
    },
    {
      label: "Building",
      options: ["A", "B", "C", "D"],
    },
  ],
};

function Faculty() {
  return <AppLayout body={<Body />} />;
}

function Body() {
    return (
        <div className="app-container">
            <h1>Product</h1>
            <div className="search-container">
                <input type="text" className="search-box" placeholder="Search" />
                <button className="create-button">Create Product</button>
            </div>
            
            <div className="form-container">
                <div className="form-group">
                    <label className="form-label">Category</label>
                    <select className="dropdown">
                        <option value="">Click to choose</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Problem Statement</label>
                    <input type="text" className="text-field" placeholder="Type the Problem Statement" />
                </div>
                <div className="form-group">
                    <label className="form-label">Description</label>
                    <input type="text" className="text-field" placeholder="Enter the Description of Problem Statement" />
                </div>
                <div className="form-group">
                    <label className="form-label">Product Type</label>
                    <select className="dropdown">
                        <option value="">Click to choose</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Duration</label>
                    <input type="text" className="text-field" placeholder="Enter the Duration" />
                </div>

                <div className="dark-container">
                    <h3>Select the No of Students from Each Domain</h3>
                    <div className="section">
                        {["Computer Science", "Mechanical"].map((label, index) => (
                            <div className="form-group" key={index}>
                                <label className="form-label">{label}</label>
                                <select className="dropdown">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        ))}
                    </div>
                    <div className="section">
                        {["ECE", "Civil", "Textile"].map((label, index) => (
                            <div className="form-group" key={index}>
                                <label className="form-label">{label}</label>
                                <select className="dropdown">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="dark-container">
                    <h3>Enter the RP for Each Domain</h3>
                    <div className="section">
                        {["Computer Science", "Mechanical"].map((label, index) => (
                            <div className="form-group" key={index}>
                                <label className="form-label">{label}</label>
                                <select className="dropdown">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        ))}
                    </div>
                    <div className="section">
                        {["ECE", "Civil", "Textile"].map((label, index) => (
                            <div className="form-group" key={index}>
                                <label className="form-label">{label}</label>
                                <select className="dropdown">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Faculty;
