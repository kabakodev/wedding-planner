"use client";

import { motion } from "framer-motion";
import TextType from "./TextType";
import Image from "next/image";
import Navbar from "../../navbar/navbar";

export default function Hero() {

 const getClassName = (i) => {
    
    switch (i) {
    case 0: 
    return "arch-left-img  h-[220px] overflow-hidden self-end";
    break;
     case 1: 
    return "arch-left-img  h-[260px] overflow-hidden self-end";
    break;
    case 2: 
    return "arch-img h-[300px] overflow-hidden";
      
      break;
   case 3: 
   return "arch-right-img  h-[260px] overflow-hidden self-end";
      
      break;
    default: 
    return "arch-right-img  h-[220px] overflow-hidden self-end";
      break;
  }
 }
  
  return (
    <section className="min-h-screen overflow-hidden">
      <div className="flex min-h-screen items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full bg-[#f5f1e8]"
        >
          <div className="line-art -left-10 top-10 h-40 w-40" />
           <Navbar />
          <div className="mt-10 text-center md:mt-14 px-1 md:px-6">
              <TextType
                text={["Rendez", "Votre mariage", "Inoubliable"]}
                typingSpeed={100}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={50}
                variableSpeedEnabled={false}
                variableSpeedMin={60}
                variableSpeedMax={120}
                cursorBlinkDuration={0.5}
              />
           

            <h2 className="mt-6 text-3xl font-semibold uppercase md:text-7xl">
              On Gère Tout
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-zinc-600">
              on se rencontre, on discute, on échange des idées et vous
              choisissez
            </p>

            <div className="mt-16 grid grid-cols-5 gap-2 md:gap-4 md:grid-cols-5">
              {["/images/hero-1.jpg", "/images/hero-2.jpg", "/images/hero-3.jpg", "/images/hero-4.jpg", "/images/hero-5.jpg"].map(
                (img, i) => (
                  <motion.div
                    whileHover={{ y: -10 }}
                    key={i}
                    className={getClassName(i)}
                  >
                    <Image
                    width={800}
                    height={1200}
                      src={img}
                      alt={img}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
