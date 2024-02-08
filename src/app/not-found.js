import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="md:flex items-center notFoundPage">
          <div className="lg:w-1/2 text-end notFoundContent">
            <h1 className="text-[30px] font-bold">
              LA PAGE QUE VOUS <br /> DEMANDEZ N'EXISTE PAS.
            </h1>
            <p className="mt-3 mb-5">Que recherchez-vous ?</p>
            <div className="">
              <Link href="/">
                <button className="bg-[#EE9D35] text-white py-3 px-5 rounded-md hover:bg-[#B1D8FF] hover:text-black">
                  Aller à la page d'accueil
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mx-auto">
            <img
              src="https://medias.sncf.com/sncfcom/images/image-404.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
