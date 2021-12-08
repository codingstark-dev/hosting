import { useEffect, useState } from "react";

export const NavBar = () => {
  const [Nav, setNav] = useState(false);
  const [isShownHoverContent, setIsShownHoverContent] = useState(false);

  function navToggle() {
    const btn = document.getElementById("menuBtn");
    const nav = document.getElementById("menu");

    btn?.classList.toggle("open");
    nav?.classList.toggle("flex");
    nav?.classList.toggle("hidden");
  }
  useEffect(() => {
    const nav = document.getElementById("site-menu");
    const header = document.getElementById("top");
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 400) {
        // adjust this value based on site structure and header image height
        nav?.classList.add("nav-sticky");
        header?.classList.add("pt-scroll");
      } else {
        nav?.classList.remove("nav-sticky");
        header?.classList.remove("pt-scroll");
      }
    });
    return () => {};
  }, []);
  return (
    <header
      id="top"
      className="w-full flex flex-col  sm:relative bg-white pin-t pin-r pin-l max-w-7xl m-auto static"
    >
      <nav
        id="site-menu"
        className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white   border-teal-500"
      >
        <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
          <a href="#" className="no-underline py-1">
            {/* <h1 className="font-bold text-lg">
              Ambition<span className="text-[#f93d00]">Host</span>
            </h1> */}
            <img className="w-28 h-full rounded-lg" src="/logo.webp" alt="" />
          </a>
          <button
            id="menuBtn"
            className="hamburger block sm:hidden focus:outline-none"
            type="button"
            onClick={() => navToggle()}

            // onClick={navToggle()}
          >
            <span className="hamburger__top-bun"></span>
            <span className="hamburger__bottom-bun"></span>
          </button>
        </div>
        <div
          id="menu"
          className="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden"
        >
          {/* <a
            className="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2"
            href="#P3L"
            target="_blank"
          >
            About
          </a>
          <a
            className="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2"
            href="#P3L"
          >
            Features
          </a> */}

          <div className="dropdown inline-block relative">
            <button className="w-full text-gray-700 font-base py-2 px-4 rounded inline-flex items-center  leading-normal">
              <span className="mr-1">Domain</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <div className="dropdown-menu absolute hidden">
              {/* <li className=" bg-white border-solid  border-r flex items-center justify-center font-semibold h-32 m-0 p-0 no-underline hover:underline">
                  <a
                    href="https://www.scalahosting.com/cloud-servers.html"
                    className="drop-sub-navigation"
                  >
                    <div className="content">
                      <div className="p-y-7">
                        <img
                          className="nav-icon b-r-c"
                          src="https://www.scalahosting.com/asset/images/navigation/icons/Manage-vps.svg"
                          loading="lazy"
                          alt="Managed Cloud VPS"
                          width="50"
                          height="50"
                        />{" "}
                      </div>
                      <div className="title">Managed Cloud VPS</div>
                      <div className="price">From $9.95</div>
                    </div>
                  </a>
                </li> */}
              <ul className="flex flex-auto text-gray-700 pt-1 ">
                <li className="">
                  <a
                    className=" rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Domain Registration
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Domain Transfer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown inline-block relative">
            <button className="w-full text-gray-700 font-base py-2 px-4 rounded inline-flex items-center  leading-normal">
              <span className="mr-1">Hosting</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <div className="dropdown-menu absolute hidden">
              {/* <li className=" bg-white border-solid  border-r flex items-center justify-center font-semibold h-32 m-0 p-0 no-underline hover:underline">
                  <a
                    href="https://www.scalahosting.com/cloud-servers.html"
                    className="drop-sub-navigation"
                  >
                    <div className="content">
                      <div className="p-y-7">
                        <img
                          className="nav-icon b-r-c"
                          src="https://www.scalahosting.com/asset/images/navigation/icons/Manage-vps.svg"
                          loading="lazy"
                          alt="Managed Cloud VPS"
                          width="50"
                          height="50"
                        />{" "}
                      </div>
                      <div className="title">Managed Cloud VPS</div>
                      <div className="price">From $9.95</div>
                    </div>
                  </a>
                </li> */}
              <ul className="flex flex-auto text-gray-700 pt-1 ">
                <li className="">
                  <a
                    className=" rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Shared Hosting
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Reseller Hosting
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown inline-block relative">
            <button className="w-36 text-gray-700 font-base py-2 px-4 rounded inline-flex items-center  leading-normal">
              <span className="mr-1">Cloud Server</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <div className="dropdown-menu absolute hidden">
              {/* <li className=" bg-white border-solid  border-r flex items-center justify-center font-semibold h-32 m-0 p-0 no-underline hover:underline">
                  <a
                    href="https://www.scalahosting.com/cloud-servers.html"
                    className="drop-sub-navigation"
                  >
                    <div className="content">
                      <div className="p-y-7">
                        <img
                          className="nav-icon b-r-c"
                          src="https://www.scalahosting.com/asset/images/navigation/icons/Manage-vps.svg"
                          loading="lazy"
                          alt="Managed Cloud VPS"
                          width="50"
                          height="50"
                        />{" "}
                      </div>
                      <div className="title">Managed Cloud VPS</div>
                      <div className="price">From $9.95</div>
                    </div>
                  </a>
                </li> */}
              <ul className="flex flex-auto text-gray-700 pt-1 ">
                <li className="">
                  <a
                    className=" rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Shared Hosting
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Reseller Hosting
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Ambition
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b w-36 bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    DO & Linode & Reseller
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button className="flex items-center justify-center w-1/5 p-3 bg-indigo-500 rounded-lg m-2 ">
            <p className="text-sm leading-normal text-white">SignUp</p>
          </button>
          <div className="flex items-center justify-center w-1/5 p-3 bg-indigo-500 rounded-lg">
            <p className="text-sm leading-normal text-white">Login</p>
          </div>
        </div>
      </nav>
    </header>
  );
};
