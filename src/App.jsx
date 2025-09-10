import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import StudyArea from "./components/StudyArea/StudyArea";
import Todolist from "./components/Todolist/Todolist";
import Library from "./components/Library/Library";
import Logout from "./components/Logout/Logout";
import Login from "./components/LoginForm/Login";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.css";
import "./global.css";

// ✅ Protected Route Component
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

 const App = () => {
   return (
     <Router>
       <Routes>
         <Route path="/login" element={<Login />} />

         <Route
           path="/dashboard"
           element={
             <ProtectedRoute>
               <Dashboard />
             </ProtectedRoute>
           }
         />

         <Route
           path="/study-area"
           element={
             <ProtectedRoute>
               <StudyArea />
             </ProtectedRoute>
           }
         />

         <Route
           path="/todo-list"
           element={
             <ProtectedRoute>
               <Todolist />
             </ProtectedRoute>
           }
         />

         <Route
           path="/library"
           element={
             <ProtectedRoute>
               <Library />
             </ProtectedRoute>
           }
         />

         <Route
           path="/logout"
           element={
             <ProtectedRoute>
               <Logout />
             </ProtectedRoute>
           }
         />
         <Route path="*" element={<Navigate to="/dashboard" replace />} />
       </Routes>
     </Router>
   );
 };

export default App;
