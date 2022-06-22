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
                        <p className="headline gray">Life is Yours.</p>
                        </Parallax>
                    </div>
                </ParallaxProvider>
            </div>
        )
    };
    
    export default Home;