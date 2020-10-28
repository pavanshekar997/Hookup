import React from "react";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>

      <img
        className="header_logo"
        src="https://image.winudf.com/v2/image1/Y29tLnN1cmVob29rdXAub25saW5lX3NjcmVlbl8xXzE1NTU5MTUxNThfMDc0/screen-1.jpg?fakeurl=1&type=.jpg"
        alt=""
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
}

export default Header;
