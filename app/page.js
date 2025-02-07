"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[100svh] flex-col">
      <div className="max-w-6xl w-full text-center px-10 py-8">
        {/* <h1 className="mb-4 text-4xl font-semibold">Hello there</h1> */}
        <motion.div
          className="mb-8 flex flex-col gap-2 md:gap-4 items-center justify-center"
          // style={{ x: 100 }}
        >
          <span className="text-2xl md:text-4xl">Hello, Welcome to</span>{" "}
          {/* <br /> */}
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="font-bold text-4xl md:text-6xl cursor-crosshair w-fit"
          >
            कृषिधन
          </motion.span>
        </motion.div>
        <p className="text-justify mb-8 md:mb-4 tracking-wide">
          A platform where Farmers can sell the wastes generated by their farm
          and get another option to earn money, instead of wasting the wastes.
        </p>
        <p className="text-justify hidden md:block mb-8 tracking-wide">
          For Example - The wastes can be used to make compost, which is very
          useful for the plants and trees to grow. The compost can be used by
          the farmers itself or can be sold to the people (as a by-product of
          the waste) who need it. This way, the farmers can earn money by
          selling the wastes and the compost.
        </p>
        <span className="flex justify-center items-center gap-3 bg-black/90 text-white px-2 py-3 rounded-full">
          <AlertTriangle className="text-yellow-500" />
          Work In Progress
        </span>
      </div>
    </div>
  );
}
