import './App.css';
import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import AboutMe from "./pages/aboutMe/AboutMe";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import CV from "./pages/cv/CV";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Klooien from "./pages/klooien/Klooien";
import OnePagePortfolio from "./pages/onePagePortfolio/OnePagePortfolio";
import Rain from "./pages/rain/Rain";
import NavAnimation from "./components/nav/NavAnimation";
import Spotify from "./pages/spotify/Spotify";

function App({animation}) {
    return (
        <div>
            <Nav/>

            {animation && <NavAnimation/>}


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

                <Route
                    path="/klooien"
                    element={<Klooien/>}
                />

                <Route
                    path="/onePagePortfolio"
                    element={<OnePagePortfolio/>}
                />

                <Route
                    path="/rain"
                    element={<Rain/>}
                />

                <Route
                    path="/spotify"
                    element={<Spotify/>}
                />

            </Routes>

            <Footer/>
        </div>
    );
}

export default App;
