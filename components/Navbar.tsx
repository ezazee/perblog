"use client"
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header mx-auto w-full flex justify-center py-2 z-50 relative dark:bg-primary-dark-0">
      <div className="container flex justify-between items-center relative px-4">
        <h1>
          <a href="/">
            <Image
              src="/imgs/template/logo.svg"
              alt="logo"
              width={115}
              height={115}
              className="flex-shrink-0 relative dark:hidden"
            />
            <Image
              src="/imgs/template/logo-white.svg"
              alt="logo"
              width={115}
              height={115}
              className="flex-shrink-0 relative hidden dark:inline-block"
            />
          </a>
        </h1>
        <ul className="xl:flex hidden">
          <li className="relative group">
            <a className="menu-item" href="index.html">
              Home
            </a>
            <ul className="z-100 absolute px-6 py-4 rounded-md left-4 bg-neutral-0 dark:bg-neutral-dark-0 min-w-48 shadow-sm mt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500">
              <li>
                <a className="menu-sub-item" href="index.html">
                  Home page 01
                </a>
              </li>
              <li>
                <a className="menu-sub-item" href="index-2.html">
                  Home page 02
                </a>
              </li>
              <li>
                <a className="menu-sub-item" href="index-3.html">
                  Home page 03
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <a className="menu-item" href="#">
              Blog
            </a>
            <ul className="z-100 absolute px-6 py-4 rounded-md left-4 bg-neutral-0 dark:bg-neutral-dark-0 min-w-48 shadow-sm mt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500">
              <li>
                <a className="menu-sub-item" href="category.html">
                  Category 01
                </a>
              </li>
              <li>
                <a className="menu-sub-item" href="category-2.html">
                  Category 02
                </a>
              </li>
              <li>
                <a className="menu-sub-item" href="category-3.html">
                  Category 03
                </a>
              </li>
              <li>
                <a className="menu-sub-item" href="category-4.html">
                  Category 04
                </a>
              </li>
              <li>
                <a className="menu-sub-item" href="single.html">
                  Single 01
                </a>
              </li>
              <li>
                <a className="menu-sub-item" href="single-2.html">
                  Single 02
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <a className="menu-item" href="#">
              Pages
            </a>
            <ul className="z-100 absolute px-6 py-4 rounded-md left-4 bg-neutral-0 dark:bg-neutral-dark-0 min-w-48 shadow-sm mt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500">
              <li>
                <a className="menu-sub-item" href="page-about.html">
                  About me
                </a>
              </li>
              <li>
                <a className="menu-sub-item" href="page-author.html">
                  Author
                </a>
              </li>
              <li>
                <a className="menu-sub-item" href="page-search.html">
                  Search Results
                </a>
              </li>
              <li>
                <a className="menu-sub-item" href="page-contact.html">
                  Contact
                </a>
              </li>
              <li>
                <a className="menu-sub-item" href="page-login.html">
                  Login
                </a>
              </li>
              <li>
                <a className="menu-sub-item" href="page-register.html">
                  Register
                </a>
              </li>
              <li>
                <a className="menu-sub-item" href="page-forgot-password.html">
                  Forgot Password
                </a>
              </li>
              <li>
                <a className="menu-sub-item" href="page-404.html">
                  Error 404
                </a>
              </li>
            </ul>
          </li>
          <li className="group">
            <a href="#" className="menu-item group-hover:border-white">
              Features
            </a>
            {/* MEGA MENU CONTENT */}
            <div className="w-full px-12 py-12 rounded-2xl bg-neutral-0 dark:bg-neutral-dark-0 shadow-sm absolute top-full left-0 mt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500">
              <h3 className="text-5xl mb-8 text-neutral-950 dark:text-neutral-dark-950">
                Featured <span className="font-bold">Posts</span>
              </h3>
              <div className="grid grid-cols-3 w-full gap-10">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-6 content-center hover-up">
                    <div className="max-w-28">
                      <a
                        className="inline-block md:mb-0 overflow-hidden rounded-2xl"
                        href="single.html"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/imgs/pages/thumb-01.png"
                          alt="ideko"
                        />
                      </a>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a
                        className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950"
                        href="single.html"
                      >
                        Beyond the Pixels: My Art-Tech Lifestyle Journey
                      </a>
                      <p className="text-sm font-medium text-neutral-700">
                        2 min read - June 8, 2023
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 content-center hover-up">
                    <div className="max-w-28">
                      <a
                        className="inline-block md:mb-0 overflow-hidden rounded-2xl"
                        href="single.html"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/imgs/pages/thumb-02.png"
                          alt="ideko"
                        />
                      </a>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a
                        className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950"
                        href="single.html"
                      >
                        Globetrotting in Style: A Journey Through My Lens
                      </a>
                      <p className="text-sm font-medium text-neutral-700">
                        2 min read - June 8, 2023
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-6 content-center hover-up">
                    <div className="max-w-28">
                      <a
                        className="inline-block md:mb-0 overflow-hidden rounded-2xl"
                        href="single.html"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/imgs/pages/thumb-03.png"
                          alt="ideko"
                        />
                      </a>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a
                        className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950"
                        href="single.html"
                      >
                        Canvas and Keyboard: An Art-Tech Affair
                      </a>
                      <p className="text-sm font-medium text-neutral-700">
                        2 min read - June 8, 2023
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 content-center hover-up">
                    <div className="max-w-28">
                      <a
                        className="inline-block md:mb-0 overflow-hidden rounded-2xl"
                        href="single.html"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/imgs/pages/thumb-04.png"
                          alt="ideko"
                        />
                      </a>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a
                        className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950"
                        href="single.html"
                      >
                        Beyond the Pixels: My Art-Tech Lifestyle Journey
                      </a>
                      <p className="text-sm font-medium text-neutral-700">
                        2 min read - June 8, 2023
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-6 content-center hover-up">
                    <div className="max-w-28">
                      <a
                        className="inline-block md:mb-0 overflow-hidden rounded-2xl"
                        href="single.html"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/imgs/pages/thumb-05.png"
                          alt="ideko"
                        />
                      </a>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a
                        className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950"
                        href="single.html"
                      >
                        Chasing Sunsets: A Lifestyle in Living Color
                      </a>
                      <p className="text-sm font-medium text-neutral-700">
                        2 min read - June 8, 2023
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 content-center hover-up">
                    <div className="max-w-28">
                      <a
                        className="inline-block md:mb-0 overflow-hidden rounded-2xl"
                        href="single.html"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/imgs/pages/thumb-06.png"
                          alt="ideko"
                        />
                      </a>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a
                        className="text-base font-bold text-neutral-950 dark:text-neutral-dark-950"
                        href="single.html"
                      >
                        Exploring Lifes Canvas: Style, Tech, and Beyond
                      </a>
                      <p className="text-sm font-medium text-neutral-700">
                        2 min read - June 8, 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END MEGA MENU CONTENT */}
          </li>
          <li className="relative">
            <a className="menu-item" href="page-contact.html">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex justify-end align-middle content-center items-center relative gap-4">
          <div
            className="navbar-burger self-center xl:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="fill-neutral-950 dark:fill-neutral-dark-950"
              id="fi_2976215"
              enableBackground="new 0 0 464.205 464.205"
              height={26}
              viewBox="0 0 464.205 464.205"
              width={26}
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.5A1.5 1.5 0 013.5 3h13A1.5 1.5 0 0118 4.5v2a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 6.5v-2zM2 13.5A1.5 1.5 0 013.5 12h13a1.5 1.5 0 011.5 1.5v2a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 15.5v-2z"
                  clipRule="evenodd"
                />
              </svg>
            </svg>
          </div>
          <div
            className={`animate__animated animate__fadeInLeft navbar-menu fixed top-0 left-0 z-50 w-full h-full bg-neutral-950 bg-opacity-30 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="fixed top-0 left-0 bottom-0 w-5/6 max-w-xs bg-neutral-0 dark:bg-neutral-dark-0">
              <nav className="relative p-6 h-full overflow-y-auto">
                <div className="flex flex-col h-full">
                  <h1 className="pt-2 pb-6">
                    <a href="index.html">
                      <Image
                        width={100}
                        height={100}
                        src="/imgs/template/logo.svg"
                        alt="logo"
                        className="flex-shrink-0 relative dark:hidden"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="/imgs/template/logo-white.svg"
                        alt="logo"
                        className="flex-shrink-0 relative hidden dark:inline-block"
                      />
                    </a>
                  </h1>
                  <ul className="py-6 mb-6 border-y border-neutral-300 dark:border-neutral-dark-300">
                    <li className="has-children">
                      <a className="menu-mobile-item" href="#">
                        Home
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a className="menu-mobile-sub-item" href="index.html">
                            Home page 01
                          </a>
                        </li>
                        <li>
                          <a
                            className="menu-mobile-sub-item"
                            href="index-2.html"
                          >
                            Home page 02
                          </a>
                        </li>
                        <li>
                          <a
                            className="menu-mobile-sub-item"
                            href="index-3.html"
                          >
                            Home page 03
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a className="menu-mobile-item" href="#">
                        Blog
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a
                            className="menu-mobile-sub-item"
                            href="category.html"
                          >
                            Category 01
                          </a>
                        </li>
                        <li>
                          <a
                            className="menu-mobile-sub-item"
                            href="category-2.html"
                          >
                            Category 02
                          </a>
                        </li>
                        <li>
                          <a
                            className="menu-mobile-sub-item"
                            href="category-3.html"
                          >
                            Category 03
                          </a>
                        </li>
                        <li>
                          <a
                            className="menu-mobile-sub-item"
                            href="category-4.html"
                          >
                            Category 04
                          </a>
                        </li>
                        <li>
                          <a
                            className="menu-mobile-sub-item"
                            href="single.html"
                          >
                            Single 01
                          </a>
                        </li>
                        <li>
                          <a
                            className="menu-mobile-sub-item"
                            href="single-2.html"
                          >
                            Single 02
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a className="menu-mobile-item" href="#">
                        Pages
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a
                            className="menu-mobile-sub-item"
                            href="page-about.html"
                          >
                            About me
                          </a>
                        </li>
                        <li>
                          <a
                            className="menu-mobile-sub-item"
                            href="page-author.html"
                          >
                            Author
                          </a>
                        </li>
                        <li>
                          <a
                            className="menu-mobile-sub-item"
                            href="page-search.html"
                          >
                            Search Results
                          </a>
                        </li>
                        <li>
                          <a
                            className="menu-mobile-sub-item"
                            href="page-contact.html"
                          >
                            Contact
                          </a>
                        </li>
                        <li>
                          <a
                            className="menu-mobile-sub-item"
                            href="page-login.html"
                          >
                            Login
                          </a>
                        </li>
                        <li>
                          <a
                            className="menu-mobile-sub-item"
                            href="page-register.html"
                          >
                            Register
                          </a>
                        </li>
                        <li>
                          <a
                            className="menu-mobile-sub-item"
                            href="page-forgot-password.html"
                          >
                            Forgot Password
                          </a>
                        </li>
                        <li>
                          <a
                            className="menu-mobile-sub-item"
                            href="page-404.html"
                          >
                            Error 404
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="menu-mobile-item" href="page-about.html">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="menu-mobile-item" href="page-contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="flex flex-wrap flex-col mt-4">
                    <h4 className="text-lg text-neutral-950 dark:text-neutral-dark-950 font-bold mb-4">
                      Stay Connectted
                    </h4>
                    <p className="text-sm text-neutral-700 font-medium mb-4 leading-5">
                      Imagine waking up to a dose of positivity, lifestyle
                      hacks, and inspiration tailored just for you. Thats what
                      you get when you subscribe!
                    </p>
                    <a
                      className="w-full p-4 text-neutral-950 bg-primary-light-950 rounded-md font-bold text-sm"
                      href="page-login.html"
                    >
                      Subscribe Now
                    </a>
                  </div>
                </div>
              </nav>
              <a
                className="navbar-close absolute top-5 p-4 right-3"
                href="#"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  className="fill-neutral-950 dark:fill-neutral-dark-950"
                >
                  <g clipPath="url(#clip0_85_6880)">
                    <path d="M1.42193 15.7358C1.05417 15.7571 0.692494 15.6349 0.413167 15.3948C-0.137722 14.8406 -0.137722 13.9456 0.413167 13.3914L12.4758 1.32871C13.0488 0.792556 13.9479 0.82236 14.484 1.39533C14.9689 1.91347 14.9971 2.70986 14.5502 3.26103L2.41647 15.3948C2.14074 15.6314 1.78487 15.7534 1.42193 15.7358Z" />
                    <path d="M13.4712 15.7338C13.0985 15.7322 12.7412 15.5843 12.4766 15.3218L0.413906 3.25906C-0.0964635 2.66307 -0.027076 1.76613 0.568917 1.25571C1.10086 0.800179 1.88536 0.800179 2.41725 1.25571L14.551 13.3184C15.1238 13.8547 15.1534 14.7538 14.6171 15.3267C14.5958 15.3495 14.5738 15.3715 14.551 15.3928C14.2539 15.6512 13.8629 15.7747 13.4712 15.7338Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_85_6880">
                      <rect
                        width={15}
                        height={15}
                        fill="white"
                        transform="translate(0 0.828125)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
