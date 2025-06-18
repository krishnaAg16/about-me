import { useEffect, useState } from "react";
import "./App.css";
import { useRef } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Tbutton from "./componet/toggle";
import { BsGithub } from "react-icons/bs";
// import { Helmet } from "react-helmet-async";

function Cort({ obj }) {

    const paramsObj = {
        hero: {
            img: '/p1.jpg',
            title: 'Krishna Agarwal',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt dolorum expedita labore amet nemo maiores nam nostrum explicabo reiciendis?'
        },
        about: {
            img: '/p2.jpg',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt dolorum expedita labore amet nemo maiores nam nostrum explicabo reiciendis?',
            resume: 'downlodable-link',
            linkedin: 'krishna-agarwal1611',
            instagram: 'link-to-instagram',
            github: 'krishnaAg16',
        },
        service: {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, recusandae error modi aut laudantium suscipit! Ad doloribus alias possimus reiciendis?',
            content: [
                {
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>`,
                    title: "Web Development",
                    desc: "Lunar mare Plavitational const ant right ascension astronaut ionosphere cluster meteor Kirkwood gaps flare limb scientific notation Hubble telescope.",
                },
                {
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>`,
                    title: "UI/UX",
                    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus pariatur aut officiis.",
                },
                {
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>`,
                    title: "SEO Marketing",
                    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Kirkwood gaps flare limb Accusamus pariatur aut officiis.",
                },
                {
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>`,
                    title: "App Development",
                    desc: "Lunar  cluster meteor Kirkwood gaps flare limb Accusamus pariatur scientific  notation Hubble telescope.",
                },
                {
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>`,
                    title: "ML/DL",
                    desc: "Lunar mare Pluto gravitational const ant right ascension astronaut ionosphere cluster meteor Kirkwood gaps flare limb scientific notation Hubble telescope.",
                }
            ]
        },
        experience: {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, recusandae error modi aut laudantium suscipit! Ad doloribus alias possimus reiciendis?',
            content: [
                {
                    time: "SEP 2019 - JAN 2022",
                    title: "Intern",
                    company: "Google Inc.",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, debitis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores tempora quam a fugiat laborum doloremque consectetur perspiciatis laudantium quo ratione, minima dolorem placeat illum nam dolor inventore ipsum enim consequuntur impedit quas.",
                    link: "#",
                },
                {
                    time: "SEP 2019 - JAN 2022",
                    title: "Intern",
                    company: "Google Inc.",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, debitis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores tempora quam a fugiat laborum doloremque consectetur perspiciatis laudantium quo ratione, minima dolorem placeat illum nam dolor inventore ipsum enim consequuntur impedit quas.",
                },
                {
                    time: "SEP 2019 - JAN 2022",
                    title: "Intern",
                    company: "Google Inc.",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, debitis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores tempora quam a fugiat laborum doloremque consectetur perspiciatis laudantium quo ratione, minima dolorem placeat illum nam dolor inventore ipsum enim consequuntur impedit quas.",
                },
                {
                    time: "SEP 2019 - JAN 2022",
                    title: "Intern",
                    company: "Google Inc.",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, debitis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores tempora quam a fugiat laborum doloremque consectetur perspiciatis laudantium quo ratione, minima dolorem placeat illum nam dolor inventore ipsum enim consequuntur impedit quas.",
                },
                {
                    time: "SEP 2019 - JAN 2022",
                    title: "Intern",
                    company: "Google Inc.",
                    desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolores suscipit a est explicabo officiis veniam voluptas fuga ut voluptatibus laudantium repudiandae doloremque ea! adipisicing elit. Ipsa, debitis?",
                },
            ]
        },
        contact: {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptates? Beatae deserunt eaque cum perferendis, vero odit eveniet eos sequi.',
            add: 'Anywhere except here',
            phone: '+91-725XXXXX32',
            email: 'justcall@me.com',

        },
    }

    const { hero, about, service, experience, contact } = obj ? obj : paramsObj;

    const [theme, setTheme] = useState(1);
    const [color, setColor] = useState({
        bg: "#F4F6F6",
        fg: "#C8E2E2",
        p1: "#EE5E4E",
        p2: "#E93C29",
        p3: "#FF7667",
        p4: "#EE5E4E",
        s1: "#180404",
        s2: "#6B7280",
        s3: "#9CA3AF",
        s4: "#343C48",
        s5: "#6B7280",
        fb: "#FFFFFF",
        ft: "#000000",
    })
    const [active, setActive] = useState("#hero");
    const drawer_ref = useRef();
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        setActive(`#${entry.target.id}`);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        const kuchbhi = sectionsRef.current;

        kuchbhi.forEach((section) => {
            if (section) observer.observe(section);
        });


        return () => {
            kuchbhi.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    function toggle() {

        drawer_ref.current.classList.toggle("-right-full");
        drawer_ref.current.classList.toggle("hidden");

        drawer_ref.current.classList.toggle("right-0");
        drawer_ref.current.classList.toggle("flex");
    }

    const links = [
        {
            name: "HOME",
            url: "#hero",
        },
        {
            name: "ABOUT",
            url: "#about",
        },
        {
            name: "SERVICE",
            url: "#service",
        },
        {
            name: "EXPERIENCE",
            url: "#experience",
        },
        {
            name: "RESUME",
            url: about.resume,
        },
        {
            name: "CONTACT",
            url: "#contact",
        },
    ];

    useEffect(() => {
        const tcolor = theme ? 'dark-theme' : '';
        document.documentElement.className = tcolor;
        const themelist = [
            {
                bg: "#F4F6F6", //background
                fg: "#C8E2E2", //foreground
                p1: "#EE5E4E", //experience-title heading-text color-1
                p2: "#E93C29", //
                p3: "#FF7667", // button
                p4: "#EE5E4E", // frame of image
                s1: "#180404", //primary-link primary-text
                s2: "#6B7280", //secondary-text
                s3: "#9CA3AF", //secondary-link
                s4: "#343C48", //experience-title
                s5: "#6B7280", //experince-desc
                fb: "#FFFFFF", //form-bg tertiary-text
                ft: "#000000", //text
            }, {
                bg: "#020617", //background
                fg: "#111827", //foreground
                p1: "#FFBF00", //experience-title heading-text color-1
                p2: "#EAB308", //yellow-2
                p3: "#eec830", //yellow button
                p4: "#f4c138", //yellow frame of image
                s1: "#ededed", //primary-link primary-text
                s2: "#6B7280", //secondary-text
                s3: "#9CA3AF", //secondary-link
                s4: "#e6e6e6", //experience-title
                s5: "#7e7e7e", //experince-desc
                fb: "#1F2937", //form-bg tertiary-text
                ft: "#F3F4F6", //text
            }
        ]
        setColor(themelist[theme ? 1 : 0]);

    }, [theme]);


    return (
        <>
            {/* <Helmet>
                <title>About Me - Build Your Portfolio</title>
                <meta name="description" content="Create stunning portfolio websites with About Me. Easy to customize and SEO-friendly." />
                <meta property="og:title" content="About Me - Build Your Portfolio" />
                <meta property="og:description" content="Create stunning portfolio websites with About Me. Easy to customize and SEO-friendly." />
                <meta property="og:image" content="https://aboutfoliome.vercel.app/preview.jpg" />
                <meta property="og:url" content="https://aboutfoliome.vercel.app/" />
                <link rel="canonical" href="https://aboutfoliome.vercel.app/" />
            </Helmet>


            <Helmet>
                <title>{hero.title} - Portfolio on About Me</title>
                <meta name="description" content={`Explore ${hero.title}'s professional portfolio.`} />
                <meta property="og:title" content={`${hero.title} - Portfolio`} />
                <meta property="og:image" content={hero.img} />
            </Helmet> */}


            <div style={{ backgroundColor: color.bg }} className="App">
                <header style={{ backgroundColor: color.bg }} className="navigation-bar sticky z-10 top-0 left-0 w-full py-[18px]">
                    <div className="navigation flex justify-between w-4/5 mx-auto align-middle">
                        <h1 style={{ color: color.s1 }} className="text-3xl font-bold">
                            About<span style={{ color: color.p2 }}>Me.</span>
                        </h1>

                        <ul style={{ color: color.s3 }} className="links_list hidden md:flex space-x-3 items-center">
                            {links.map((link, index) => (

                                <li key={index} className={`${active === link.url ? "font-bold" : ""}`}>
                                    <a
                                        href={link.url}
                                        style={{ color: active === link.url ? color.s1 : color.s3 }}
                                        onMouseEnter={(e) => (e.target.style.color = color.s1)}
                                        onMouseLeave={(e) => (e.target.style.color = active === link.url ? color.s1 : color.s3)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* NavLinks For small screen */}
                        <div ref={drawer_ref} className="transition-transform ease-in-out delay-1000 pl-4 drawer hidden absolute -right-full top-0 flex-col bg-black h-screen text-white space-y-6 w-2/4">
                            <button onClick={toggle} className="w-fit self-end bg-white border p-2 m-3 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" viewBox="0 0 30 30">
                                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                                </svg>
                            </button>

                            <div className="links-drawer flex flex-col justify-evenly h-1/2 bg-sate-700 w-2/3 mx-auto">
                                {links.map((link, index) => (
                                    <a key={index} href={link.url} onClick={() => { setActive(link.url); }} className={`${active === link.url ? "font-bold border-b" : ""} menu`}>
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <button className="md:hidden rounded-md h-fit p-1 bg-gray-600" onClick={toggle}>
                            <svg style={{ fill: color.bg }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={20} viewBox="0 0 50 50">
                                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                            </svg>
                        </button>
                    </div>
                    <Tbutton isChecked={theme} setIsChecked={setTheme} />
                </header>

                <main>

                    <section id="hero" ref={(el) => (sectionsRef.current[1] = el)} style={{ backgroundColor: color.fg }} className="herosection md:px-auto lg:px-32 xl:px-36 py-20">
                        <div className="content flex mx-auto flex-col-reverse lg:flex-row">
                            <div className="text flex flex-col flex-wrap content-center lg:block lg:w-1/2 space-y-4">
                                <div style={{ color: color.p2 }} className="font-semibold w-fit sm:text-3xl xs:text-xl text-lg">
                                    Hi!!
                                </div>
                                <div className="space-y-8 lg:w-full w-3/4 mx-auto">
                                    <h1 style={{ color: color.s1 }} className="font-mono font-semibold tracking-tight xl:text-5xl lg:text-4xl md:text-5xl xs:text-4xl text-3xl">
                                        I'm <span style={{ color: color.p1 }}>{hero.title}</span>
                                    </h1>
                                    <p style={{ color: color.s2 }} className="sm:text-lg">{hero.desc}</p>
                                </div>
                                <button style={{ backgroundColor: color.p3 }} className="w-fit border-none rounded-[4px] sm:text-lg text-black sm:px-4 sm:py-2 px-2 py-1 font-semibold" onMouseEnter={(e) => (e.target.style.backgroundColor = color.p4)} onMouseLeave={(e) => (e.target.style.backgroundColor = color.p3)} onClick={() => { document.getElementById("contact").scrollIntoView({ behavior: 'smooth' }); }}>
                                    Contact Me
                                </button>
                            </div>

                            <div className="image w-full lg:w-1/2 justify-center flex p-4">
                                <div style={{ borderColor: color.p4 }} className="image-frame border-[12px] rounded-3xl size-[18rem] sm:size-[24rem] md:size-[26rem] lg:size-[21rem] xl:size-[28rem]">
                                    <img src={hero.img} alt="profile" className="rounded-3xl relative bottom-3 right-3 sm:bottom-5 sm:right-5 aspect-square" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="about" ref={(el) => (sectionsRef.current[2] = el)} className="aboutme md:px-auto lg:px-32 xl:px-36 py-20">
                        <div className="content flex mx-auto flex-col-reverse lg:flex-row">
                            <div className="image w-full lg:w-1/2 justify-center flex p-4">
                                <div style={{ borderColor: color.p4 }} className="image-frame border-[12px] rounded-3xl size-[18rem] sm:size-[24rem] md:size-[26rem] lg:size-[21rem] xl:size-[28rem]">
                                    <img src={about.img} alt="profile" className="rounded-3xl relative bottom-3 right-3 sm:bottom-5 sm:right-5 aspect-square" />
                                </div>
                            </div>

                            <div className="text flex flex-col content-center lg:block lg:w-1/2 space-y-8 px-6 lg:pl-4">
                                <h1 style={{ color: color.s1 }} className="font-mono font-semibold w-max tracking-tight md:text-5xl xs:text-4xl text-3xl">
                                    About <span style={{ color: color.p1 }}>Me</span>
                                </h1>
                                <p style={{ color: color.s2 }} className="sm:text-lg">{about.desc}</p>
                                <button style={{ backgroundColor: color.p3 }} className="w-fit border-none rounded-[4px] sm:text-lg text-black sm:px-4 sm:py-2 px-2 py-1 font-semibold" onMouseEnter={(e) => (e.target.style.backgroundColor = color.p4)} onMouseLeave={(e) => (e.target.style.backgroundColor = color.p3)} onClick={() => { document.getElementById("contact").scrollIntoView({ behavior: 'smooth' }); }}>
                                    Contact Me
                                </button>
                            </div>
                        </div>
                    </section>

                    <section id="service" ref={(el) => (sectionsRef.current[3] = el)} className="myservices md:px-auto lg:px-32 xl:px-36 py-20" style={{ backgroundColor: color.fg }}>
                        <div className="content mx-auto space-y-14">
                            <div className="text flex flex-col w-3/4 lg:w-3/5 content-center space-y-8 px-4">
                                <h1 className="pr-36 font-mono font-semibold w-max tracking-tight md:text-5xl xs:text-4xl text-3xl" style={{ color: color.s1 }}>
                                    My <span style={{ color: color.p1 }}>Services</span>
                                </h1>
                                <p className="sm:text-lg" style={{ color: color.s2 }}>{service.desc}</p>
                            </div>

                            <div className="service-list flex flex-wrap flex-col sm:flex-row gap-5 items-center p-4 justify-center">
                                {service.content?.length > 0 && service.content.map((ser, index) => (
                                    <div key={index} className="service flex flex-col gap-3 rounded-md size-64 p-5" style={{ backgroundColor: color.bg }}>
                                        <div className="svg w-9 h-9 mx-auto font-thin" style={{ color: color.p2 }}
                                            dangerouslySetInnerHTML={{ __html: ser.svg }} />
                                        <div className="title text-2xl text-center font-semibold" style={{ color: color.s1 }}>
                                            {ser.title}
                                        </div>
                                        <div className="desc text-center text-sm leading-5 overflow-y-auto custom-scroll" style={{ color: color.s2 }}>
                                            {ser.desc}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="experience" ref={(el) => (sectionsRef.current[4] = el)} className="experience md:px-auto lg:px-32 xl:px-36 py-20">
                        <div className="content mx-auto space-y-14" align="right">
                            <div className="text flex flex-col w-3/4 lg:w-3/5 space-y-8 px-4 items-end">
                                <h1 className="pl-auto font-mono font-semibold w-max tracking-tight md:text-5xl xs:text-4xl text-3xl" style={{ color: color.s1 }}>
                                    My <span style={{ color: color.p1 }}>Experience</span>
                                </h1>
                                <p className="sm:text-lg" style={{ color: color.s2 }}>{experience.desc}</p>
                            </div>

                            <div className={`custom-scroll h-[80vh] border-t-[.5px] border-t-gray-600 overflow-y-scroll`} align="left">
                                <ol className="timeline-container relative mx-10 border-dotted border-gray-500 border-s-4 rounded-bl-2xl space">
                                    {experience.content?.length > 0 && experience.content.map((experience, index) => (
                                        <li key={index} className="mb-10 ms-3 w-full">
                                            <div className="dots w-10 h-10 rounded-full mt-8 start-[-1.39rem] absolute"></div>

                                            <div style={{ backgroundColor: color.fg }} className="w-full py-[15px] pl-[25px] pr-4 rounded snap-start">
                                                <time className="text-sm font-normal leading-none" style={{ color: color.s4 }}>
                                                    {experience.time}
                                                </time>
                                                <h3 className="text-2xl tracking-wide font-semibold mt-3" style={{ color: color.p1 }}>
                                                    {experience.title}
                                                </h3>
                                                <h5 className="font-bold font-mono" style={{ color: color.s4 }}>
                                                    {experience.company}
                                                </h5>
                                                <p className="ml-2 text-base font-normal leading-tight mt-3" style={{ color: color.s5 }}>
                                                    {experience.desc}
                                                </p>
                                                {experience.link && (
                                                    <a href={experience.link} style={{ color: color.p1, border: `1px solid ${color.s1}` }} className="inline-flex mt-5 items-center px-4 py-2 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none hover:font-bold hover:brightness-200">
                                                        Learn more
                                                        <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                        </svg>
                                                    </a>

                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </section>

                    <section id="contact" ref={(el) => (sectionsRef.current[5] = el)} style={{ backgroundColor: color.fg }} className="contactme md:px-auto lg:px-32 xl:px-36 py-20">
                        <div className="content flex flex-col mx-auto space-y-14 items-center">
                            <div className="text w-3/4 lg:w-3/5 space-y-8 text-center">
                                <h1 className="font-sans font-semibold tracking-tight md:text-5xl xs:text-4xl text-3xl text-center" style={{ color: color.s1 }}>
                                    Contact <span style={{ color: color.p1 }}>Me</span>
                                </h1>
                                <p className="sm:text-lg" style={{ color: color.s2 }}>{contact.desc}</p>
                            </div>
                            <div className="form-info flex flex-col space-y-8 w-3/4 md:flex-row md:w-full justify-around md:p-5">
                                <div className="info font-medium space-y-3 tracking-wider sm:text-lg" style={{ color: color.s1 }}>
                                    {contact.add && <div className="address">
                                        <span style={{ color: color.p1 }}>Address - </span>{contact.add}
                                    </div>}
                                    {contact.phone && <div className="address">
                                        <span style={{ color: color.p1 }}>Phone - </span>{contact.phone}
                                    </div>}
                                    <div className="address">
                                        <span style={{ color: color.p1 }}>Email - </span>{contact.email}
                                    </div>
                                </div>
                                <form action="" className="flex flex-col space-y-4 md:w-1/2">
                                    <input type="text" id="name" placeholder="Name" className="p-2 rounded w-3/4" style={{ backgroundColor: color.fb, border: `1px solid ${color.s1}` }} />

                                    <textarea id="message" rows={4} cols={2} placeholder="Type a Message" className="p-2 rounded" style={{ backgroundColor: color.fb, border: `1px solid ${color.s1}` }} />

                                    <button className="font-medium p-2 rounded w-1/2 sm:w-1/3 xl:w-1/4" style={{ backgroundColor: color.p1, color: color.fb }}>
                                        Contact Me
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>

                </main>

                <footer className="flex flex-col items-center space-y-7 py-11">
                    <div className="flex flex-col items-center text space-y-3 w-min">
                        <h1 style={{ color: color.ft }} className="text-3xl sm:text-4xl font-semibold  tracking-wide w-max md:px-32 px-20">
                            AboutMe.
                        </h1>
                        <p style={{ color: color.s2 }} className="text-center leading-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aut
                            accusamus pariatur minima ea debitis velit hic, mollitia nobis id.
                        </p>
                    </div>
                    <div style={{ color: color.s1 }} className="links flex space-x-10 text-2xl sm:text-4xl items-center">
                        {about.linkedin && <a href={`https://linkedin.com/in/${about.linkedin}`} target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>}
                        {about.github && <a href={`https://github.com/${about.github}`} target="_blank" rel="noreferrer">
                            {/* <SiAboutdotme /> */}
                            <BsGithub />
                        </a>}
                        {about.instagram && <a href={`https://instagram.com/${about.instagram}`} target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>}
                    </div>
                </footer>
            </div></>
    );
}

export default Cort;