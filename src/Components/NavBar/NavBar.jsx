import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link, NavLink } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";
import "./NavBar.css";
import { cartContext } from "../../Context/CartContextProvider";
import { useLocation } from "react-router";
import LiveSearch from "../LiveSearch/LiveSearch";
import { authContext } from "../../Context/AuthContextProvider";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { cartCount } = React.useContext(cartContext);
  const { user, logOut } = React.useContext(authContext);
  const location = useLocation();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <Link
        to="/home"
        style={{ color: " black", paddingLeft: "10px", paddingRight: "10px" }}>
        {user.email ? (
          user.email
        ) : (
          <Link to="/auth" style={{ color: "black" }}>
            <MenuItem onClick={handleMenuClose}>Зарегистрироваться</MenuItem>
          </Link>
        )}
      </Link>
      <MenuItem onClick={logOut}>Выйти </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <Link to="/home" sx={{ color: "black" }}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit">
            <Badge color="error">
              <HomeIcon />
            </Badge>
          </IconButton>
          <p style={{ color: "black" }}>Главная</p>
        </MenuItem>
      </Link>
      <Link to="/list" sx={{ color: "black" }}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit">
            <Badge color="error">
              <AddIcon />
            </Badge>
          </IconButton>
          <p style={{ color: "black" }}>Добавить продукт</p>
        </MenuItem>
      </Link>
      <Link to="/list" sx={{ color: "black" }}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit">
            <Badge color="error">
              <ProductionQuantityLimitsIcon />
            </Badge>
          </IconButton>
          <p style={{ color: "black" }}>Продукты</p>
        </MenuItem>
      </Link>
      <Link to="/partners" sx={{ color: "black" }}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit">
            <Badge color="error">
              <HandshakeIcon />
            </Badge>
          </IconButton>
          <p style={{ color: "black" }}>Наши партнеры</p>
        </MenuItem>
      </Link>
      <Link to="/cart" sx={{ color: "black" }}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit">
            <Badge badgeContent={cartCount} color="error">
              <AddShoppingCart />
            </Badge>
          </IconButton>
          <p style={{ color: "black" }}>Корзина</p>
        </MenuItem>
      </Link>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}>
            VKUS KG
          </Typography>
          <Box
            sx={{
              width: "60%",
              display: "flex",
              justifyContent: "space-around",
            }}
            className="menu-item">
            <NavLink to="/home">Главная</NavLink>
            {user.email === "admin@gmail.com" ? (
              <NavLink to="/add">Добавить продукт</NavLink>
            ) : null}
            {location.pathname === "./list" ? (
              <span>Продукты</span>
            ) : (
              <NavLink to="/list">Продукты</NavLink>
            )}
            <NavLink to="/partners">Наши партнеры</NavLink>
          </Box>
          {location.pathname === "/list" ? <LiveSearch /> : null}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit">
              <Link to="/cart">
                <Badge badgeContent={cartCount} color="error">
                  <AddShoppingCart />
                </Badge>
              </Link>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
export default NavBar;
