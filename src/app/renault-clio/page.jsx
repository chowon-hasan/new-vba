import Image from "next/image";
import Link from "next/link";
import React from "react";
import Head from "next/head";

const pageDescription =
  "Vérifiez la disponibilté de votre module de commande de boite de vitesse automatique pour votre boite automatique EDC Renault clio 4";
const HeadingText = "Calculateur pour  Renault Clio IV ";

const RenaultClio = () => {
  return (
    <section className="carsCategory">
      <Head>
        <title>
          Calculateur pour Renault clio 4 Calculateur vierge ou programmé
        </title>
        <meta name="description" content={pageDescription} />
        <meta name="headline" content={HeadingText} />
      </Head>

      <div style={{ display: "none" }}>
        <h1>Calculateur pour Renault Clio IV </h1>
      </div>
      <div className="container mx-auto">
        <div className="md:flex justify-center items-start gap-5">
          <div className=" md:w-1/2">
            <div className="md:w-[400px] ms-auto bg-white py-5 rounded-md  p-5">
              <h1 className="text-4xl font-bold text-center mt-5">
                Renault Clio IV
              </h1>
              <img
                style={{ width: "400px", height: "200px" }}
                width={400}
                height={200}
                src="/images/calculateur_DC4_Renault_Clio4.png"
                className="mx-auto"
              ></img>
              <p className="text-justify mt-5">
                Vérifiez la disponibilté de votre module de commande défectueux
                (boite de vitesse à contrôler) pour votre{" "}
                <span className="font-bold">boite automatique EDC</span> montée
                sur votre <span className="font-bold">Renault Clio IV</span> :{" "}
                <span className="font-bold">vierge ou programmé</span>{" "}
                installation possible. Choisissez votre modèle de calclulateur
                de <span className="font-bold">Renault Clio IV</span>, Essence
                ou Diesel ainsi que l’année. Pour commander en ligne, merci de
                cliquer sur le lien correspondant.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 capture">
            <div className="md:w-[400px] md:pb-[130px] rounded-md shadow-2xl p-5 bg-white">
              <img
                src="https://cdn.discordapp.com/attachments/878674914268311625/1195467343338414080/image-removebg-preview_2.png?ex=65b418b9&is=65a1a3b9&hm=ad53e7617b50737997033def5eef3070494854056e293870a4cc49d931461640&" // Remplacez par le bon chemin de l'image
                alt="Calculateur avec carton"
                className="w-full h-60 object-cover  rounded-t-xl"
                loading="lazy"
              />
              <div className="flex  mb-3  justify-center">
                <h2
                  className={`mt-3 text-2xl font-semibold text-center transition-transform `}
                >
                  Renault Clio IV
                </h2>
              </div>
              <div className="flex justify-center gap-5">
                <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                  <Link
                    href="/produits/essence/renault-clioiv"
                    className="hover:underline hover:text-orangevba"
                  >
                    <h2>
                      1.2 <br /> Essence <br />à partir de 2012
                    </h2>
                  </Link>
                </div>
                <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                  <Link
                    className="hover:underline hover:text-orangevba"
                    href="/produits/diesel-a-partir-de/renault-clioiv"
                  >
                    <h2>
                      1.5 <br /> Diesel <br />à patir de 2012
                    </h2>
                  </Link>
                </div>
              </div>
              {/* <div className="flex justify-center  gap-5 mt-5">
                <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-5 shadow-2xl">
                  <Link
                    href="/produits/essence-a-partir-de/renault-clioiv"
                    className="hover:underline  hover:text-orangevba"
                  >
                    <h2>
                      1.5 <br /> Essence à <br /> partir de 2016
                    </h2>
                  </Link>
                </div>
                <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-5 shadow-2xl">
                  <Link
                    className="hover:underline hover:text-orangevba"
                    href="/produits/diesel-a-partir-de/renault-clioiv"
                  >
                    <h2>
                      1.2 <br /> Diesel à <br /> partir de 2016
                    </h2>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenaultClio;
