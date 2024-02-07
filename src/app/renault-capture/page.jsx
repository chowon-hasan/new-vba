import Head from "next/head";
import Link from "next/link";
import React from "react";

const pageDescription =
  "Vérifiez la disponibilté de votre module de commande de boite de vitesse automatique pour votre boite automatique EDC Renault Captur";
const HeadingText = "Calculateur pour Renault Captur";

const RenaultCapture = () => {
  return (
    <section className="carsCategory">
      <div className="container mx-auto">
        <Head>
          <title>Calculateur pour Renault Captur vierge ou programmé</title>
          <meta name="description" content={pageDescription} />
          <meta name="headline" content={HeadingText} />
        </Head>
        <div style={{ display: "none" }}>
          <h1>Calculateur pour Renault Captur</h1>
        </div>
        <div className="md:flex justify-center items-start gap-5">
          <div className="md:w-1/2">
            <div className="md:w-[400px]  ms-auto bg-white py-5 rounded-md  p-5">
              <h1 className="text-4xl font-bold text-center">Renault Captur</h1>
              <img
                width={490}
                height={290}
                src="/images/calculateur_DC4_Renault_Capture.webp"
                className="mx-auto"
              ></img>
              <p className="text-justify">
                Vérifiez la disponibilté de votre module de commande défectueux
                (boite de vitesse à contrôler) pour votre{" "}
                <span className="font-bold">boite automatique EDC</span> montée
                sur votre <span className="font-bold">Renault Captur</span> :{" "}
                <span className="font-bold">vierge ou programmé</span>{" "}
                installation possible. Choisissez votre modèle de calclulateur
                de <span className="font-bold">Renault Captur</span>, Essence ou
                Diesel ainsi que l’année. Pour commander en ligne, merci de
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
                  Renault Captur
                </h2>
              </div>

              <div className="flex justify-center gap-5">
                <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                  <Link
                    href="/produits/essence/renault-captur"
                    className="hover:underline hover:text-orangevba"
                  >
                    <h2>
                      1.2 <br /> Essence <br />à partir de 2013
                    </h2>
                  </Link>
                </div>
                <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                  <Link
                    className="hover:underline hover:text-orangevba"
                    href="/produits/diesel-a-partir-de/renault-captur"
                  >
                    <h2>
                      1.5 <br /> Diesel <br />à partir de 2013
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenaultCapture;
