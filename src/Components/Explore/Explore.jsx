import React from "react";
import img1 from "../../assets/1 (1).jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import { motion } from "framer-motion";
import { slideup } from "../../utility/animation";


const ExploreData = [
    {
      id: 1,
      title: "Nearoyfjordan",
      place: "Norway",
      url: "#",
      image: img1,
      delay: 0.2,
    },
    {
      id: 2,
      title: "Antelop Canyon",
      place: "United States",
      url: "#",
      image: img2,
      delay: 0.4,
    },
    {
      id: 3,
      title: "Lakes",
      place: "Austria",
      url: "#",
      image: img3,
      delay: 0.6,
    },
  ];
  
const Explore = () => {
  return (
    <>
      <section  className="container" id="explore">
        {/* header section */}
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 2, delay: 0.2}} className="text-center md:max-w-[650px] mx-auto space-y-4">
          <p className="text-4xl font-mono mt-2 ">Explore the world</p>
          <p className="font-bold font-serif">
            We look to provide the most authentic contentt from athletes,
            adventuren, explorers travellers autound the world. Our long them
            mission is to educate inspire and enuble all peoples to experience &
            protect wildeness.
          </p>
        </motion.div>
        {/* cards section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
            {ExploreData.map((item) => (
                <motion.div initial="hidden" whileInView="visible" variants={slideup(item.delay)}
                 key={item.id} className="relative">
              <img src={item.image} alt="" className="w-[380px] h-[550px] object-cover"/>
              <div className="absolute w-full bottom-0 inset-0 bg-brandDark/15">
              <div  className="h-full space-y-1  py-6 flex flex-col justify-end items-center">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <h3 className="uppercase">{item.place}</h3>
              </div>
              </div>
            </motion.div>
            ))}
        </div>
        {/* button section */}
        <button className="block mx-auto mt-6 text-brandBlue uppercase font-bold">See More</button>
      </section>
    </>
  );
};

export default Explore;
