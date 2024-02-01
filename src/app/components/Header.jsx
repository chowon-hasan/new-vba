"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [prestationDropdown, setPrestationDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const handleNavbarToggle = () => {
    setNavbar(!navbar);
  };

  const handlePrestationToggle = () => {
    setPrestationDropdown(!prestationDropdown);
  };

  const handleDocumentClick = (event) => {
    // Vérifier si le clic n'est pas à l'intérieur du menu Prestation
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setPrestationDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    setPrestationDropdown(false);
  }, [router.pathname]);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    setPrestationDropdown(false);
  }, [router.pathname]);
  return (
    <section className="bg-white/90 border border-b-[3px] border-[#c9c9c9] fixed w-full z-50">
      <div className="container mx-auto">
        <nav className="">
          <div className="flex flex-wrap items-center justify-between mx-auto p-3">
            <Link href="/" className="">
              <div className="w-[290px]">
                <img
                  width={100}
                  height={100}
                  src="/images/logovba.png"
                  alt="Logo"
                ></img>
              </div>
            </Link>

            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center bg-[#EE9D35] p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#EE9D35] hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-[#EE9D35]dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => setNavbar(!navbar)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>

            <div
              className={`w-full md:w-auto md:block ${
                navbar ? "block" : "hidden"
              } lg:pr-5`}
              id="navbar-default"
            >
              <div className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <Link
                  href="/produits"
                  className="block  py-2 pl-3 pr-4 text-black md:hover:text-[#EE9D35] md:p-0 dark:text-black md:dark:hover:text-[#EE9D35] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Produits
                </Link>

                <div ref={dropdownRef} className="relative group">
                  <button
                    onClick={handlePrestationToggle}
                    className="block py-2 pl-3 pr-4  text-black md:hover:text-[#EE9D35] md:p-0 dark:text-black md:dark:hover:text-[#EE9D35] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Prestation
                  </button>

                  {prestationDropdown && (
                    <div className="absolute mt-2  bg-[#EE9D35]  rounded-md shadow-lg dark:bg-[#EE9D35] dark:border-gray-700 dark:text-white z-40">
                      <div className="subHeadList">
                        {" "}
                        <Link
                          href="/prestations/programmation"
                          className="subHeadList1 block p-4 py-2"
                        >
                          Programmation
                        </Link>
                      </div>
                      <div className="subHeadList">
                        <Link
                          href="/prestations/installation"
                          className="subHeadList1 block p-4 py-2"
                        >
                          Installation
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/aide-en-ligne"
                  className="block  py-2 pl-3 pr-4 text-black md:hover:text-[#EE9D35] md:p-0 dark:text-black md:dark:hover:text-[#EE9D35] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Aide en ligne
                </Link>

                <Link
                  href="/contact"
                  className="block  py-2 pl-3 pr-4 text-black md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-[#EE9D35] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </div>
              <div className="headButtonRes">
                <Link href="/aide-en-ligne">
                  <button className="bg-[#287FFE] text-white py-3 px-5 rounded-md hover:bg-[#B1D8FF] hover:text-black">
                    Aide En Ligne
                  </button>
                </Link>
                <Link href="/compare">
                  <button className="bg-[#418FFF] ms-3 text-white py-3 px-5 rounded-md hover:bg-[#B1D8FF] hover:text-black">
                    Véhicule
                  </button>
                </Link>
              </div>
            </div>

            <div className="headButton">
              <Link href="/aide-en-ligne">
                <button className="bg-[#287FFE] text-white py-3 px-5 rounded-md hover:bg-[#B1D8FF] hover:text-black">
                  Aide En Ligne
                </button>
              </Link>
              <Link href="/compare">
                <button className="bg-[#EE9D35] ms-3 text-white py-3 px-8 rounded-md hover:bg-[#B1D8FF] hover:text-black">
                  Véhicule
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
