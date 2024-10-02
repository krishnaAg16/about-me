import { useState } from "react";
import Cort from "./Cort";
import Editor from "./EditPage";

function App() {
  const [page, setPage] = useState(true)
  const [obj, setObj] = useState({ hero: {}, about: {}, service: {}, experience: {}, contact: {} })

  return <>

    <button className={`bg-white flex font-bold bottom-6 left-6 fixed rounded-full z-10 p-2 w-max text-lg border-2 border-yellow-800 shadow-slate-700 shadow-md space-x-1 hover:space-x-2`}
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
