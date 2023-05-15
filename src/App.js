import logo from "./logo.svg";
import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram, AiFillPin } from "react-icons/ai";
import { FaPinterestSquare, FaTiktok } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import { useState } from "react";
import Typed from "react-typed";

import { PlayCircleIcon } from '@heroicons/react/24/solid'



function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [video, setVideo] = useState("");
  const [bigPhoto, setBigPhoto] = useState("");


  const openVideo=(videoUrl)=>{
    setVideo(videoUrl)
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <section id="home" className=" min-h-screen  ">
        <div className="bg-gradient-to-b md:bg-gradient-to-r from-white to-[#ECDECF] h-[10vh]  justify-center ">
          <nav className=" h-[10vh] items-center align-middle   mb-12   text-center flex justify-between">
            <h1 className="  text-xl font-light text-black dark:text-black md:ml-24 ml-5 font-caveat text-[24px] md:text-[32px]">
              Aizada Zhexengaliyeva
            </h1>
            <ul className="flex items-center  justify-between md:px-32">
              <li>
                <BsFillMoonStarsFill
                  color={darkMode ? "white" : "pink"}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1QRt_4dQq334IYEPQAsZiPP8ATzK-TgtE/view?usp=share_link"
                  className="  bg-[white] text-[#D9BFA2] p-2 rounded-md ml-8 md:mr-0 mr-5 "
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="   md:grid grid-cols-2 md:h-[90vh] md:pb-0 pb-10 ">
          <div className=" flex flex-col items-center justify-center bg-[#ECDECF] py-12 md:py-0  ">
            <div className=" relative mb-5 ">
              <img
                src={require("./assets/portrait.jpg")}
                className=" rounded-full max-h-72 mx-auto md:max-h-96"
              />
            </div>
            <div className=" text-5xl flex  gap-12 py-3 text-gray-800 ">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/aizada-zhexengaliyeva/"
              >
                <AiFillLinkedin color={darkMode ? "white" : "black"} />
              </a>

              <a target="_blank" href="https://www.instagram.com/zhksnglv.a/">
                <AiFillInstagram color={darkMode ? "white" : "black"} />
              </a>
              <a target="_blank" href="mailto:aizada.zhex@gmail.com">
                <IoMdMail color={darkMode ? "white" : "black"} />
              </a>
              <a
                target="_blank"
                href="https://www.pinterest.com/aizas_lifestyle/?eq=aizas%20lifes&etslf=14133"
              >
                <FaPinterestSquare color={darkMode ? "white" : "black"} />
              </a>
            </div>
          </div>

          <div className=" text-center pt-10 flex flex-col justify-center bg-white ">
            <h1 className="  font-caveat text-[48px]    text-black  dark:text-black font-medium">
              
              <span className="inline-flex h-20 pt-2 overflow-x-hidden  whitespace-nowrap text-brand-accent ">
                <Typed
                  //className='md:text-4xl sm:text-3xl text-xl font-semibold px-2  text-white'
                  strings={["Hi, I'm Aiza"]}
                  typeSpeed={120}
                  backSpeed={40}
                  cursorChar="|"
                />
              </span>
            </h1>
            <h3 className=" dark:text-black text-2xl pb-5 md:py-2 text-black  font-poppins ">
              Marketing Specialist | Social Media Manager | Content Creator
            </h3>
            <p className=" dark:text-gray-600 py-2 leading-8 text-gray-600 max-w-xl mx-auto px-2 font-poppins ">
              Passionate Digital Marketing Specialist with over two years of
              experience. With an Associate's degree in Business Marketing,
              Certification in Digital Marketing, and experience working on
              diverse projects, I have developed strong skills in Content
              Creation, Social Media Management, and Marketing Strategy. I am an
              ambitious, creative, communicative, and energetic individual who
              is passionate about Marketing and adores social media and all the
              opportunities it provides. I am eager to utilize my skills and
              experience to help your business grow and build a strong, lasting
              relationship with its customers by developing effective social
              media strategies, creating compelling content, and analyzing data
              to optimize marketing performance.
            </p>
          </div>
        </div>
      </section>

      <section id="aboutMe" className="   bg-[#ECDECF] h-auto    ">
        <div className="   md:grid grid-cols-2 md:h-[10vh] md:pb-0 pb-0 ">
          <div className=" flex flex-col items-center justify-center bg-[#ECDECF] py-12  md:py-0 pb-0   ">
            <p className="font-montserrat  text-4xl  md:text-4xl lg:text-5xl    dark:text-black font-medium border-b-2 border-black px-12 pb-4 absolute w-[80vw] md:w-[30vw] left-[10vw] text-center">
              Services
            </p>
          </div>

          <div className="hidden  md:flex  flex-col items-center justify-center bg-white py-12 md:py-0  "></div>
        </div>

        <div className="   md:grid grid-cols-2 md:h-auto md:pb-0 pb-10 ">
          <div className=" flex flex-col items-center justify-center bg-[#ECDECF]  ">
            <div className=" bg-white h-auto  max-w-lg hover:scale-105 duration-100  flex-1 text-center p-5 rounded-xl  my-10 mx-5 shadow-lg  shadow-slate-600 dark:shadow-slate-200 py-12 ">
              <img
                src={require("./assets/content.jpg")}
                className=" rounded-xl max-h-72 mx-auto "
              />
              <h3 className="dark:text-black text-lg font-medium pt-8 pb-2 font-montserrat text-[32px]">
                Content Creation
              </h3>
              <p className="dark:text-gray-900  py-2 leading-8 text-black font-poppins">
                I specialize in creating high-quality written and visual content
                such as photos, videos, texts, scripts, and ads that is tailored
                to your business’ needs. You will be able to use this content on
                your social media platforms to build a strong online presence.{" "}
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center bg-white py-12 md:py-0  ">
            <div className="bg-[#ECDECF] h-100   max-w-lg hover:scale-105 duration-100   flex-1 text-center shadow-lg p-5  px-5  rounded-xl my-10 mx-5 shadow-slate-600 dark:shadow-slate-200 py-12 ">
              <img
                src={require("./assets/socialMedia.jpg")}
                className=" rounded-xl max-h-72 mx-auto "
              />
              <h3 className="dark:text-black text-lg font-medium pt-8 pb-2 font-montserrat text-[32px]">
                Social Media Management
              </h3>
              <p className="dark:text-gray-900 py-2 leading-8 text-black font-poppins">
                I specialize in creating a visual plan with theme and colors for
                your social media platforms, scheduling posts, arranging
                highlights, bio, and contact and referring buttons. I will help
                you communicate your brand’s message in a clear and effective
                way.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="aboutMe" className="   bg-[#ECDECF] h-auto   ">
        <div className="   md:grid grid-cols-2  md:pb-0 pb-0 ">
            <div className=" hidden  md:flex items-center justify-center bg-[#ECDECF]  md:py-0 h-[10vh] ">
            
            </div>
            
          <div className="hidden  md:flex  flex-col items-center justify-center bg-white py-12 md:py-0  "></div>
          <div className="  items-center justify-center bg-[#ECDECF]  md:py-0  ">
            <p className="font-serif text-4xl  md:text-4xl lg:text-5xl  ml-[10vw]  dark:text-black font-medium border-b-2 border-black px-12 pb-4  w-[80vw] md:w-[30vw] left-[10vw] text-center font-montserrat">
              Portfolio
            </p>
              <p className="  dark:text-gray-900 md:leading-8 text-gray-900  md:text-[15px]  mx-auto  text-center w-auto  md:mb-0 md:mt-4 mb-2 mt-2  text-[12.5px] font-poppins max-w-[90vw]  md:max-w-xl">
                I have been working as a Marketing Specialist since 2021.
                <br/>
                Below are some of the projects that I have worked on.
              </p>
            </div>
            
          <div className="hidden  md:flex  flex-col items-center justify-center bg-white py-12 md:py-0  "></div>
        </div>
      
        <div className="   md:grid grid-cols-2 md:pb-0 pb-10 ">
          <div className="  items-center justify-center bg-[#ECDECF] py-12 md:py-12 grid grid-cols-2 gap-2  px-4 md:px-24 ">
            <div onClick={()=>{openVideo("https://drive.google.com/uc?id=1HYw1moftpStTvIhx_k0rv7Y5G6u2H6Fi")}} className="  bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className="  md:visible h-[12vw]  md:h-[4vw] md:w-[4vw] text-white absolute ml-[16vw] mt-[16vw] md:ml-[7vw] md:mt-[7vw]"/>
            <video 
          autoPlay={window.innerWidth<850? true : false} 
          playsInline={window.innerWidth<850? true : false} 
              src="https://drive.google.com/uc?id=1HYw1moftpStTvIhx_k0rv7Y5G6u2H6Fi" >
            </video>
            </div>
            <div onClick={()=>{openVideo("https://drive.google.com/uc?id=1iNOqJxUwwlMP8Na_3k5pBWOI2G_aeLAr")}} className="  bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className=" md:visible h-[12vw]  md:h-[4vw] md:w-[4vw] text-white absolute ml-[16vw] mt-[16vw] md:ml-[7vw] md:mt-[7vw]"/>
            <video 
          autoPlay={window.innerWidth<850? true : false} 
          playsInline={window.innerWidth<850? true : false} 
              src="https://drive.google.com/uc?id=1iNOqJxUwwlMP8Na_3k5pBWOI2G_aeLAr" >
            </video>
            </div>
            <div onClick={()=>{openVideo("https://drive.google.com/uc?id=1AwwAXiR04C_gfD30PEhwsz2_ZPXfxEAG")}} className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className=" md:visible h-[12vw]  md:h-[4vw] md:w-[4vw] text-white absolute ml-[16vw] mt-[16vw] md:ml-[7vw] md:mt-[7vw]"/>
            <video 
          autoPlay={window.innerWidth<850? true : false} 
          playsInline={window.innerWidth<850? true : false} 
              src="https://drive.google.com/uc?id=1AwwAXiR04C_gfD30PEhwsz2_ZPXfxEAG" >
            </video>
            </div>
            <div onClick={()=>{openVideo("https://drive.google.com/uc?id=1ajmdjZxiQAHRnRlvDwjeaG-I4Xy_R46Z")}} className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className=" md:visible h-[12vw]  md:h-[4vw] md:w-[4vw] text-white absolute ml-[16vw] mt-[16vw] md:ml-[7vw] md:mt-[7vw]"/>
            <video 
          autoPlay={window.innerWidth<850? true : false} 
          playsInline={window.innerWidth<850? true : false} 
              src="https://drive.google.com/uc?id=1ajmdjZxiQAHRnRlvDwjeaG-I4Xy_R46Z" >
            </video>
            </div>
          </div>
           


            
          <div className=" flex flex-col items-center justify-center bg-white py-12 md:py-0  mb-0  ">
            <p className=" w-[85%] font-serif    dark:text-black font-medium md:text-start text-start  mb-2 font-montserrat text-[36px]  md:text-[48px] lg:text-[48px]   ">
              San Jose City College
            </p>
            <p className=" w-[85%] font-serif text-3xl  md:text-3xl lg:text-4xl   text-gray-500   md:text-l lg:text-l    md:text-start text-start mb-12 ">
              Student Ambassador
            </p>
            <ul className=" w-[85%]  list-disc text-black  ">
              <li>
              <p className=" font-poppins  text-xl  md:text-xl lg:text-xl mb-2">
                  Managed multiple social media accounts; filmed, edited, and
                  posted content.
                </p>
              </li>
              <li>
              <p className=" font-poppins text-xl  md:text-xl lg:text-xl mb-2">
                  Increased Instagram followers by 20% over a 3 month period.
                </p>
              </li>
              <li>
              <p className=" font-poppins text-xl  md:text-xl lg:text-xl mb-2">
                  Reached 255k Instagram and 4k TikTok accounts over a 3 month
                  period.
                </p>
              </li>
              <li>
              <p className=" font-poppins text-xl  md:text-xl lg:text-xl mb-2">
                  Achieved a noticeable increase in Instagram Reels views up to
                  5 times over a 3 month.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="aboutMe" className="   bg-[#ECDECF]   h-auto  ">
        
        <div className="   md:grid grid-cols-2 md:pb-0 pb-10 ">
          <div className=" flex flex-col items-center justify-center bg-[#ECDECF] py-12 md:py-0  ">
          <div className="  items-center justify-center bg-[#ECDECF] py-8 pt-0 md:py-12 grid grid-cols-2 gap-2  px-4 md:px-24 ">
          <div className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
              <img
              onClick={() =>{setBigPhoto("https://drive.google.com/uc?export=view&id=1PLd1dMko34dgfvfNZFmyeAOMPj1Szb6m")} }
                    src="https://drive.google.com/uc?export=view&id=1PLd1dMko34dgfvfNZFmyeAOMPj1Szb6m"
                    className="  object-cover h-[100%] w-[100%] "
              />
            </div>
            <div className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <img
             onClick={() =>{setBigPhoto("https://drive.google.com/uc?export=view&id=1SzqmT6be69o3I4OUNJjVrDJq9m5hse0Y")} }
                    src="https://drive.google.com/uc?export=view&id=1SzqmT6be69o3I4OUNJjVrDJq9m5hse0Y"
                    className="  object-cover h-[100%] w-[100%] "
              />
            </div>
            <div className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <img
                         onClick={() =>{setBigPhoto("https://drive.google.com/uc?export=view&id=1KFtkbR3UKlgskSv_GGF5MFC0Kn1_FeRh")} }

                  src="https://drive.google.com/uc?export=view&id=1KFtkbR3UKlgskSv_GGF5MFC0Kn1_FeRh"
                  className="  object-cover h-[100%] w-[100%] "
              />
            </div>
            <div className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <img
                         onClick={() =>{setBigPhoto("https://drive.google.com/uc?export=view&id=1yrmnYKXYbNYuPTe2NSAi2Q4KmY6N4e74")} }

                  src="https://drive.google.com/uc?export=view&id=1yrmnYKXYbNYuPTe2NSAi2Q4KmY6N4e74"
                  className="  object-cover h-[100%] w-[100%] "
            />
            </div>
          </div>
           
          </div>

          <div className=" flex flex-col items-center justify-center bg-white py-12 md:py-0   ">
          <p className=" w-[85%] font-serif    dark:text-black font-medium md:text-start text-start  mb-2 font-montserrat text-[36px]  md:text-[48px] lg:text-[48px]    ">
              Airo
            </p>
            <p className=" w-[85%] font-serif text-3xl  md:text-3xl lg:text-4xl   text-gray-500   md:text-l lg:text-l    md:text-start text-start mb-12 ">
              Founder & Marketing Specialist
            </p>

            <ul className=" w-[85%]  list-disc text-black  ">
              <li>
              <p className=" font-poppins text-xl  md:text-xl lg:text-xl mb-2">
                  Launched and growing a small business selling brand clothing
                  and accessories from the US in Kazakhstan, generating revenue
                  through online sales and partnerships with local boutiques.
                </p>
              </li>
              <li>
              <p className=" font-poppins text-xl  md:text-xl lg:text-xl mb-2">
                  Developed a comprehensive marketing strategy, utilizing social
                  media and content marketing to increase brand awareness and
                  drive sales.
                </p>
              </li>
              <li>
              <p className=" font-poppins text-xl  md:text-xl lg:text-xl mb-2">
                  Manage sales, customer service, inventory management, and
                  financial tracking and reporting.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="aboutMe" className="   bg-[#ECDECF] h-auto   ">
        <div className="   md:grid grid-cols-2 md:pb-0 pb-10 ">
        <div className="  items-center justify-center bg-[#ECDECF] py-8 pt-0 md:py-12 grid grid-cols-2 gap-2  px-4 md:px-24 ">
        <div onClick={()=>{openVideo("https://drive.google.com/uc?id=1wppJsR64eqIBkoE_Z-LTJWrC9KvOeUVL")}} className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
        <PlayCircleIcon className=" md:visible h-[12vw]  md:h-[4vw] md:w-[4vw] text-white absolute ml-[16vw] mt-[16vw] md:ml-[7vw] md:mt-[7vw]"/>
            <video 
          autoPlay={window.innerWidth<850? true : false} 
          playsInline={window.innerWidth<850? true : false} 
              src="https://drive.google.com/uc?id=1wppJsR64eqIBkoE_Z-LTJWrC9KvOeUVL" >
            </video>
            </div>
            <div className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <img
                         onClick={() =>{setBigPhoto("https://drive.google.com/uc?export=view&id=1XXS7i7jVIuPVQg_WtwV3uh4HxhVnuVbp")} }

                    src="https://drive.google.com/uc?export=view&id=1XXS7i7jVIuPVQg_WtwV3uh4HxhVnuVbp"
                    className="  object-cover h-[100%] w-[100%] "
            />
            </div>
            <div onClick={()=>{openVideo("https://drive.google.com/uc?id=1FofFe2U0PvzWoh9QSvSVhBavjco7Qo_X")}} className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon  className=" md:visible h-[12vw]  md:h-[4vw] md:w-[4vw] text-white absolute ml-[16vw] mt-[16vw] md:ml-[7vw] md:mt-[7vw]"/>
            <video 
          autoPlay={window.innerWidth<850? true : false} 
          playsInline={window.innerWidth<850? true : false} 
              src="https://drive.google.com/uc?id=1FofFe2U0PvzWoh9QSvSVhBavjco7Qo_X" >
            </video>
            </div>
            <div className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <img
                         onClick={() =>{setBigPhoto("https://drive.google.com/uc?export=view&id=1-rWGMephrs4bwZJlGcDbYp2URoZGtduc")} }

                    src="https://drive.google.com/uc?export=view&id=1-rWGMephrs4bwZJlGcDbYp2URoZGtduc"
                    className="  object-cover h-[100%] w-[100%] "
            />
            </div>
            <div onClick={()=>{openVideo("https://drive.google.com/uc?id=1ke5OQaVsMZRaKnOG83r3eUrBCcjIEFuB")}} className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className=" md:visible h-[12vw]  md:h-[4vw] md:w-[4vw] text-white absolute ml-[16vw] mt-[16vw] md:ml-[7vw] md:mt-[7vw]"/>
            <video 
          autoPlay={window.innerWidth<850? true : false} 
          playsInline={window.innerWidth<850? true : false} 
              src="https://drive.google.com/uc?id=1nz2Awbw97FUMxd6ln2nT1Eq0MGA6iDIV"  >
            </video>
            </div>
            <div className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
              <img
                           onClick={() =>{setBigPhoto("https://drive.google.com/uc?export=view&id=1vdqO8RVGl4sDpt8rk6CYQGm9po3sUbOE")} }

                    src="https://drive.google.com/uc?export=view&id=1vdqO8RVGl4sDpt8rk6CYQGm9po3sUbOE"
                    className="  object-cover h-[100%] w-[100%] "
              />
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center bg-white py-12 md:py-0  ">
          <p className=" w-[85%] font-serif    dark:text-black font-medium md:text-start text-start  mb-2 font-montserrat text-[36px] md:text-[48px] lg:text-[48px]  ">
              Z48
            </p>
            <p className=" w-[85%] font-serif text-3xl  md:text-3xl lg:text-4xl   text-gray-500   md:text-l lg:text-l    md:text-start text-start mb-12 ">
              Freelance Content Creator
            </p>

            <ul className=" w-[85%]  list-disc text-black ">
              <li>
              <p className=" font-poppins text-xl  md:text-xl lg:text-xl mb-2">
                  Created content for social media platforms.
                </p>
              </li>
              <li>
              <p className=" font-poppins text-xl  md:text-xl lg:text-xl mb-2">
                  Collaborated with models and businesses to increase cafe
                  awareness and drive sales.
                </p>
              </li>
              <li>
              <p className=" font-poppins text-xl  md:text-xl lg:text-xl mb-2">
                  Helped the marketing specialist increase Instagram following
                  and engagement by 30%.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="aboutMe" className="   bg-[#ECDECF] h-auto ">
        <div className="   md:grid grid-cols-2  md:pb-0 pb-10 ">
        <div className="  items-center justify-center bg-[#ECDECF] py-8 pt-0 md:py-12 grid grid-cols-2 gap-2  px-4 md:px-24 ">
        <div className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
           <img
                        onClick={() =>{setBigPhoto("https://drive.google.com/uc?export=view&id=1J1mHgidCA2ng0Zgyxh2xg_soaRTR5RVU")} }

                    src="https://drive.google.com/uc?export=view&id=1J1mHgidCA2ng0Zgyxh2xg_soaRTR5RVU"
                    className="  object-cover h-[100%] w-[100%] "
              />
            </div>
            <div className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <img
                         onClick={() =>{setBigPhoto("https://drive.google.com/uc?export=view&id=1ZeQMkzDxEhKtLuUTzRLEnT6LtoVBDZ-U")} }

                    src="https://drive.google.com/uc?export=view&id=1ZeQMkzDxEhKtLuUTzRLEnT6LtoVBDZ-U"
                    className="  object-cover h-[100%] w-[100%] "
            />
            </div>
            <div className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
           <img
                        onClick={() =>{setBigPhoto("https://drive.google.com/uc?export=view&id=15gzpRbwiMh16Q11IlL8LUuD13XdhQPrU")} }

                    src="https://drive.google.com/uc?export=view&id=15gzpRbwiMh16Q11IlL8LUuD13XdhQPrU"
                    className="  object-cover h-[100%] w-[100%] "
              />
            
            </div>
            <div onClick={()=>{openVideo("https://drive.google.com/uc?id=1eMmoq8YMORYhZ_YrnH-YHQRZVUMnZRYV")}} className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className=" md:visible h-[12vw]  md:h-[4vw] md:w-[4vw] text-white absolute ml-[16vw] mt-[16vw] md:ml-[7vw] md:mt-[7vw]"/>
            <video 
          autoPlay={window.innerWidth<850? true : false} 
          playsInline={window.innerWidth<850? true : false} 
              src="https://drive.google.com/uc?id=1eMmoq8YMORYhZ_YrnH-YHQRZVUMnZRYV" >
            </video>
            </div>
            <div className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <img
                         onClick={() =>{setBigPhoto("https://drive.google.com/uc?export=view&id=1i7vnguX-0MN1VSnsXOOsD1oPCuQX9M6Y")} }

                    src="https://drive.google.com/uc?export=view&id=1i7vnguX-0MN1VSnsXOOsD1oPCuQX9M6Y"
                    className="  object-cover h-[100%] w-[100%] "
              />
            </div>
            <div className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
              <img
                           onClick={() =>{setBigPhoto("https://drive.google.com/uc?export=view&id=1-dNEoGEZDOUdp2TMwTqOp-H_2smqgYws")} }

                    src="https://drive.google.com/uc?export=view&id=1-dNEoGEZDOUdp2TMwTqOp-H_2smqgYws"
                    className="  object-cover h-[100%] w-[100%] "
              />
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center bg-white py-12 md:py-0  ">
          <p className=" w-[85%] font-serif    dark:text-black font-medium md:text-start text-start  mb-2 font-montserrat text-[36px]  md:text-[48px] lg:text-[48px]   ">
              Marmelad Bar
            </p>
            <p className=" w-[85%] font-serif text-3xl  md:text-3xl lg:text-4xl   text-gray-500   md:text-l lg:text-l    md:text-start text-start mb-12 ">
              Freelancer Content Creator
            </p>

            <ul className=" w-[85%]  list-disc text-black ">
              <li>
              <p className=" font-poppins text-xl  md:text-xl lg:text-xl mb-2">
                  Created content for social media platforms and ads.
                </p>
              </li>
              <li>
              <p className=" font-poppins text-xl  md:text-xl lg:text-xl mb-2">
                Participated in professional photo and video shoots. 
                </p>
              </li>
              <li>
              <p className=" font-poppins text-xl  md:text-xl lg:text-xl mb-2">
                Collaborated with the marketing specialist to generate creative ideas for content.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="aboutMe" className="   bg-[#ECDECF]  ">
        <div className="   md:grid grid-cols-2  md:pb-0 pb-10 ">
        <div className="  items-center justify-center bg-[#ECDECF] py-8 pt-0 md:py-12 grid grid-cols-2 gap-2  px-4 md:px-24 ">
        <div onClick={()=>{openVideo("https://drive.google.com/uc?id=1jl8JYlBon4WMAWSYlGbuflEORaXS5oPO")}} className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
        <PlayCircleIcon className=" md:visible h-[12vw]  md:h-[4vw] md:w-[4vw] text-white absolute ml-[16vw] mt-[16vw] md:ml-[7vw] md:mt-[7vw]"/>
            <video 
          autoPlay={window.innerWidth<850? true : false} 
          playsInline={window.innerWidth<850? true : false} 
              src="https://drive.google.com/uc?id=1jl8JYlBon4WMAWSYlGbuflEORaXS5oPO" >
            </video>
            </div>
            <div onClick={()=>{openVideo("https://drive.google.com/uc?id=1c-XagbUVMW2gami7M2B8EGv-YrDnWRn9")}} className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className=" md:visible h-[12vw]  md:h-[4vw] md:w-[4vw] text-white absolute ml-[16vw] mt-[16vw] md:ml-[7vw] md:mt-[7vw]"/>
            <video 
          autoPlay={window.innerWidth<850? true : false} 
          playsInline={window.innerWidth<850? true : false} 
              src="https://drive.google.com/uc?id=1c-XagbUVMW2gami7M2B8EGv-YrDnWRn9" >
            </video>
            </div>
            <div onClick={()=>{openVideo("https://drive.google.com/uc?id=1sadOsSdX3mr5CU8vsHrt4zfUnatTyPMW")}} className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className=" md:visible h-[12vw]  md:h-[4vw] md:w-[4vw] text-white absolute ml-[16vw] mt-[16vw] md:ml-[7vw] md:mt-[7vw]"/>
            <video 
          autoPlay={window.innerWidth<850? true : false} 
          playsInline={window.innerWidth<850? true : false} 
              src="https://drive.google.com/uc?id=1sadOsSdX3mr5CU8vsHrt4zfUnatTyPMW" >
            </video>
            </div>
            <div onClick={()=>{openVideo("https://drive.google.com/uc?id=16WXmmdl870K1EvDcS3PkVWc1326Nv0wQ")}} className=" bg-white h-[45vw] w-[45vw]  md:h-[18vw] md:w-auto   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className=" md:visible h-[12vw]  md:h-[4vw] md:w-[4vw] text-white absolute ml-[16vw] mt-[16vw] md:ml-[7vw] md:mt-[7vw]"/>
            <video 
          autoPlay={window.innerWidth<850? true : false} 
          playsInline={window.innerWidth<850? true : false} 
 
              src="https://drive.google.com/uc?id=16WXmmdl870K1EvDcS3PkVWc1326Nv0wQ" >
            </video>

            </div>
          </div>
          <div className=" flex flex-col items-center justify-center bg-white py-12 md:py-0  ">
          <p className=" w-[85%] font-serif    dark:text-black font-medium md:text-start text-start  mb-2 font-montserrat text-[36px] md:text-[48px] lg:text-[48px]  ">
              AECC Global
            </p>
            <p className=" w-[85%] font-serif text-3xl  md:text-3xl lg:text-4xl   text-gray-500   md:text-l lg:text-l    md:text-start text-start mb-12 ">
              Content Creator
            </p>

            <ul className=" w-[85%]  list-disc text-black ">
              <li>
              <p className=" font-poppins text-xl  md:text-xl lg:text-xl mb-2">
                  Created engaging and educational content for various digital
                  channels.
                </p>
              </li>
              <li>
              <p className=" font-poppins text-xl  md:text-xl lg:text-xl mb-2">
                  Edited and proofread content for accuracy, tone, style, and
                  grammar.
                </p>
              </li>
              <li>
              <p className=" font-poppins text-xl  md:text-xl lg:text-xl mb-2">
                  Collaborated with the marketing team to develop effective
                  strategies and ensure that the content is of high quality.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    
    {video!="" &&
    <>
    <div
              className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div  className="  relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="  border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           {/*footer*/}
           <div className="hidden md:flex items-center justify-end border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() =>{setVideo("")} }
            >
              Close
            </button>
           
          </div>
          {/*body*/}
          <div onClick={()=>{}}  className="   relative  flex-auto  lg:h-[80vh] lg:w-[25vw] h-[77vh] ">
          <video 
          autoPlay
          playsInline 
          className="lg:h-[80vh] h-[70vh]"
          src={video}  controls  />
            <button
              className="flex md:hidden bg-white rounded-full pt-0 text-red-500 text-lg ml-[38vw] mt-4 background-transparent font-bold uppercase  h-[5vh]    "
              type="button"
              onClick={() =>{setVideo("")} }
            >
              Close
            </button>
          </div>
         
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
    
    
    }
      {bigPhoto!="" &&
    <>
    <div
              className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div  className="  relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="  border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           {/*footer*/}
           <div className="hidden md:flex items-center justify-end border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() =>{setBigPhoto("")} }
            >
              Close
            </button>
           
          </div>
          {/*body*/}
          <div onClick={()=>{}}  className="   relative  flex-auto  lg:h-[80vh] w-[100vw] lg:w-auto h-auto ">
            <img
                    src={bigPhoto}
                    className="  object-cover h-[100%] w-[100%] "
              />
            <button
              className="flex md:hidden bg-white rounded-full pt-0 text-red-500 text-lg ml-[38vw] mt-4 background-transparent font-bold uppercase px-6 h-[5vh]    "
              type="button"
              onClick={() =>{setBigPhoto("")} }
            >
              Close
            </button>
          </div>
         
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
    
    
    }

    </div>
  );
}

export default App;
