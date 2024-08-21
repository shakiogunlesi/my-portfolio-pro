"use client";

import React from 'react';
import Image from 'next/image';
import Logo from '/public/logo.png';
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';

export const Header = () => {
  return (
    <>
      {/* Back to Top */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1] translate-y-[-1500px] hidden">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="preloaderSvg" d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
        </svg>
        <div className="preloader-heading">
          <div className="load-text opacity-0 transform translate-y-[-100px]">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <div className="progress-wrap" id="scrollUp">
          <svg className="progress-circle w-10 h-10" viewBox="-1 -1 102 102">
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              className="stroke-current"
            ></path>
          </svg>
        </div>
      </div>

      {/* Header Start */}
      <header className="tj-header-area bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="logo-box">
            <Image src={Logo} alt="Logo" width={185} height={30} />
          </div>
          <div className="header-info-list hidden md:flex">
            <ul className="flex space-x-4">
              <li>
                <a href="mailto:shaki_ogunlesi@outlook.com">shaki_ogunlesi@outlook.com</a>
              </li>
            </ul>
          </div>
          <nav className="header-menu">
            <ul className="flex space-x-6">
              <li>
                <Popover>
                  <PopoverTrigger asChild>
                    <a href="#" className="current-menu-item">
                      Home
                    </a>
                  </PopoverTrigger>
                  <PopoverContent className="sub-menu bg-white shadow-lg rounded-md p-4">
                    <ul>
                      <li>
                        <Popover>
                          <PopoverTrigger asChild>
                            <a href="#">Dark Mode</a>
                          </PopoverTrigger>
                          <PopoverContent className="sub-menu bg-white shadow-lg rounded-md p-4">
                            <ul>
                              <li>
                                <a href="#">Home One</a>
                              </li>
                              <li>
                                <a href="#">Home Two</a>
                              </li>
                              <li>
                                <a href="#">Home Three</a>
                              </li>
                            </ul>
                          </PopoverContent>
                        </Popover>
                      </li>
                      <li>
                        <Popover>
                          <PopoverTrigger asChild>
                            <a href="#">Light Mode</a>
                          </PopoverTrigger>
                          <PopoverContent className="sub-menu bg-white shadow-lg rounded-md p-4">
                            <ul>
                              <li>
                                <a href="#">Home One</a>
                              </li>
                              <li>
                                <a href="#">Home Two</a>
                              </li>
                              <li>
                                <a href="#">Home Three</a>
                              </li>
                            </ul>
                          </PopoverContent>
                        </Popover>
                      </li>
                    </ul>
                  </PopoverContent>
                </Popover>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <Popover>
                  <PopoverTrigger asChild>
                    <a href="#">Blog</a>
                  </PopoverTrigger>
                  <PopoverContent className="sub-menu bg-white shadow-lg rounded-md p-4">
                    <ul>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Blog Details</a>
                      </li>
                    </ul>
                  </PopoverContent>
                </Popover>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="header-button hidden md:block">
            <a href="#" className="btn btn-primary">
              Hire me!
            </a>
          </div>
          <div className="menu-bar md:hidden">
            <button className="bg-blue-500 text-white p-2 rounded" aria-label="Toggle menu">
              {/* You can replace this with an icon */}
              ☰
            </button>
          </div>
        </div>
      </header>
      {/* Header End */}
    </>
  );
};

// export default Header;
