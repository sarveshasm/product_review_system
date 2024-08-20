import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LogoutIcon from '@mui/icons-material/Logout';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';
import { Button } from "@mui/material";


function TopBar(props) {
  const [modalOpen, setModalOpen] = useState(false);
 
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const logout = async () => {
    try {
    
    } catch (error) {
    }
  };
  

  return (
    <div
      className="app-topbar"
      style={{
        backgroundColor: "#233045",
        display: "flex",
        padding: "10px 10px",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div onClick={props.sidebar} className="sidebar-menu">
          <MenuRoundedIcon sx={{ color: "#fff", cursor: "pointer" }} />
        </div>
        <div className="app-name">PRODUCT DEVELOPEMENT PORTAL</div>
      </div>
      <div className="topbar-right-content">
        <div>
          <p className="user-name"></p>
        </div>
        <div onClick={handleOpenModal}>
          <LogoutIcon sx={{ color: "#1c0c6a", cursor: "pointer" }} />
        </div>
      </div>
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="model"
        sx={{border:"none"}}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "5px",
            width: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color:"#493d88",
            border:"none",
            minWidth:"350px"
          }}
        >
          <h3 id="modal-modal-description">
            Are you sure you want to logout?
          </h3>
          <div className="logout-buttons">
            <Button onClick={handleCloseModal} label="CANCEL" />
            <Button
              onClick={logout}
              label="LOGOUT"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default TopBar;
