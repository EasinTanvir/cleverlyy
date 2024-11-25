"use client";

import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { MdArrowDropDown } from "react-icons/md";

const Sorting = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (option) => {
    handleClose();
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClick}
        endIcon={<MdArrowDropDown style={{ color: "black" }} />} // Set icon color to black
        style={{
          backgroundColor: "#F5F5F5",
          color: "black",
          borderColor: "black",
          borderRadius: "8px",
          padding: "8px 12px",
          textTransform: "none",
        }}
      >
        Sort By
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={() => handleSelect("Subject")}>Subject</MenuItem>
        <MenuItem onClick={() => handleSelect("Marks")}>Marks</MenuItem>
      </Menu>
    </div>
  );
};

export default Sorting;
