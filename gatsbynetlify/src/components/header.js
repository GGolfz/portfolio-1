import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AppBar } from "@material-ui/core"
import { Toolbar } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import "../styles/header.css"
import ContactMenu from "./contact_menu"
const Header = () => {
    return(
      <AppBar className="appbar" position="fixed">
        <Toolbar>
        <div style={{display:"flex", paddingLeft:"45px", paddingTop: "15px"}}>
          <p className="header_txt">
              Home
          </p>
          <div style={{display:"flex", paddingLeft:"700px"}}>
              <p className="header_txt">My works</p>
              <p className="header_txt">About me</p>
              <ContactMenu />
          </div>
        </div>
        </Toolbar>
      </AppBar>
    )
}
export default Header