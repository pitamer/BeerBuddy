import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import "./index.css";

import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Fastfood, LocalOffer } from "@material-ui/icons";

import BeersStoreContext from "../../../store";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: -1,
    boxShadow: "0px",
  },
  AppBar: {
    backgroundColor: "transparent",
    color: "#eee",
    boxShadow: "none",
    marginTop: "0.5em",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // Vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function SearchHeader() {
  const store = useContext(BeersStoreContext);

  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [searchEntry, setSearchEntry] = React.useState("");
  const [searchType, setSearchType] = React.useState("Food Pairing");

  // change beers on display according to search field and search type
  useEffect(() => {
    if (searchType === "Beer Name") {
      store.setBeersOnDisplay(
        store.beers.filter((b) =>
          b.name.toLowerCase().includes(searchEntry.toLowerCase())
        )
      );
    } else {
      store.setBeersOnDisplay(
        store.beers.filter((b) =>
          b.food_pairing.some((i) =>
            i.toLowerCase().includes(searchEntry.toLowerCase())
          )
        )
      );
    }
    // eslint-disable-next-line
  }, [searchEntry, searchType]);

  const handleSearchChange = (e) => {
    setSearchEntry(e.target.value);
  };

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
      <MenuItem
        onClick={() => {
          setSearchType("Beer Name");
          handleMobileMenuClose();
        }}
      >
        <IconButton aria-label="Search by food pairing" color="inherit">
          <LocalOffer />
        </IconButton>
        <p>Search by beer name</p>
      </MenuItem>
      <MenuItem
        onClick={() => {
          setSearchType("Food Pairing");
          handleMobileMenuClose();
        }}
      >
        <IconButton aria-label="Search by beer name" color="inherit">
          <Fastfood />
        </IconButton>
        <p>Search by food pairing</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="show search options"
            onClick={handleMobileMenuOpen}
          >
            <MoreIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {`Search`}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`By ${searchType}`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={searchEntry}
              onChange={handleSearchChange}
              // onInput={() => {

              // }}
            />
          </div>
          <div className={classes.root} />
          <div className={classes.sectionMobile}></div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

export default observer(SearchHeader);
