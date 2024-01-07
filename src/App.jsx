import React from 'react';
import Header from "./components/Header";
import HomePage from './components/HomePage';
import ProjectPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";

function App() {
    return (<div>
        <Header />
        <HomePage />
        <ProjectPage />
        <ContactPage />
    </div>
    )
}

export default App;