// import { UserCircleIcon } from "@heroicons/react/16/solid"
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";
import axios from "axios"
import { debounce } from "lodash";

function Personal({ detail, setDetail, className }) {
    const [loading, setloading] = useState(false)

    const checkURL = useMemo(() =>
        debounce(async (value) => {
            console.log(document.getElementById('url'))
            try {
                setloading(true)
                await axios.get(`https://about-me-backend-k29v.onrender.com/api/data/${value}`);
                document.getElementById('url')?.setCustomValidity('URL already used');
                setDetail((prevDetail) => ({ ...prevDetail, slug: false }));

            } catch (err) {
                if (err.response && err.response.status === 404) {
                    document.getElementById('url')?.setCustomValidity('');
                    setDetail((prevDetail) => ({ ...prevDetail, slug: value.toString().toLowerCase() }));
                } else {
                    document.getElementById('url')?.setCustomValidity('An error occurred, please try again later');
                }
            } finally {
                setloading(false)
                document.getElementById('url')?.reportValidity();
            }
        }, 1000)
        , []);

    return <>
        <form id="personelform" className={`m-7 ${className}`}>
            <div className="border-b border-gray-900/10 pb-12 flex flex-col ">

                <div className="text">
                    <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Please provide accurate and professional information to ensure the best representation of your portfolio."
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">

                    <div className="url sm:col-span-5">
                        <label htmlFor="url" className="block text-sm font-medium leading-6 text-gray-900">
                            Portfolio URL
                        </label>
                        <div className="mt-2">
                            <div className={`flex bg-white rounded-md shadow-sm ring-inset ring-gray-300 focus-within:ring-2 ${detail.slug === false && 'focus-within:ring-red-800 ring-red-800'} sm:max-w-md py-2 px-1 ${detail.slug && 'ring-green-900 focus-within:ring-green-900'} ring-2`}>
                                <span className="flex select-none items-center pl-3 tracking-wider font-medium text-gray-500 sm:text-sm">aboutme.com/</span>
                                <input type="text"
                                    name="url"
                                    onInput={(e) => checkURL(e.target.value)}
                                    id="url"
                                    defaultValue={detail.slug || ""}
                                    className="text-sm ml-0.5 w-full focus-visible:outline-none"
                                    required
                                />

                                {loading && <div role="status" className="mx-4">
                                    <svg aria-hidden="true" class="inline w-3 h-3 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                </div>}

                            </div>
                        </div>
                    </div>

                    <div className="photos col-span-5">
                        <span className="block text-sm font-medium leading-6 text-gray-900">
                            Photos Link
                            <p className="mt-3 text-sm text-gray-600">(Use an image of minimum 450px width and height for best display)</p>
                        </span>

                        <div className="mt-2 flex items-center gap-x-3 col-span-4">
                            <label htmlFor="p-1"><FaRegUserCircle aria-hidden="true" className="col-span-1 h-12 w-12 text-gray-300" /></label>
                            <div className="bg-white flex flex-grow rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input id="p-1"
                                    onChange={(e) => setDetail(
                                        {
                                            ...detail,
                                            hero: { ...detail.hero, img: e.target.value }
                                        }
                                    )
                                    }
                                    defaultValue={detail.hero.img || ""}
                                    name="p-1" type="text" placeholder="Photo-1 (URL)"
                                    className="px-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus-visible:outline-none" />
                            </div>
                        </div>

                        <div className="mt-2 flex items-center gap-x-3 col-span-4">
                            <label htmlFor="p-2"><FaRegUserCircle aria-hidden="true" className="col-span-1 h-12 w-12 text-gray-300" /></label>
                            <div className="bg-white flex flex-grow rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input id="p-2"
                                    defaultValue={detail.about.img || ""}
                                    onChange={(e) => setDetail(
                                        {
                                            ...detail,
                                            about: { ...detail.about, img: e.target.value }
                                        }
                                    )}
                                    name="p-2" type="text" placeholder="Photo-2 (URL)"
                                    className="px-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus-visible:outline-none" />
                            </div>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-gray-600">Upload photo on Google Drive (or any other platform) and paste there links here.</p>
                    </div>

                    <div className="name col-span-4">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Name*
                        </label>
                        <div className="mt-2">
                            <div className="bg-white flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    defaultValue={detail.hero.title || ""}
                                    onChange={(e) => setDetail(
                                        {
                                            ...detail,
                                            hero: { ...detail.hero, title: e.target.value }
                                        }
                                    )}
                                    placeholder="John Doe (what else you except Mr. Bean)"
                                    className="px-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus-visible:outline-none"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="intro col-span-full">
                        <label htmlFor="intro" className="block text-sm font-medium leading-6 text-gray-900">
                            Introduction*
                        </label>
                        <div className="mt-2">
                            <textarea id="intro"
                                name="intro"
                                defaultValue={detail.hero.desc || ""}
                                onChange={(e) => setDetail(
                                    {
                                        ...detail,
                                        hero: { ...detail.hero, desc: e.target.value }
                                    }
                                )}
                                rows={4}
                                placeholder="Try not to brag for more than 75-100 words."
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
                                required />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">Write a brief introduction of yours.</p>
                    </div>

                    <div className="about col-span-full">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                            About*
                        </label>
                        <div className="mt-2">
                            <textarea id="about"
                                onChange={(e) => setDetail(
                                    {
                                        ...detail,
                                        about: { ...detail.about, desc: e.target.value }
                                    }
                                )}
                                defaultValue={detail.about.desc || ""}

                                name="about"
                                placeholder="e.g.:'Oh, where do I even start? I'm a master of all trades (or at least Google search), with a remarkable ability to press buttons and make things happen.'
                         P.S.: If you're here for some next-level inspiration, well... good luck with that!"
                                rows={5}
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
                            />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                    </div>

                </div>


                <div className="text mt-10">
                    <h2 className="text-base font-bold leading-7 text-gray-900">Contact Information</h2>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">

                    <div className="address col-span-full">
                        <label htmlFor="address" className="align-top text-sm font-medium leading-6 text-gray-900">
                            Address
                        </label>
                        <div className="mt-2">
                            <div className="bg-white flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <textarea
                                    id="address"
                                    name="address"
                                    type="text"
                                    defaultValue={detail.contact.add || ""}
                                    onChange={(e) => {
                                        setDetail({
                                            ...detail,
                                            contact: { ...detail.contact, add: e.target.value }
                                        })
                                    }}
                                    placeholder="Anywhere except here"
                                    className="px-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus-visible:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="phone col-span-4">
                        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                            Phone
                        </label>
                        <div className="mt-2">
                            <div className="bg-white flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    defaultValue={detail.contact.phone || ""}
                                    onChange={(e) => {
                                        setDetail({
                                            ...detail,
                                            contact: { ...detail.contact, phone: e.target.value }
                                        })
                                    }}
                                    placeholder="+91-725XXXX714"
                                    className="px-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus-visible:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="email col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email*
                        </label>
                        <div className="mt-2">
                            <div className="bg-white flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="justcall@me.com"
                                    defaultValue={detail.contact.email || ""}
                                    onChange={(e) => {
                                        setDetail({
                                            ...detail,
                                            contact: { ...detail.contact, email: e.target.value }
                                        })
                                    }}
                                    className="px-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus-visible:outline-none"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                </div>


                <div className="text mt-10">
                    <h2 className="text-base font-bold leading-7 text-gray-900">Social Information</h2>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">

                    <div className="linkedin col-span-5">
                        <label htmlFor="linkedin" className="block text-sm font-medium leading-6 text-gray-900">
                            LinkedIn URL
                        </label>
                        <div className="mt-2">
                            <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md py-2 px-1">
                                <label htmlFor="linkedin" className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">https://linkedin.com/in/</label>
                                <input
                                    type="text"
                                    name="linkedin"
                                    id="linkedin"
                                    defaultValue={detail.about.linkedin || ""}
                                    placeholder="krishna-agarwal1611"
                                    onChange={(e) => {
                                        setDetail({
                                            ...detail,
                                            about: { ...detail.about, linkedin: e.target.value }
                                        })
                                    }}
                                    className="text-sm ml-0.5 w-full focus-visible:outline-none" />
                            </div>
                        </div>
                    </div>


                    <div className="ig col-span-5">
                        <label htmlFor="ig" className="block text-sm font-medium leading-6 text-gray-900">
                            Instagram URL
                        </label>
                        <div className="mt-2">
                            <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md py-2 px-1">
                                <label htmlFor="ig" className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">https://Instagram.com/</label>
                                <input
                                    type="text"
                                    name="ig"
                                    id="ig"
                                    placeholder="don't have one"
                                    defaultValue={detail.about.instagram || ""}
                                    onChange={(e) => {
                                        setDetail({
                                            ...detail,
                                            about: { ...detail.about, instagram: e.target.value }
                                        })
                                    }}
                                    className="text-sm ml-0.5 w-full focus-visible:outline-none" />
                            </div>
                        </div>
                    </div>


                    <div className="github col-span-5">
                        <label htmlFor="github" className="block text-sm font-medium leading-6 text-gray-900">
                            Github URL
                        </label>
                        <div className="mt-2">
                            <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md py-2 px-1">
                                <label htmlFor="github" className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">https://github.com/</label>
                                <input
                                    type="text"
                                    name="github"
                                    id="github"
                                    defaultValue={detail.about.github || ""}
                                    placeholder="krishnaAg16"
                                    onChange={(e) => {
                                        setDetail({
                                            ...detail,
                                            about: { ...detail.about, github: e.target.value }
                                        })
                                    }}
                                    className="text-sm ml-0.5 w-full focus-visible:outline-none" />
                            </div>
                        </div>
                    </div>


                    <div className="resume col-span-5">
                        <label htmlFor="resume" className="block text-sm font-medium leading-6 text-gray-900">
                            Resume Direct Download URL
                        </label>
                        <div className="mt-2">
                            <div className="bg-white flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    id="resume"
                                    name="resume"
                                    type="text"
                                    defaultValue={detail.about.resume || ""}
                                    onChange={(e) => {
                                        setDetail({
                                            ...detail,
                                            about: { ...detail.about, resume: e.target.value }
                                        })
                                    }}
                                    placeholder="https://drive.google.com/uc?expor"
                                    className="px-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus-visible:outline-none"
                                />
                            </div>
                        </div>
                        <p className="mt-1 leading-6 text-gray-600">
                            You can create a direct download link from <a className="text-blue-900 font-medium" href="https://sites.google.com/site/gdocs2direct/" target="_blank" rel="noreferrer">here</a>.
                        </p>
                    </div>


                </div>


            </div >
        </form >
    </>
}

function Services({ detail, setDetail, className }) {
    const [services, setServices] = useState(detail.service.content || []);
    const [newService, setNewService] = useState({ svg: '', title: '', desc: '' });


    const addExperience = (e) => {
        e.preventDefault();
        if (newService.title && newService.desc) {
            setServices(prev => ([...prev, newService]));
            setNewService({ title: '', desc: '' }); // Clear input fields
            e.target.reset();
        }
    };

    const removeExperience = (index) => {
        const updatedExperiences = services.filter((_, i) => i !== index);
        setServices(updatedExperiences)
        // console.log(services)
    };

    useEffect(() => {
        setDetail({
            ...detail,
            service: {
                desc: detail.service.desc,
                content: services
            }
        })

    }, [services])


    return <div className={`m-7 ${className}`}>
        <div className="border-b border-gray-900/10 pb-12 flex flex-col ">


            <div className="text">
                <h2 className="text-xl font-semibold text-gray-900">Services Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    This information will be displayed publicly so be careful what you share.
                </p>
            </div>

            <div className="mt-5 desc col-span-full border-b border-gray-900/10 pb-12">
                <label htmlFor="desc" className="block text-sm font-medium leading-6 text-gray-900">
                    Description
                </label>
                <div className="mt-2">
                    <textarea id="desc-ser" name="desc" rows={4} placeholder="Like I don't know that you are going to use ChatGPT."
                        defaultValue={detail.service.desc ? detail.service.desc : ""}
                        onChange={(e) => {
                            setDetail({
                                ...detail,
                                service: {
                                    ...detail.service,
                                    desc: e.target.value ? e.target.value : detail.service.desc
                                }
                            })
                        }}
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus-visible:outline-none" />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a brief description of services you provide.</p>
            </div>

            <div className="flex gap-2 flex-wrap justify-evenly">
                {services.length > 0 ?
                    (
                        services.map((service, index) => (
                            <div key={index} className="flex flex-col gap-2 rounded-md size-52 p-1 border border-black">
                                <div className="svg rounded-full bg-white p-0.5 mx-auto font-thin w-9 h-9"
                                    dangerouslySetInnerHTML={{ __html: service.svg }}
                                />
                                <div className="title text-xl text-center font-semibold">
                                    {service.title}
                                </div>
                                <div className="desc text-center text-sm leading-5 overflow-auto">
                                    {service.desc}
                                </div>
                                <button onClick={() => removeExperience(index)} className="border border-black rounded bg-red-500 mt-auto mx-auto w-1/2">
                                    Remove
                                </button>
                            </div>
                        ))
                    )
                    :
                    (
                        <div className="flex flex-col gap-2 rounded-md size-52 p-1 border border-black opacity-80">
                            <div className="svg rounded-full bg-white p-0.5 mx-auto font-thin w-9 h-9">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>


                            </div>
                            <div className="title text-xl text-center font-semibold">
                                Freelancer
                            </div>
                            <div className="desc text-center text-sm leading-5 overflow-auto">
                                Lorem ipsum dolor sit upiditate minima officia voluptate, repellat mollitia et corrupti? Lorem ielit. Fugit molestias aspernatur obcaecati culiti?
                            </div>
                            <button className="border border-black rounded bg-red-500 mt-auto mx-auto w-1/2">
                                Remove
                            </button>
                        </div>

                    )
                }
            </div>

            <form onSubmit={addExperience} className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">

                <div className="svg col-span-full">
                    <label htmlFor="svg" className="block text-sm font-medium leading-6 text-gray-900">
                        Service SVG Icon (JSX)
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="svg"
                            name="svg"
                            rows={3}
                            placeholder='e.g. <svg>...........</svg>'
                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
                            defaultValue={''}
                            onInput={(e) => setNewService({ ...newService, svg: e.target.value || 0 })} />
                    </div>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        You can copy jsx of svg icon from <a href="http://heroicons.com" className="text-blue-800 font-semibold" target="_blank" rel="noreferrer">Heroicons(follow here)</a> or any other svg provider
                    </p>
                </div>

                <div className="title col-span-3">
                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                        Service Title*
                    </label>
                    <div className="mt-2">
                        <div className="bg-white flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                id="title"
                                name="title"
                                type="text"
                                autoComplete="title"
                                placeholder="e.g. Web Development, SEO Marketing"
                                className="px-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus-visible:outline-none"
                                onInput={(e) => setNewService({ ...newService, title: e.target.value })}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="aboutexp col-span-full">
                    <label htmlFor="aboutexp" className="block text-sm font-medium leading-6 text-gray-900">
                        Service Description*
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="aboutexp"
                            name="aboutexp"
                            placeholder="e.g. ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, neque.''
                            What I am not going to type long description everytime. Gim'me a break."
                            rows={5}
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
                            defaultValue={''}
                            onInput={(e) => setNewService({ ...newService, desc: e.target.value })}
                            required />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                </div>

                <button type="submit" className="border rounded-3xl bg-blue-300 py-1 hover:shadow-lg">Add</button>
            </form>

        </div>
    </div >
}

function Experiences({ detail, setDetail, className }) {
    const [experiences, setExperiences] = useState(detail.experience.content || []);
    const [newExperience, setNewExperience] = useState({ title: '', desc: '' });
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const addExperience = (e) => {
        e.preventDefault();
        const sd = new Date(newExperience.start);

        const ed = newExperience.end ? new Date(newExperience.end) : null;

        const time = `${months[sd.getMonth()]} ${sd.getFullYear().toString().slice(-2)} - ${ed ? `${months[ed.getMonth()]} ${ed.getFullYear().toString().slice(-2)}` : "Present"}`;

        const updatedExperience = { ...newExperience, time, };

        delete updatedExperience.start;
        delete updatedExperience.end;

        setExperiences([...experiences, updatedExperience]);
        setNewExperience({ title: '', desc: '' });
        e.target.reset();
    }

    const removeExperience = (index) => {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperiences);
    };


    useEffect(() => {
        setDetail({
            ...detail,
            experience: {
                desc: detail.service.desc,
                content: experiences
            }
        })

    }, [experiences])


    return <div className={`m-7 ${className}`}>
        <div className="border-b border-gray-900/10 pb-12 flex flex-col ">

            <div className="text">
                <h2 className="text-xl font-semibold text-gray-900">Experience Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    This information will be displayed publicly so be careful what you share.
                </p>
            </div>

            <div className="mt-5 desc col-span-full border-b border-gray-900/10 pb-12">
                <label htmlFor="desc" className="block text-sm font-medium leading-6 text-gray-900">
                    Description
                </label>
                <div className="mt-2">
                    <textarea id="desc-ser" name="desc" rows={4} placeholder="Like I don't know that you are going to use ChatGPT."
                        defaultValue={detail.experience.desc ? detail.experience.desc : ""}
                        onChange={(e) => {
                            setDetail({
                                ...detail,
                                experience: {
                                    ...detail.experience,
                                    desc: e.target.value ? e.target.value : detail.experience.desc
                                }
                            })
                        }}
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus-visible:outline-none" />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a brief description of your experience.</p>
            </div>

            <div className="flex gap-2 flex-wrap justify-evenly">
                {experiences.length > 0 ? (
                    experiences.map((experience, index) => (
                        <div key={index} className="px-2 rounded flex flex-col border border-black p-1 size-48">
                            <time className="text-sm font-normal leading-none">
                                {experience.time}
                            </time>
                            <h3 className="text-lg font-semibold">
                                {experience.title}
                            </h3>
                            <h5 className="font-mono" >
                                {experience.company}
                            </h5>
                            <p className="text-sm font-normal text-gray-700 leading-tight overflow-auto">
                                {experience.desc}
                            </p>
                            {experience.link && (
                                <a href={experience.link} className="self-end inline-flex my-1 text-sm font-medium text-blue-900 w-max" target="_blank" rel="noreferrer">
                                    Learn more
                                    <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>

                            )}

                            <button className="mt-auto mx-auto border px-2 bg-red-500 border-black rounded w-1/2" onClick={() => removeExperience(index)}>Remove</button>
                        </div>
                    ))
                ) : (
                    <div className="px-2 rounded flex flex-col border border-black p-1 size-48 opacity-80">
                        <time className="text-sm font-normal leading-none">
                            JAN 23 - MAR 24
                        </time>
                        <h3 className="text-lg font-semibold">
                            SDE-2
                        </h3>
                        <h5 className="font-mono" >
                            Error-404
                        </h5>
                        <p className="text-sm text-gray-700 font-normal leading-tight overflow-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore quibusdam ipsam esse praesentium laborum voluptas inventore totam quasi quam!
                        </p>

                        <a href="example.com" className="self-end inline-flex my-1 text-sm font-medium text-blue-900 w-max">
                            Learn more
                        </a>
                        <button className="mt-auto mx-auto border px-2 bg-red-500 border-black rounded w-1/2">Remove</button>
                    </div>

                )}
            </div>

            <form onSubmit={addExperience} className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">

                <div className="date col-span-full flex items-center">
                    <label htmlFor="sd" className="text-sm font-medium text-gray-900 mx-2">
                        Start *
                    </label>
                    <div className="mx-2 bg-white flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input id="sd" name="sd" type="month" className="px-2 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus-visible:outline-none"
                            onInput={(e) => setNewExperience({ ...newExperience, start: e.target.value })} required />
                    </div>

                    <label htmlFor="ed" className="ml-auto text-sm font-medium  text-gray-900 mx-2">
                        End
                    </label>
                    <div className="mx-2 bg-white flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input id="ed" name="ed" type="month" className="px-2 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus-visible:outline-none"
                            onInput={(e) => {
                                const endDate = e.target.value;
                                if (new Date(endDate) >= new Date(newExperience.start)) {
                                    setNewExperience({ ...newExperience, end: endDate });
                                } else {
                                    alert("End date must be after the start date");
                                    e.target.value = "";
                                }
                            }
                            } />

                    </div>
                </div>

                <div className="position col-span-3">
                    <label htmlFor="pos" className="block text-sm font-medium leading-6 text-gray-900">
                        Job Position*
                    </label>
                    <div className="mt-2">
                        <div className="bg-white flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                id="pos"
                                name="pos"
                                type="text"
                                placeholder="e.g. Intern, SDE.."
                                className="px-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus-visible:outline-none"
                                onInput={(e) => setNewExperience({ ...newExperience, title: e.target.value })}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="org col-span-3">
                    <label htmlFor="org" className="block text-sm font-medium leading-6 text-gray-900">
                        Company/ Organization*
                    </label>
                    <div className="mt-2">
                        <div className="bg-white flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                id="org"
                                name="org"
                                type="text"
                                placeholder="Error 404"
                                className="px-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus-visible:outline-none"
                                onInput={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                                required
                            />
                        </div>
                    </div>
                </div>


                <div className="esp col-span-full">
                    <label htmlFor="esp" className="block text-sm font-medium leading-6 text-gray-900">
                        Job Experience*
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="esp"
                            name="esp"
                            placeholder="e.g. ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, neque.''
                            What I am not going to type long description this time also. Gim'me a break again."
                            rows={5}
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
                            defaultValue={''}
                            onInput={(e) => setNewExperience({ ...newExperience, desc: e.target.value })}
                            required />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                </div>

                <div className="link col-span-full">
                    <label htmlFor="link" className="block text-sm font-medium leading-6 text-gray-900">
                        Any External Link
                    </label>
                    <div className="mt-2">
                        <div className="bg-white flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                id="link"
                                name="link"
                                type="text"
                                placeholder="Link to any certificate, or any other document"
                                className="px-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus-visible:outline-none"
                                onInput={(e) => setNewExperience({ ...newExperience, link: e.target.value })}
                            />
                        </div>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Add link of any platform for e.g, social media post, any crtificate or anything giving more information about your work.
                    </p>
                </div>

                <button type="submit" className="border rounded-3xl bg-blue-300 py-1 hover:shadow-lg col-start-5 col-span-2">Add</button>
            </form>



        </div>
    </div >
}

export { Personal, Services, Experiences }