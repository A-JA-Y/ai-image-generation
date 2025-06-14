import "remixicon/fonts/remixicon.css";
export default function Home() {
  return (
    <>
      <nav className="w-full flex items-center justify-between dark:bg-zinc-800 bg-gray-200 text-black dark:text-white">
        <h1 className="sm:text-3xl text-xl font-thin font-sans py-4 px-3 ">
          Ai•Image•Generator
        </h1>
        <div className="text-2xl   border-l-[40px] border-b-[40px] border-t-[40px] border-r-[40px] border-l-transparent border-b-transparent border-black dark:border-r-white dark:border-t-white w-0 h-0">
          <a
            href="https://github.com/A-JA-Y/ai-image-generation"
            target="_blank"
          >
            <i className="ri-github-fill absolute translate-x-2 -translate-y-7 dark:text-black dark:bg-white text-white cursor-pointer "></i>
          </a>
        </div>
      </nav>
      
      <footer className="w-full flex items-center justify-center dark:bg-zinc-800 bg-gray-200 text-black dark:text-white">
        <p className="text-sm font-sans py-4 px-3">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/A-JA-Y"
            target="_blank"
          >
            A-JA-Y
          </a>
        </p>
      </footer>
    </>
  );
}
