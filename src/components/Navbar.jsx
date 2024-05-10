import { Button } from "@mui/material";
import React from "react";
import { FileUpload, Dehaze } from "@mui/icons-material";
const Navbar = () => {
  return (
    <header className="w-full h-[45px] mt-2 bg-white flex  relative">
      <nav className="pl-[15%] flex">
        <div className="pt-1">
          <img alt="logo" src="/tenor-logo.svg" width={80} height={17} />
        </div>
      </nav>
      <div className="pl-[48%] flex">
        <Button
          variant="contained"
          sx={{
            height: "70%",
            paddingTop: "7px",
            paddingBottom: "7px",
            paddingLeft: "18px",
            paddingRight: "18px",
            fontSize: "13px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          <FileUpload sx={{ paddingRight: "3px" }} /> CREATE
        </Button>
        <div className="px-4">
          <Button
            variant="outlined"
            sx={{
              height: "70%",
              paddingTop: "7px",
              paddingBottom: "7px",
              paddingLeft: "18px",
              paddingRight: "18px",
              fontSize: "13px",
              fontWeight: "bold",
              border: "1.5px solid",
            }}
          >
            SIGN IN
          </Button>
        </div>
        <div>
          <Dehaze fontSize="large" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
