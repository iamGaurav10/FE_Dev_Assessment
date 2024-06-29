import React from "react";
import "./Subscribe.css";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <section className="S_container">
      <div className="S_left">
        <span>Subscribe</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          repellat soluta labore nostrum necessitatibus assumenda consequatur
          earumit, aliquid voluptates.
        </span>
        <span>
          <input type="text" placeholder="Enter Your Email Address" />
          <button className="button_2">Subcribe Now</button>
        </span>
      </div>
      <motion.div className="S_right">
        <img src="/img2.png" alt="" />
      </motion.div>
    </section>
  );
};

export default Subscribe;
