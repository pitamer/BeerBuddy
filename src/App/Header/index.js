import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";

import LocalCafeSharpIcon from "@material-ui/icons/LocalCafeSharp";
import StarsSharpIcon from "@material-ui/icons/StarsSharp";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundImage: "var(--dark-background-image)",
    // width: "100%",
    // position: "fixed",
    // top: 0,
  },
  title: {
    fontFamily: "Pacifico",
    paddingBottom: "0.3em",
  },
  buttonSubtitle: {
    marginLeft: "0.5em",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  routerLink: { color: "inherit", textDecoration: "inherit" },
}));

function Header() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/" className={classes.routerLink}>
        <MenuItem onClick={() => handleMobileMenuClose()}>
          <IconButton aria-label="Browse beers" color="inherit">
            <LocalCafeSharpIcon />
          </IconButton>
          <p>Browse</p>
        </MenuItem>
      </Link>
      <Link to="/favorites" className={classes.routerLink}>
        <MenuItem onClick={() => handleMobileMenuClose()}>
          <IconButton aria-label="Favorite beers" color="inherit">
            <StarsSharpIcon />
          </IconButton>
          <p>Favorites</p>
        </MenuItem>
      </Link>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={handleMobileMenuOpen}
            color="inherit"
            aria-label="open menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            BeerBuddy
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/" className={classes.routerLink}>
              <IconButton aria-label="Browse beers" color="inherit">
                <LocalCafeSharpIcon />
                <Typography className={classes.buttonSubtitle} variant="body1">
                  Browse
                </Typography>
              </IconButton>
            </Link>
            <Link to="/favorites" className={classes.routerLink}>
              <IconButton aria-label="Favorite beers" color="inherit">
                <StarsSharpIcon />
                <Typography className={classes.buttonSubtitle} variant="body1">
                  Favorites
                </Typography>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

export default Header;
