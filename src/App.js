import { useState } from "react";
import Cort from "./Cort";
import Editor from "./EditPage";
// import { HelmetProvider } from "react-helmet-async";
// import { Helmet } from "react-helmet-async";


function App() {
  const [page, setPage] = useState(true)
  const [obj, setObj] = useState({ hero: {}, about: {}, service: {}, experience: {}, contact: {} })

  return <>
    {/* <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "About Me",
          url: "https://aboutfoliome.vercel.app",
          description: "Create stunning portfolio websites with About Me.",
          author: {
            "@type": "Person",
            name: "Krishna Agarwal",
          },
        })}
      </script>
      <title>About Me - Build Your Portfolio</title>
      <meta name="description" content="Create stunning portfolio websites with About Me. Easy to customize and SEO-friendly." />
      <meta property="og:title" content="About Me - Build Your Portfolio" />
      <meta property="og:description" content="Create stunning portfolio websites with About Me. Easy to customize and SEO-friendly." />
      <meta property="og:image" content="https://aboutfoliome.vercel.app/preview.jpg" />
      <meta property="og:url" content="https://aboutfoliome.vercel.app/" />
      <link rel="canonical" href="https://aboutfoliome.vercel.app/" />
    </Helmet> */}

    <button className={`bg-white flex font-bold bottom-6 left-6 fixed rounded-full z-10 p-2 w-max text-lg border-2 border-yellow-800 shadow-slate-700 shadow-md space-x-1 hover:space-x-2 duration-1000 bg-[length:300%_auto] hover:bg-gradient-to-r from-[#70e1f5] from-0%  via-[#ffcd8b] via-60%  to-[#70e1f5] to-100% hover:bg-right-top`}
      onClick={() => {
        setPage(!page)
      }}
    >
      {page &&
        <span>Build Your Portfolio</span>} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-6 duration-500 ease-in-out ${!page && 'rotate-180'}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    </button>

    {page && <Cort />}
    {!page && <Editor obj={obj} setObj={setObj} />}

  </>
}

export default App;
