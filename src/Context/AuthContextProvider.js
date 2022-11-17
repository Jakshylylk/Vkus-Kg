import { Password } from "@mui/icons-material";
import React, { createContext, useEffect, useState } from "react";
import fire from "../Fire";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  // ! ================== ДЛЯ ОЧИЩЕНИЕ ОШИБОК START ===================
  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };
  // ? ================== ДЛЯ ОЧИЩЕНИЕ ОШИБОК END =====================

  // ! ================== ДЛЯ ОЧИЩЕНИЕ ИНПУТА START ===================
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  // ? ================== ДЛЯ ОЧИЩЕНИЕ ИНПУТА END =====================

  // ! ================== ФУНКЦИЯ ДЛЯ РЕГИСТРАЦИИ START ===================
  const signUp = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        switch (error.code) {
          case "электронная почта уже используется":
            setEmailError(error.message);
            break;
          case "неверный адрес электронной почты":
            setEmailError(error.message);
            break;
          case "неверный пароль":
            setPasswordError(error.message);
            break;
          default:
            setEmailError(error.message);
            setPasswordError(error.message);
        }
      });
  };
  // ? ================== ФУНКЦИЯ ДЛЯ РЕГИСТРАЦИИ END =====================

  // ! ================ ФУНКЦИЯ ДЛЯ ВЫХОДА В АККАУНТ START ================
  const logIn = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, Password)
      .catch(error => {
        switch (error.code) {
          case "Неверный адрес электронной почты":
          case "Пользователь не найден":
          case "Отключенный пользователем":
            setEmailError(error.message);
            break;
          default:
            setEmailError(error.message);
            setPasswordError(error.message);
        }
      });
  };
  // ? ================ ФУНКЦИЯ ДЛЯ ВЫХОДАВ АККАУНТ END ====================
  const logOut = () => {
    fire.auth().signOut();
  };
  // ? ================ ФУНКЦИЯ ДЛЯ ВЫХОДА ИЗ АККАУНТА END =================

  const authListener = () => {
    fire.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        clearInputs();
        setUser(currentUser);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const authCloud = {
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
  };

  return (
    <authContext.Provider value={authCloud}> {children} </authContext.Provider>
  );
};

export default AuthContextProvider;
