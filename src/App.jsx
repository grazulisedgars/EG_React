import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import HomePage from './components/HomePage';
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import Projects from "./components/Projects";
import projects from './data/projectsData.json';

function DefaultLayout ({children}) {
  return (
    <>
    <Header />
    {children}
    </>
  );
}


function App() {
    return (
      <Router>
      <Routes>
        <Route path="/EG_React" element={
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          }
        />
        <Route path="projectspage/" element={
          <DefaultLayout>
            <ProjectsPage />
          </DefaultLayout>} />
        <Route path="contact/" element={
        <DefaultLayout>
            <ContactPage />
          </DefaultLayout>} />
      </Routes>
    </Router>
    )
}

export default App;