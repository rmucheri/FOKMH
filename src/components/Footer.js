import React from "react";
import { tranlogo2 } from "../assets";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="bg-[#0B123F]">
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex justify-center items-center ">
            <a href="/" className="">
              <span className="sr-only">Friends of Karanda</span>
              <img
                className="h-24 z-99 w-auto animate-bounce "
                src={tranlogo2}
                alt=""
              />

              <a
                style={{ fontSize: "1.8rem" }}
                href="/"
                className="text-[#3ea498] text-xl font-semibold leading-6"
              >
                FOKMH
              </a>
            </a>
          </div>
          <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav class="list-none mb-10">
                <li>
                  <a href="/" class="text-white hover:text-orange-700">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" class="text-white hover:text-orange-700">
                    About
                  </a>
                </li>
                <li>
                  <a href="/causes" class="text-white hover:text-orange-700">
                    Causes
                  </a>
                </li>
                <li>
                  <a href="/contact" class="text-white hover:text-orange-700">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/about#faq" class="text-white hover:text-orange-700">
                    FAQs
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4"></div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav class="list-none mb-10">
                <li>
                  <p class="text-white hover:text-orange-700">PARTNERS</p>
                </li>
                <li>
                  <a
                    href="https://magetsi.co.zw/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-white hover:text-orange-700"
                  >
                    Magetsi
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.solvaxion.com/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-white hover:text-orange-700"
                  >
                    Solvaxion
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.wildroseplacement.com/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-white hover:text-orange-700"
                  >
                    Wildrose
                  </a>
                </li>
                <li>
                  <a
                    href="https://aws.amazon.com/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-white hover:text-orange-700"
                  >
                    AWS
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4"></div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-[#3ea498] text-sm text-center sm:text-left">
              {" "}
              © Copyright {currentYear}{" "}
              <span>Made by Rufaro Mucheri for FOKMH </span>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <p className="text-xs text-[#3ea498]">
                Powered by <a href="https://magetsi.co.zw/">Magetsi </a>{" "}
              </p>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
