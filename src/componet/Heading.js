
const Heading = ({ title, highlight }) => {
  return (<h1 className="text-[#ededed] font-mono font-semibold w-max tracking-tight xl:text-5xl lg:text-4xl md:text-5xl xs:text-4xl text-3xl">
    {title}
    <span className="text-[#FFBF00]"> {highlight}</span>
  </h1>);
};

const Para = ({ children }) => {
  return (<div className="text-[#6B7280] sm:text-lg ">
    {children}
  </div>);
};

const Box = ({ Heading, Para }) => {
  return (<div className="space-y-8 w-min">
    {Heading}
    {Para}
  </div>)
}

export { Heading, Para };
export default Box;


<>


  <div className="content flex mx-auto flex-col-reverse lg:flex-row">
    <div className="text flex flex-col flex-wrap content-center lg:block lg:w-1/2 space-y-4">
      <div className="font-semibold text-[#EAB308] w-fit sm:text-3xl xs:text-xl text-lg">
        Hi!!
      </div>
      <div className="space-y-8 w-min">
        <h1 className="text-[#ededed] font-mono font-semibold w-max tracking-tight xl:text-5xl lg:text-4xl md:text-5xl xs:text-4xl text-3xl">
          I m <span className="text-[#FFBF00]">Krishna</span>
        </h1>
        <div className="text-[#6B7280] sm:text-lg ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          fugiat ea, aspernatur sed beatae exercitationem fugit natus ut
          consequatur, blanditiis doloribus hic ullam.
        </div>
      </div>
      <button className="bg-[#eec830] w-fit border-none rounded-[4px] sm:text-lg text-black sm:px-4 sm:py-2 px-2 py-1 font-semibold hover:bg-[#ceb655]">
        Contact Us
      </button>
    </div>
  </div>

  <div className="content flex mx-auto flex-col-reverse lg:flex-row">
    <div className="text flex flex-col content-center lg:block lg:w-1/2 space-y-8 px-6 lg:pl-4">
      <h1 className="text-[#ededed] font-mono font-semibold w-max tracking-tight md:text-5xl xs:text-4xl text-3xl">
        About <span className="text-[#FFBF00]">Me</span>
      </h1>
      <p className="text-[#6B7280] sm:text-lg ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        fugiat ea, aspernatur sed beatae exercitationem fugit natus ut
        consequatur, blanditiis doloribus hic ullam.
      </p>
      <button className="bg-[#eec830] w-fit border-none rounded-[4px] sm:text-lg text-black sm:px-4 sm:py-2 px-2 py-1 font-semibold hover:bg-[#ceb655]">
        Contact Us
      </button>
    </div>
  </div>

  <div className="content mx-auto space-y-14" align="right">
    <div className="text flex flex-col w-3/4 lg:w-3/5 space-y-8 px-4 items-end">
      <h1 className="pl-auto text-[#ededed] font-mono font-semibold w-max tracking-tight md:text-5xl xs:text-4xl text-3xl">
        My <span className="text-[#FFBF00]">Experience</span>
      </h1>
      <p className="text-[#6B7280] sm:text-lg ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        fugiat ea, aspernatur sed beatae exercitationem fugit natus ut
        consequatur, blanditiis doloribus hic ullam.
      </p>
    </div>
  </div>

  <div className="content mx-auto space-y-14">
    <div className="text flex flex-col w-3/4 lg:w-3/5 content-center space-y-8 px-4">
      <h1 className="text-[#ededed] pr-36 font-mono font-semibold w-max tracking-tight md:text-5xl xs:text-4xl text-3xl">
        My <span className="text-[#FFBF00]">Services</span>
      </h1>
      <p className="text-[#6B7280] sm:text-lg ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        fugiat ea, aspernatur sed beatae exercitationem fugit natus ut
        consequatur, blanditiis doloribus hic ullam.
      </p>
    </div>
  </div>

  <div className="content flex flex-col mx-auto space-y-14">
    <div className="text w-3/4 lg:w-3/5 space-y-8 text-center">
      <h1 className="text-[#ededed] mx-auto font-sans font-semibold tracking-tight md:text-5xl xs:text-4xl text-3xl text-center">
        Contact <span className="text-[#FFBF00]">Me</span>
      </h1>
      <p className="text-[#6B7280] sm:text-lg ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        fugiat ea, aspernatur sed beatae exercitationem fugit natus ut
        consequatur, blanditiis doloribus hic ullam.
      </p>
    </div>
  </div>


</>