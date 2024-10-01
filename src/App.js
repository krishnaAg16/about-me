import { useState } from "react";
import Cort from "./Cort";
import Editor from "./EditPage";

function App() {
  const [preview, setpreview] = useState(false)
  const [page, setPage] = useState(true)
  const [obj, setObj] = useState({ hero: {}, about: {}, service: {}, experience: {}, contact: {} })

  return <>

    <button className={`bg-gray-300 ${page ? "text-yellow-400 opacity-90" : "text-black"} bottom-4 left-4 fixed rounded-full z-20 p-2 `}
      onClick={() => {
        setPage(!page)
      }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
      </svg>

    </button>

    {page && <Cort />}

    {!page && <>
      <button className="bg-blue-500 text-white shadow-xl rounded-lg fixed right-20 top-[19px] z-20 px-2 py-1 text-lg hidden md:block"
        onClick={() => {
          setpreview(!preview)
        }}>
        {!preview ? "Preview" : "Edit"}
      </button>
      {preview && <Cort obj={obj} />}
      {!preview && <Editor obj={obj} setObj={setObj} />}
    </>}

  </>
}

export default App;
