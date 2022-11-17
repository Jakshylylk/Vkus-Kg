import {
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useContext } from "react";
import { authContext } from "../../Context/AuthContextProvider";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Authorization = () => {
  const {
    user,
    email,
    password,
    emailError,
    passwordError,
    hasAccount,

    setEmail,
    setPassword,
    setHasAccount,

    signUp,
    logOut,
    logIn,
  } = useContext(authContext);

  const navigate = useNavigate();

  const handlelogIn = () => {
    logIn();
    navigate("/home");
  };

  return (
    <>
      <div className="auth-container">
        <Container component="main" maxWidth="xs" sx={{ mb: "100px" }}>
          <Box
            sx={{
              marginTop: 15,
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}>
            <Avatar sx={{ ml: "180px", bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            {hasAccount ? (
              <Typography variant="h5" component="h1">
                Войти
              </Typography>
            ) : (
              <Typography variant="h5" component="h1">
                Зарегистрироваться
              </Typography>
            )}
            <Box>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Адрес электронной почты"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль электронной почты"
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <span> {passwordError} </span>
              <span> {emailError} </span>
              {hasAccount ? (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handlelogIn}>
                  Войти
                </Button>
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={signUp}>
                  Зарегистрироваться
                </Button>
              )}
              <Grid container>
                <Grid item>
                  {hasAccount ? (
                    <Link
                      style={{ color: "black" }}
                      onClick={() => setHasAccount(!hasAccount)}
                      href="#"
                      variant="body2">
                      <Button fullWidth variant="contained">
                        {"У меня нет аккаунта, зарегистрироваться!"}
                      </Button>
                    </Link>
                  ) : (
                    <Link
                      style={{ color: "black" }}
                      onClick={() => setHasAccount(!hasAccount)}
                      href="#"
                      variant="body2">
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{ pl: 7, pr: 8 }}>
                        {"У меня уже есть аккаунт, войти!"}
                      </Button>
                    </Link>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Authorization;
