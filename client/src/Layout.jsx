import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import WhatsAppButton from "./components/WhatsApp.jsx";

function Layout() {
  return (
    <>
      <ToastContainer position="top-center" />
      <WhatsAppButton />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
