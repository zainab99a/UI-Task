// App.jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./sections/AboutPage";
import ContactPage from "./sections/ContactPage";
import HeroPage from "./sections/HeroPage";
import ProjectsPage from "./sections/ProjectsPage";
import ServicesPage from "./sections/ServicesPage";
import ProjectsDetails from "./sections/ProjectsDetails";
import CardDetails from "./sections/CardDetails";
import Dashboard from "./sections/Dashboard";

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />

       
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <HeroPage />
                </section>
                <section id="about">
                  <AboutPage />
                </section>
                <section id="projects">
                  <ProjectsPage />
                </section>
                <section id="services">
                  <ServicesPage />
                </section>
                <section id="contact">
                  <ContactPage />
                </section>
              </>
            }
          />
          <Route path="/details" element={<ProjectsDetails />} />
          <Route path="/card/:id" element={<CardDetails />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
