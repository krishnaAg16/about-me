import React, { useRef, useState } from "react";
import { Personal, Experiences, Services } from "./componet/Form"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import axios from "axios"
import { Link } from "react-router-dom"
import confetti from "canvas-confetti";
import Cort from "./Cort";



export default function Editor({ obj, setObj }) {

    const [copySuccess, setCopySuccess] = useState("");
    const inputRef = useRef(null);

    const [page, setpage] = useState(1)
    const [publish, setpublish] = useState(false)
    const [preview, setpreview] = useState(false)
    const [loading, setloading] = useState(false)


    const prevPage = () => {
        setpage(page => page - 1)
        console.log(obj)
    }
    const nextPage = () => {
        document.getElementById("personelform")
        if (document.getElementById("personelform") === null || document.getElementById("personelform").reportValidity()) {
            setpage(page => page + 1)
            console.log(obj)
        }

    }
    const postPage = async (e) => {
        try {
            setloading(true)
            e.target.disabled = true;
            const response = await axios.post(`https://about-me-backend-k29v.onrender.com/api/data`, obj);
            setpublish(response.data.id);
            console.log('Data uploaded successfully:', response.data.id);
        } catch (error) {
            console.error('Error uploading data:', error);
        } finally {
            setloading(false)
        }
    }
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }
    const confetti_func = async () => {

        if (publish) {
            var duration = 3.5 * 1000;
            var animationEnd = Date.now() + duration;
            var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 30 };



            var interval = setInterval(() => {
                var timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                var particleCount = 50 * (timeLeft / duration);
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
            }, 250);
        }
    }
    const copyToClipboard = async () => {
        console.log(inputRef.current)
        if (inputRef.current) {
            try {
                await navigator.clipboard.writeText(inputRef.current.value);
            } catch (error) {
                console.error(error.message);
            }
            setCopySuccess("Copied!");
            setTimeout(() => setCopySuccess(""), 2000);
        }
    }

    return (

        <div className="h-screen">
            {!publish &&
                <><button className="bg-blue-500 text-white shadow-xl rounded-lg fixed left-[92%] top-[19px] z-20 px-2 py-1 text-lg hidden md:block"
                    onClick={() => {
                        setpreview(!preview)
                    }}>
                    {!preview ? "Preview" : "Edit"}
                </button>
                    {preview && <Cort obj={obj} />}
                    {!preview &&
                        <div className="flex flex-col-reverse md:flex-row bg-gradient-to-tr from-red-600 via-cyan-800 via-45% to-violet-500 md:h-screen">
                            <div className="left flex flex-col md:w-1/2 p-5 md:overflow-y-auto">
                                <h1 style={{ textShadow: "1px 2px 10px black" }} className="text-3xl font-bold p-2 text-white">About<span style={{ color: "#EAB308" }}>Me.</span></h1>
                                <span className="text-[#ffd9a0] text-2xl font-medium pl-10 mt-14">Ready to bring your <span style={{ textShadow: "0px 0px 1.5px black" }}>Portfolio</span> to life ?</span>
                                <span className="text-[#ffffff] text-3xl font-medium ml-2 px-8 mt-10 w-5/6 border-b pb-10 border-[#141c41]">With <span style={{ textShadow: "0px 0px 3px #000000" }} className="text-[#ffffff]">AboutMe</span>, you can build a portfolio, and showcase your work like a pro — with <span className="text-[#ff2e12]">no</span> <code className="text-[#ffffff]">coding</code> required!</span>
                                <div className="ml-10 mt-16 mb-4 text-3xl text-[#ededed]">
                                    Hi!!
                                </div>
                                <div className=" ml-10 text-[#ebebeb]">
                                    <h1 className="font-mono font-medium tracking-tighter text-5xl">
                                        I'm <span style={{ textShadow: " 0px 0px 5px #222222" }} className="font-semibold text-[#53bcea] tracking-normal">Krishna Agarwal</span>
                                    </h1>
                                    <p className="text-xl font-mono leading-7 mt-3 w-11/12" style={{ textShadow: "1px 1px 1px #000000" }}>a tech enthusiast with a strong interest in Machine Learning (ML) and Deep Learning (DL). As a freelancer, I specialize in web development, automation, and ML, delivering innovative solutions to help clients bring their projects to life.</p>
                                </div>

                                <div className="flex ml-auto space-x-4 mt-auto p-4">
                                    <Link to={"https://github.com/krishnaAg16"} target="_blank"> <FaGithub className="text-5xl p-2 bg-white rounded-full" /> </Link>
                                    <Link to={"https://www.linkedin.com/in/krishna-agarwal1611/"} target="_blank"> <FaLinkedinIn className="text-5xl p-2 bg-white rounded-full text-blue-800" /> </Link>
                                </div>
                            </div>


                            <div className='bg-[#ececef] md:w-1/2 overflow-y-auto'>
                                {page === 1 && <Personal detail={obj} setDetail={setObj} />}
                                {page === 2 && <Services detail={obj} setDetail={setObj} />}
                                {page === 3 && <Experiences detail={obj} setDetail={setObj} />}
                                <div className="buttons flex justify-evenly mb-2 w-full">
                                    {page !== 1 && <button onClick={prevPage} className="border border-black px-2 py-1 text-lg rounded-3xl w-1/6">Previous</button>}
                                    {page !== 3 && <button type="submit" onClick={nextPage} className="border border-black px-2 py-1 text-lg rounded-3xl w-1/6">Next</button>}
                                    {page === 3 && <button onClick={postPage} disabled={loading} className='border border-black px-2 py-1 text-lg rounded-3xl w-1/6'>Publish</button>}
                                </div>
                            </div>
                        </div>}</>
            }

            {publish &&
                confetti_func() &&

                <div className="bg-[#1b1c25] flex w-full z-30 overflow-x-auto py-7 h-full">
                    <div className="my-auto flex flex-col items-center text-white">
                        <span className="text-2xl sm:text-4xl md:text-5xl text-center px-2 py-3"> HURAAYYY!!! </span>
                        <span className="text-4xl sm:text-5xl md:text-6xl mt-25 text-center px-2 py-3"> Portfolio Published</span>
                        <div className="mt-12 tracking-tight font-extralight sm:text-xl">Visit your Portfolio <Link to={obj.slug} replace={true} className="text-yellow-400 hover:text-yellow-500 hover:underline">{obj.slug.toString().toUpperCase()}</Link></div>
                        <div className="mt-16 flex items-center border border-white h-10 sm:h-12 md:h-14 px-4 rounded-lg border-stroke bg-neutral-700 py-3">
                            <span>Your Key :</span>
                            <input type="text" ref={inputRef} value={publish} disabled className="w-max bg-transparent py-3 px-4 text-dark outline-none duration-200 font-mono tracking-wide" />
                            <button onClick={copyToClipboard} className="flex justify-self-end h-full w-8 items-center justify-center text-body-color duration-200 hover:text-primary">
                                {copySuccess ?
                                    (
                                        <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.0394 6.0293L8.03936 15.0293L3.68359 10.6736" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.6875 4.125L14.4062 0.875C14.1875 0.65625 13.875 0.53125 13.5625 0.53125H7.875C6.96875 0.53125 6.21875 1.28125 6.21875 2.1875V13.5937C6.21875 14.5 6.96875 15.25 7.875 15.25H16.375C17.2812 15.25 18.0312 14.5 18.0312 13.5937V4.96875C18.0312 4.65625 17.9062 4.34375 17.6875 4.125ZM14.4687 2.9375L15.6562 4.125H14.4687V2.9375ZM16.375 13.8437H7.875C7.75 13.8437 7.625 13.7187 7.625 13.5937V2.1875C7.625 2.0625 7.75 1.9375 7.875 1.9375H13.0625V4.8125C13.0625 5.1875 13.375 5.53125 13.7812 5.53125H16.625V13.625C16.625 13.75 16.5 13.8437 16.375 13.8437Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M13.7812 7.03125H9.65625C9.28125 7.03125 8.9375 7.34375 8.9375 7.75C8.9375 8.15625 9.25 8.46875 9.65625 8.46875H13.7812C14.1562 8.46875 14.5 8.15625 14.5 7.75C14.5 7.34375 14.1562 7.03125 13.7812 7.03125Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M13.7812 9.65625H9.65625C9.28125 9.65625 8.9375 9.96875 8.9375 10.375C8.9375 10.75 9.25 11.0937 9.65625 11.0937H13.7812C14.1562 11.0937 14.5 10.7813 14.5 10.375C14.4687 9.96875 14.1562 9.65625 13.7812 9.65625Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M13.0625 16.25C12.6875 16.25 12.3437 16.5625 12.3437 16.9687V17.8125C12.3437 17.9375 12.2187 18.0625 12.0937 18.0625H3.625C3.5 18.0625 3.375 17.9375 3.375 17.8125V6.375C3.375 6.25 3.5 6.125 3.625 6.125H4.6875C5.0625 6.125 5.40625 5.8125 5.40625 5.40625C5.40625 5 5.09375 4.6875 4.6875 4.6875H3.625C2.71875 4.6875 1.96875 5.4375 1.96875 6.34375V17.8125C1.96875 18.7188 2.71875 19.4687 3.625 19.4687H12.125C13.0312 19.4687 13.7812 18.7188 13.7812 17.8125V16.9687C13.7812 16.5625 13.4687 16.25 13.0625 16.25Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    )
                                }
                            </button>

                        </div>
                        <div className="mt-5 w-3/4 sm:mt-6 md:w-1/2 text-justify">Note: This key will be essential for making updates and adjustments once the editing feature is available. Please keep this key confidential and do not share it with anyone to ensure the security of your portfolio.</div>
                    </div>

                </div>
            }
        </div>
    )
}