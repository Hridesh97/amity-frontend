import React from "react";
import { motion } from "framer-motion";

const About = () => {

  const teamMembers = [

    {
      name: "Hridesh",
      role: "Full Stack Developer",
      exp: "3+ Years Experience",
      image: new URL('../assets/images/Hridesh.jpg', import.meta.url).href
    },

    {
      name: "Amit",
      role: "Frontend Developer",
      exp: "2+ Years Experience",
      image: new URL('../assets/images/Amit.jpg', import.meta.url).href
    },

    {
      name: "Rahul",
      role: "Backend Developer",
      exp: "3+ Years Experience",
      image: new URL('../assets/images/Rahul.jpg', import.meta.url).href
    },

    {
      name: "Ravi",
      role: "UI Designer",
      exp: "2+ Years Experience",
      image: new URL('../assets/images/Ravi.jpg', import.meta.url).href
    },

    {
      name: "Developer",
      role: "SEO Expert",
      exp: "4+ Years Experience",
      image: new URL('../assets/images/dev.jpg', import.meta.url).href
    }

  ];


  return (

    <div className="bg-green-200 min-h-screen py-20">


      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">


        {/* Header */}

        <div className="bg-green-600 text-white text-center py-16 relative">


          <h1 className="text-4xl font-bold mb-4">
            Who we are ?
          </h1>


          <p className="max-w-2xl mx-auto text-sm">

            We are professional Website Developers and Digital
            Marketing Experts providing Website Development,
            SEO and Software Solutions.

          </p>


          {/* Wave */}

          <div className="absolute bottom-0 left-0 w-full">

            <svg
              viewBox="0 0 500 100"
              preserveAspectRatio="none"
              className="w-full h-20"
            >

              <path
                d="M0,50 C150,120 350,0 500,50 L500,100 L0,100 Z"
                className="fill-white"
              />

            </svg>

          </div>


        </div>


        {/* Experience Section */}

        <div className="py-12 px-10 text-center border-b">


          <h2 className="text-3xl font-bold text-green-700 mb-8">

            Our Experience

          </h2>


          <div className="grid md:grid-cols-4 gap-8">


            <div>

              <h3 className="text-3xl font-bold text-green-600">

                5+

              </h3>

              <p>Years Experience</p>

            </div>


            <div>

              <h3 className="text-3xl font-bold text-green-600">

                50+

              </h3>

              <p>Projects Completed</p>

            </div>


            <div>

              <h3 className="text-3xl font-bold text-green-600">

                30+

              </h3>

              <p>Happy Clients</p>

            </div>


            <div>

              <h3 className="text-3xl font-bold text-green-600">

                10+

              </h3>

              <p>Technologies</p>

            </div>


          </div>


        </div>



        {/* Team Section */}

        <div className="py-16 px-10 text-center">


          <h2 className="text-3xl font-bold text-green-700 mb-12">

            Meet our team

          </h2>



          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">


            {teamMembers.map((member, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >


                {/* Hexagon Shape Image */}

                <div className="w-36 h-36 mx-auto mb-4 overflow-hidden shadow-lg"
                
                style={{
                  clipPath:
                    "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)"
                }}

                >


                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />

                </div>



                <h3 className="text-lg font-semibold">

                  {member.name}

                </h3>



                <p className="text-green-600 text-sm">

                  {member.role}

                </p>



                <p className="text-gray-500 text-xs mt-1">

                  {member.exp}

                </p>


              </motion.div>

            ))}


          </div>


        </div>


      </div>


    </div>

  );

};

export default About;