import './App.css';
import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import AboutMe from "./pages/aboutMe/AboutMe";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Klooien from "./pages/klooien/Klooien";
import OnePagePortfolio from "./pages/onePagePortfolio/OnePagePortfolio";
import Rain from "./pages/rain/Rain";
import NavAnimation from "./components/nav/NavAnimation";
import Music from "./pages/music/Music";
import React, {useContext} from "react";
import {Context} from "./context/Context";

function App({animationMenu, letItRain, flying}) {
    const {constants} = useContext(Context);


    return (
        <div>

            <div className="container">

                {/*animation birds flying*/}
                {flying &&
                    <>
                        <div className="bird-container bird-container--one">
                            <div className="bird bird--one"></div>
                        </div>

                        <div className="bird-container bird-container--two">
                            <div className="bird bird--two"></div>
                        </div>

                        <div className="bird-container bird-container--three">
                            <div className="bird bird--three"></div>
                        </div>

                        <div className="bird-container bird-container--four">
                            <div className="bird bird--four"></div>
                        </div>
                    </>
                }
            </div>

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
                    path="/music"
                    element={<Music/>}
                />

            </Routes>

            <Footer/>
        </div>
    );
}

export default App;
