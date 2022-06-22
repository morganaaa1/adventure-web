import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Navbar from "../components/Navbar";
import {BannerTop} from '../components/ParallaxBanner';
import '../styles.css';

    const Home = () => {
        return(
            <div>
                <ParallaxProvider>
                    <Navbar/>
                    <BannerTop/>
                    <div className="center full">
                        <Parallax speed={10}>
                            <div className="flex">
                                <Parallax speed={7}>
                                    <img className="photo" src={`./assets/images/local (1).jpg`}/>
                                </Parallax>
                                <Parallax speed={-14}>
                                    <img className="photo" src={`./assets/images/local (2).jpg`}/>
                                </Parallax>
                                <Parallax speed={7}>
                                    <img className="photo" src={`./assets/images/local (3).jpg`}/>
                                </Parallax>
                                <Parallax speed={-14}>
                                    <img className="photo" src={`./assets/images/local (4).jpg`}/>
                                </Parallax>
                            </div>
                        </Parallax>
                    </div>
                </ParallaxProvider>
            </div>
        )
    };
    
    export default Home;