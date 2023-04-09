import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import AboutMe from "./pages/aboutMe/AboutMe";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import CV from "./pages/cv/CV";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import NavAnimation from "./components/nav-animation/Nav-animation";

function App() {
    return (
        <div>
            <Nav/>
            {/*<NavAnimation/>*/}
            <Routes>
                <Route
                    path="/"
                    element={<Homepage/>}
                />

                <Route
                    path="/about-me"
                    element={<AboutMe/>}
                />

                <Route
                    path="/cv"
                    element={<CV/>}
                />

                <Route
                    path="/projects"
                    element={<Projects/>}
                />

                <Route
                    path="/blog"
                    element={<Blog/>}
                />

                <Route
                    path="/contact"
                    element={<Contact/>}/>
                />

            </Routes>

            <Footer/>
        </div>
    );
}

export default App;
