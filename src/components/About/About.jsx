import React from "react"
import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt'
import profileImage from '../../assets/Profile_image.png'

const About = () => {
    return (
        <section
            id="about"
            className="py-20 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-12"
        >
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Hari Sehgal
                    </h2>
                    <h3 className="text-xl font-semibold text-[#8245ec] mb-4 leading-tight">
                        <span className="text-white">I am a </span>
                        <span className="text-[#8245ec]">
                            <Typewriter
                                words={['Fullstack Developer', 'Web Developer', 'Coder', 'Software Engineer', 'Tech Explorer']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h3>
                    <p className="text-base sm:text-lg md: text-lg text-gray-400 mb-10 mt-8 leading relaxed">
                        I'm a full-stack developer skilled in the MERN stack, with a passion for building responsive web apps and solving real-world problems. I love exploring new technologies and contributing to tech communities.
                    </p>

                    <a
                        href="https://drive.google.com/file/d/1c-qUZ3QdqirjPCDqDrzVRP4T0Du9LEuz/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                    >Download Reume</a>
                </div>

                <div className="md: w-1/2 flex justify-center md: justify-end lg:ml-5">
                    <Tilt
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-2 border-purple-700 rounded-full"
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    perspective={1000}
                    scale={1.05}
                    transitionSpeed={1000}
                    gyroscope={false}
                    >
                        <img
                            src={profileImage || "/placeholder.svg"}
                            alt="Hari Sehgal"
                            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                        />
                    </Tilt>
                </div>

            </div>

        </section>
    )
}

export default About