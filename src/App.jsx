import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import HomePage from './components/HomePage';
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import Projects from "./components/Projects";
import projects from './data/projectsData.json';

function DefaultLayout({ children }) {
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
            <ProjectsPage>
              <Projects
                title={projects[0].title}
                screenshot={projects[0].screenshot}
                deployLink={projects[0].deployLink}
                githubLink={projects[0].githubLink}
              />
              <Projects
                title={projects[1].title}
                screenshot={projects[1].screenshot}
                deployLink={projects[1].deployLink}
                githubLink={projects[1].githubLink}
              />
              <Projects
                title={projects[2].title}
                screenshot={projects[2].screenshot}
                deployLink={projects[2].deployLink}
                githubLink={projects[2].githubLink}
              />
              <Projects
                title={projects[3].title}
                screenshot={projects[3].screenshot}
                deployLink={projects[3].deployLink}
                githubLink={projects[3].githubLink}
              />
              <Projects
                title={projects[4].title}
                screenshot={projects[4].screenshot}
                deployLink={projects[4].deployLink}
                githubLink={projects[4].githubLink}
              />
              <Projects
                title={projects[5].title}
                screenshot={projects[5].screenshot}
                deployLink={projects[5].deployLink}
                githubLink={projects[5].githubLink}
              />
            </ProjectsPage>
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