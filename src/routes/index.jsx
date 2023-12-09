import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";
import NewArticle from "../pages/NewArticleScreen";
import EditArticle from "../pages/EditArticleScreen";
import AllPostScreen from "../pages/AllPostScreen";

export default function ArvanRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<AllPostScreen />} />
        <Route path="/articles/page/:page" element={<AllPostScreen />} />
        <Route path="/article/create" element={<NewArticle />} />
        <Route path="/article/edit/:slug" element={<EditArticle />} />
      </Route>
 
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
    
    </Routes>
  );
}
