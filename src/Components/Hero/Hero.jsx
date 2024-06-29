import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero_container">
      <div className="hero_body">
        {/* left Section */}
        <div className="hero_left">
          <div>Lorem Ipsum</div>
          <summary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem rerum ratione suscipit inventore, neque enim
            temporibus. Nobis eum voluptas, libero dicta illum nulla! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quod
            aperiam cum alsectetur adipisicing elit. Eum ?
          </summary>
          <div>
            <button className="button_2">Know More</button>
          </div>
        </div>
        {/* right Section */}
        <motion.div
          className="hero_right"
          initial={{ x: "3rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, type: "spring" }}
        >
          <img src="./img3.png" alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
