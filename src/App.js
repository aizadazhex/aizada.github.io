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
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <section id="home" className=" min-h-screen  ">
        <div className="bg-gradient-to-b md:bg-gradient-to-r from-white to-[#ECDECF] h-[10vh]  justify-center ">
          <nav className=" h-[10vh] items-center align-middle   mb-12   text-center flex justify-between">
            <h1 className=" text-xl font-light text-black dark:text-black md:ml-24 ml-5">
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
                  href="https://drive.google.com/file/d/1P-TTwHWiRZkzZ4v9kWAxVtuVfK18XkQR/view?usp=share_link"
                  className="  bg-[white] text-[#D9BFA2] p-2 rounded-md ml-8 md:mr-0 mr-5"
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
            <h1 className="  font-serif text-4xl  md:text-4xl lg:text-5xl  text-black  dark:text-black font-medium ">
              Hi, I'm{" "}
              <span className="inline-flex h-20 pt-2 overflow-x-hidden  whitespace-nowrap text-brand-accent ">
                <Typed
                  //className='md:text-4xl sm:text-3xl text-xl font-semibold px-2  text-white'
                  strings={["Aiza"]}
                  typeSpeed={120}
                  backSpeed={40}
                  cursorChar="|"
                />
              </span>
            </h1>
            <h3 className=" dark:text-black text-2xl pb-5 md:py-2 text-black ">
              Marketing Specialist | Social Media Manager | Content Creator
            </h3>
            <p className=" dark:text-gray-600 py-2 leading-8 text-gray-600 max-w-xl mx-auto px-2 ">
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

      <section id="aboutMe" className="   bg-[#ECDECF] h-auto  -mb-6 ">
        <div className="   md:grid grid-cols-2 md:h-[10vh] md:pb-0 pb-0 ">
          <div className=" flex flex-col items-center justify-center bg-[#ECDECF] py-12  md:py-0 pb-0  ">
            <p className="font-serif text-4xl  md:text-4xl lg:text-5xl    dark:text-black font-medium border-b-2 border-black px-12 pb-4 absolute w-[80vw] left-[10vw]">
              Services
            </p>
          </div>

          <div className="hidden  md:flex  flex-col items-center justify-center bg-white py-12 md:py-0  "></div>
        </div>

        <div className="   md:grid grid-cols-2 md:h-[90vh] md:pb-0 pb-10 ">
          <div className=" flex flex-col items-center justify-center bg-[#ECDECF] py-12 md:py-0  ">
            <div className=" bg-white h-100   max-w-lg hover:scale-105 duration-100  flex-1 text-center p-5 rounded-xl  my-10 mx-5 shadow-lg  shadow-slate-600 dark:shadow-slate-200">
              <img
                src={require("./assets/content.jpg")}
                className=" rounded-xl max-h-72 mx-auto "
              />
              <h3 className="dark:text-black text-lg font-medium pt-8 pb-2">
                Content Creation
              </h3>
              <p className="dark:text-gray-700  py-2 leading-8 text-gray-800">
                I specialize in creating high-quality written and visual content
                such as photos, videos, texts, scripts, and ads that is tailored
                to your business’ needs. You will be able to use this content on
                your social media platforms to build a strong online presence.{" "}
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center bg-white py-12 md:py-0  ">
            <div className="bg-[#ECDECF] h-100   max-w-lg hover:scale-105 duration-100   flex-1 text-center shadow-lg p-5  px-5  rounded-xl my-10 mx-5 shadow-slate-600 dark:shadow-slate-200 ">
              <img
                src={require("./assets/socialMedia.jpg")}
                className=" rounded-xl max-h-72 mx-auto "
              />
              <h3 className="dark:text-black text-lg font-medium pt-8 pb-2">
                Social Media Management
              </h3>
              <p className="dark:text-gray-700 py-2 leading-8 text-gray-800">
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
      <section id="aboutMe" className="   bg-[#ECDECF] h-auto  -mb-6  ">
        <div className="   md:grid grid-cols-2 md:h-[10vh] md:pb-0 pb-0  ">
          <div className=" flex flex-col items-center justify-center bg-[#ECDECF] py-12  md:py-0 pb-0 md:pt-24  h-[30vh]">
            <div className="md:grid grid-cols-2 absolute md:w-[80vw] w-[95vw] md:left-[10vw] md:mt-44 -mt-[45%] md:-mt-0  border-b-2 border-black md:pl-12 pl-0 md:pr-2 pr-0 md:pb-4 pb-0  justify-between ">
              <p className="font-serif text-4xl  md:text-4xl lg:text-5xl    dark:text-black font-medium md:text-start text-center  ">
                Portfolio
              </p>
              <p className=" dark:text-gray-600 md:leading-8 text-gray-600 max-w-xl text-[13px]  md:text-end text-center w-auto md:mb-0 md:mt-0 mb-2 mt-4  ">
                I have been working as a Marketing Specialist since 2021.
                <br />
                Below are some of the projects that I have worked on.
              </p>
            </div>
          </div>

          <div className="hidden  md:flex  flex-col items-center justify-center bg-white py-12 md:py-0  "></div>
        </div>
      </section>
      <section id="aboutMe" className="   bg-[#ECDECF] h-auto  mt-44 ">
        <div className="   md:grid grid-cols-2 md:pb-0 pb-10  ">
          <div className="  items-center justify-center bg-[#ECDECF] py-12 md:py-12 grid grid-cols-2 gap-2  px-24 ">
          <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
              <img
                    src="https://drive.google.com/uc?export=view&id=1mTb65s-KauXcUfXN1e0_s31SOnLDH54n"
                    className="  object-cover h-[100%] w-[100%] "
              />
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className="h-[4vw] w-[4vw] text-white absolute ml-[7vw] mt-[7vw]"/>
            <video 
              src="https://drive.google.com/uc?id=1iNOqJxUwwlMP8Na_3k5pBWOI2G_aeLAr" >
            </video>
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className="h-[4vw] w-[4vw] text-white absolute ml-[7vw] mt-[7vw]"/>
            <video 
              src="https://drive.google.com/uc?id=1AwwAXiR04C_gfD30PEhwsz2_ZPXfxEAG" >
            </video>
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className="h-[4vw] w-[4vw] text-white absolute ml-[7vw] mt-[7vw]"/>
            <video 
              src="https://drive.google.com/uc?id=1ajmdjZxiQAHRnRlvDwjeaG-I4Xy_R46Z" >
            </video>
            </div>
          </div>
           


            
          <div className=" flex flex-col items-center justify-center bg-white py-12 md:py-0  mb-0  ">
            <p className=" w-[85%] font-serif text-2xl  md:text-2xl lg:text-2xl    dark:text-black font-medium md:text-start text-start  ">
              San Jose City College
            </p>
            <p className=" w-[85%] font-serif text-l font-bold text-gray-500  mb-2 md:text-l lg:text-l    md:text-start text-start  ">
              Student Ambassador
            </p>
            <ul className=" w-[85%]  list-disc text-gray-600 ">
              <li>
                <p className=" font-serif ">
                  Managed multiple social media accounts; filmed, edited, and
                  posted content.
                </p>
              </li>
              <li>
                <p className=" font-serif ">
                  Increased Instagram followers by 20% over 3 months period.
                </p>
              </li>
              <li>
                <p className=" font-serif ">
                  Reached 255k Instagram and 4k TikTok accounts over 3 months
                  period.
                </p>
              </li>
              <li>
                <p className=" font-serif ">
                  Achieved a noticeable increase in Instagram Reels views up to
                  5 times over 3 months.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="aboutMe" className="   bg-[#ECDECF]   h-auto  ">
        <div className="   md:grid grid-cols-2 md:pb-0 pb-10 ">
          <div className=" flex flex-col items-center justify-center bg-[#ECDECF] py-12 md:py-0  ">
          <div className="  items-center justify-center bg-[#ECDECF] py-12 md:py-12 grid grid-cols-2 gap-2  px-24 ">
          <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
              <img
                    src="https://drive.google.com/uc?export=view&id=1PLd1dMko34dgfvfNZFmyeAOMPj1Szb6m"
                    className="  object-cover h-[100%] w-[100%] "
              />
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <img
                    src="https://drive.google.com/uc?export=view&id=1SzqmT6be69o3I4OUNJjVrDJq9m5hse0Y"
                    className="  object-cover h-[100%] w-[100%] "
              />
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <img
                  src="https://drive.google.com/uc?export=view&id=1KFtkbR3UKlgskSv_GGF5MFC0Kn1_FeRh"
                  className="  object-cover h-[100%] w-[100%] "
              />
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <img
                  src="https://drive.google.com/uc?export=view&id=1yrmnYKXYbNYuPTe2NSAi2Q4KmY6N4e74"
                  className="  object-cover h-[100%] w-[100%] "
            />
            </div>
          </div>
           
          </div>

          <div className=" flex flex-col items-center justify-center bg-white py-12 md:py-0   ">
            <p className=" w-[85%] font-serif text-2xl  md:text-2xl lg:text-2xl    dark:text-black font-medium md:text-start text-start  ">
              Airo
            </p>
            <p className=" w-[85%] font-serif text-l font-bold text-gray-500  mb-2 md:text-l lg:text-l    md:text-start text-start  ">
              Founder & Marketing Specialist
            </p>

            <ul className=" w-[85%]  list-disc text-gray-600  ">
              <li>
                <p className=" font-serif  ">
                  Launched and growing a small business selling brand clothing
                  and accessories from the US in Kazakhstan, generating revenue
                  through online sales and partnerships with local boutiques.
                </p>
              </li>
              <li>
                <p className=" font-serif ">
                  Developed a comprehensive marketing strategy, utilizing social
                  media and content marketing to increase brand awareness and
                  drive sales.
                </p>
              </li>
              <li>
                <p className=" font-serif">
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
           <div className="  items-center justify-center bg-[#ECDECF] py-12 md:py-12 grid grid-cols-2 gap-2  px-24 ">
           <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
           <PlayCircleIcon className="h-[4vw] w-[4vw] text-white absolute ml-[7vw] mt-[7vw]"/>
            <video 
              src="https://drive.google.com/uc?id=1ke5OQaVsMZRaKnOG83r3eUrBCcjIEFuB" >
            </video>
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <img
                    src="https://drive.google.com/uc?export=view&id=1XXS7i7jVIuPVQg_WtwV3uh4HxhVnuVbp"
                    className="  object-cover h-[100%] w-[100%] "
            />
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
           <PlayCircleIcon className="h-[4vw] w-[4vw] text-white absolute ml-[7vw] mt-[7vw]"/>
            <video 
              src="https://drive.google.com/uc?id=1vXZfO_c7KfvYA0-SlwpMnSEK-dUncTVU" >
            </video>
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <img
                    src="https://drive.google.com/uc?export=view&id=1-rWGMephrs4bwZJlGcDbYp2URoZGtduc"
                    className="  object-cover h-[100%] w-[100%] "
            />
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className="h-[4vw] w-[4vw] text-white absolute ml-[7vw] mt-[7vw]"/>
            <video 
              src="https://drive.google.com/uc?id=1nz2Awbw97FUMxd6ln2nT1Eq0MGA6iDIV"  >
            </video>
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
              <img
                    src="https://drive.google.com/uc?export=view&id=1EuMynG2uhr9WUzuvGe8tEENz9BwBbCde"
                    className="  object-cover h-[100%] w-[100%] "
              />
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center bg-white py-12 md:py-0  ">
            <p className=" w-[85%] font-serif text-2xl  md:text-2xl lg:text-2xl    dark:text-black font-medium md:text-start text-start  ">
              Z48
            </p>
            <p className=" w-[85%] font-serif text-l font-bold text-gray-500  mb-2 md:text-l lg:text-l    md:text-start text-start  ">
              Freelance Content Creator
            </p>

            <ul className=" w-[85%]  list-disc text-gray-600 ">
              <li>
                <p className=" font-serif ">
                  Created content for social media platforms.
                </p>
              </li>
              <li>
                <p className=" font-serif ">
                  Collaborated with models and businesses to increase cafe
                  awareness and drive sales.
                </p>
              </li>
              <li>
                <p className=" font-serif ">
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
        <div className="  items-center justify-center bg-[#ECDECF] py-12 md:py-12 grid grid-cols-2 gap-2  px-24 ">
        <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
           <img
                    src="https://drive.google.com/uc?export=view&id=1J1mHgidCA2ng0Zgyxh2xg_soaRTR5RVU"
                    className="  object-cover h-[100%] w-[100%] "
              />
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <img
                    src="https://drive.google.com/uc?export=view&id=1ZeQMkzDxEhKtLuUTzRLEnT6LtoVBDZ-U"
                    className="  object-cover h-[100%] w-[100%] "
            />
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
           <img
                    src="https://drive.google.com/uc?export=view&id=15gzpRbwiMh16Q11IlL8LUuD13XdhQPrU"
                    className="  object-cover h-[100%] w-[100%] "
              />
            
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className="h-[4vw] w-[4vw] text-white absolute ml-[7vw] mt-[7vw]"/>
            <video 
              src="https://drive.google.com/uc?id=1KtEaAnRkqaAosJOa5mVK0jD1IEL2AbdW" >
            </video>
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <img
                    src="https://drive.google.com/uc?export=view&id=1i7vnguX-0MN1VSnsXOOsD1oPCuQX9M6Y"
                    className="  object-cover h-[100%] w-[100%] "
              />
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
              <img
                    src="https://drive.google.com/uc?export=view&id=1-dNEoGEZDOUdp2TMwTqOp-H_2smqgYws"
                    className="  object-cover h-[100%] w-[100%] "
              />
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center bg-white py-12 md:py-0  ">
            <p className=" w-[85%] font-serif text-2xl  md:text-2xl lg:text-2xl    dark:text-black font-medium md:text-start text-start  ">
              Marmelad Bar
            </p>
            <p className=" w-[85%] font-serif text-l font-bold text-gray-500  mb-2 md:text-l lg:text-l    md:text-start text-start  ">
              Freelancer Content Creator
            </p>

            <ul className=" w-[85%]  list-disc text-gray-600 ">
              <li>
                <p className=" font-serif ">
                  Created content for social media platforms and ads.
                </p>
              </li>
              <li>
                <p className=" font-serif ">
                Participated in professional photo and video shoots. 
                </p>
              </li>
              <li>
                <p className=" font-serif ">
                Collaborated with the marketing specialist to generate creative ideas for content.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="aboutMe" className="   bg-[#ECDECF]  ">
        <div className="   md:grid grid-cols-2  md:pb-0 pb-10 ">
        <div className="  items-center justify-center bg-[#ECDECF] py-12 md:py-12 grid grid-cols-2 gap-2  px-24 ">
        <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
           <PlayCircleIcon className="h-[4vw] w-[4vw] text-white absolute ml-[7vw] mt-[7vw]"/>
            <video 
              src="https://drive.google.com/uc?id=1boAo197Ydw5E-ZAzF5ZI7XBIN0iJfTm0" >
            </video>
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className="h-[4vw] w-[4vw] text-white absolute ml-[7vw] mt-[7vw]"/>
            <video 
              src="https://drive.google.com/uc?id=1qFFG74VnMDLkftJ4PpHqu8CR8pVEUM05" >
            </video>
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className="h-[4vw] w-[4vw] text-white absolute ml-[7vw] mt-[7vw]"/>
            <video 
              src="https://drive.google.com/uc?id=1sadOsSdX3mr5CU8vsHrt4zfUnatTyPMW" >
            </video>
            </div>
            <div className=" bg-white  h-[18vw]   overflow-hidden  hover:scale-110 duration-100 rounded-md ">
            <PlayCircleIcon className="h-[4vw] w-[4vw] text-white absolute ml-[7vw] mt-[7vw]  "/>
            <video 
              src="https://drive.google.com/uc?id=16WXmmdl870K1EvDcS3PkVWc1326Nv0wQ" >
            </video>

            </div>
          </div>
          <div className=" flex flex-col items-center justify-center bg-white py-12 md:py-0  ">
            <p className=" w-[85%] font-serif text-2xl  md:text-2xl lg:text-2xl    dark:text-black font-medium md:text-start text-start  ">
              AECC Global
            </p>
            <p className=" w-[85%] font-serif text-l font-bold text-gray-500  mb-2 md:text-l lg:text-l    md:text-start text-start  ">
              Content Creator
            </p>

            <ul className=" w-[85%]  list-disc text-gray-600 ">
              <li>
                <p className=" font-serif ">
                  Create engaging and educational content for various digital
                  channels.
                </p>
              </li>
              <li>
                <p className=" font-serif ">
                  Edit and proofread content for accuracy, tone, style, and
                  grammar.
                </p>
              </li>
              <li>
                <p className=" font-serif ">
                  Collaborate with the marketing team to develop effective
                  strategies and ensure that the content is of high quality.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
