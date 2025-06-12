import "remixicon/fonts/remixicon.css";
export default function Home() {
  return (
    <>
      <nav className="w-full flex items-center justify-between bg-gray-200 dark:bg-zinc-800 text-black dark:text-white">
        <h1 className="sm:text-3xl text-xl font-thin font-sans py-4 px-3">
          Ai•Image•Generator
        </h1>
        <div className="text-2xl  text-black  dark:text-white  border-l-[40px] border-b-[40px] border-t-[40px] border-r-[40px] border-l-transparent border-b-transparent dark:border-r-black dark:border-t-black w-0 h-0">
          
            <a href="https://github.com/A-JA-Y/ai-image-generation" target="_blank"><i className="ri-github-fill absolute translate-x-2 -translate-y-7 cursor-pointer "></i></a>
          
        </div>
      </nav>
    </>
  );
}
