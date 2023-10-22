"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiYoutube } from "react-icons/fi";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Home = () => {
  return (
    <main>
      <Navbar />

      <section className="max-w-screen-xl flex flex-col items-center justify-center h-[calc(100vh-4rem)] px-8 mx-auto">
        <motion.img
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ ease: "easeOut", duration: 0.15 }}
          src="https://avatars.githubusercontent.com/u/13500056?v=4"
          alt="Walisson Silva"
          className="rounded-full sm:w-96 w-full"
        />

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ ease: "easeOut", duration: 0.15 }}
          className="text-center mt-8"
        >
          <h1 className="text-5xl font-medium">Walisson Silva</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Senior Full Stack Engineer
          </p>
        </motion.div>

        <motion.ul
          className="flex gap-4 mt-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.li variants={item}>
            <Link
              href="https://www.linkedin.com/in/walissonsilva/"
              target="_blank"
            >
              <Button size="icon">
                <FiLinkedin />
              </Button>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href="https://github.com/walissonsilva" target="_blank">
              <Button size="icon">
                <FiGithub />
              </Button>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link
              href="https://www.youtube.com/c/walissonsilva"
              target="_blank"
            >
              <Button size="icon">
                <FiYoutube />
              </Button>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href="mailto:walissonsilva10@gmail.com" target="_blank">
              <Button size="icon">
                <FiMail />
              </Button>
            </Link>
          </motion.li>
        </motion.ul>
      </section>
    </main>
  );
};
