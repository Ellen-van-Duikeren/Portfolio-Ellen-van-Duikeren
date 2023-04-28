import './App.css';
import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import AboutMe from "./pages/aboutMe/AboutMe";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import OnePagePortfolio from "./pages/onePagePortfolio/OnePagePortfolio";
import Rain from "./animations/rain/Rain";
import NavAnimation from "./components/nav/NavAnimation";
import Music from "./pages/music/Music";
import React, {useContext} from "react";
import {AnimationContext} from "./context/AnimationContext";
import Birds from "./animations/birds/Birds";
import Heartbeat from "./animations/heartbeat/Heartbeat";

function App() {
    const {flying, raining, heartBeating, animationMenu} = useContext(AnimationContext);


    return (
        <div>

            {/*animations*/}
            {flying && <Birds/>}
            {raining && <Rain/>}
            {heartBeating && <Heartbeat/>}

            <Nav/>
            {animationMenu && <NavAnimation/>}

            <Routes>
                <Route
                    path="/"
                    element={<Homepage/>}
                />

                <Route
                    path="/aboutMe"
                    element={<AboutMe/>}
                />

                {/*<Route*/}
                {/*    path="/cv"*/}
                {/*    element={<CV/>}*/}
                {/*/>*/}

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
                    path="/onePagePortfolio"
                    element={<OnePagePortfolio/>}
                />

                <Route
                    path="/rain"
                    element={<Rain/>}
                />

                <Route
                    path="/music"
                    element={<Music/>}
                />

            </Routes>

            <Footer/>
        </div>
    );
}

export default App;
