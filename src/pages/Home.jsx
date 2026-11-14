import { body, div } from "framer-motion/client";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Battlefield from "../components/Battlefield";
import "./Home.css"
import Arsenal from "../components/Arsenal";
import Deploy from "../components/Deploy";

const Home = () => {
  return (
    <div className="body">
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="divider"></div>
      <Battlefield></Battlefield>
      <div className="divider"></div>
      <Arsenal></Arsenal>
      <div className="divider"></div>
      <Deploy></Deploy>
    </div>
  );
};

export default Home;