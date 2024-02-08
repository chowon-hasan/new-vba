"use client";
import Head from "next/head";

const pageDescription =
  "Vérifiez la disponibilté de votre module de commande de boite de vitesse automatique pour votre boite automatique EDC Renault clio 4 Diesel";
const HeadingText = "Calculateur pour Renault clio 4 Diesel DC4";

export default function Renault() {
  return (
    <div className="relative produits">
      <Head>
        <title>Calculateur pour Renault clio 4 Diesel DC4</title>
        <meta name="description" content={pageDescription} />
        <meta name="headline" content={HeadingText} />
      </Head>

      <div style={{ display: "none" }}>
        <h1>Calculateur pour Renault clio 4 Diesel DC4</h1>
      </div>
      <div className="md:min-h-screen w-full items-center justify-center flex  flex-col lg:p-24 z-20 relative">
        <div className="orderPrevPage group rounded-xl shadow-2xl md:p-8 transition-color  border-2 bg-white/90 border-orangevba  md:w-3/5 lg:w-3/5 xl:w-5/12 text-center">
          <div className="text-right text-2xl ">890,00€</div>
          <img
            src="/images/Calculateur_Renault_A2C30743000_01_K00.png"
            alt="Calculateur avec carton"
            className="w-56 m-auto mb-4"
          />
          <h2 className="text-[30px]xl font-semibold pb-2">
            Calculateur Renault Clio IV
          </h2>
          <div className="text-center">
            <p className="mb-4">
              Module de commande (calculateur) pour boite automatique Renault
              Clio IV Diesel Boite automatique DC4 (getrag 6DCT250)
            </p>
            <p className="mb-4 text-center text-sm text-black italic">
              310320749R 310320891R 310320756R 310321109R 310321488R 310321517R
              310320841R 310320717R 310320892R 310320721R 310321520R 310321561R,
              A4539006303 310321808R 310321150R 310321421R 310321706R 310321716R
              310321793R 310321662R 310321524R 310321994R 310322059R 310F93913R
              310321149R 310321306R 310320553R 310321359R 310321488R 310321148R,
            </p>
            <div className="flex justify-center space-x-4 pt-4">
              <a
                href="https://buy.stripe.com/cN23fQgco7pdcCY008"
                className="cursor-pointer bg-orangevba hover:brightness-110 text-white py-2 px-4 rounded-full shadow-lg focus:outline-none"
              >
                Commander
              </a>
              <a
                href="/prestations/installation"
                className="cursor-pointer bg-[#418FFF] hover:brightness-110 text-white  py-2 px-4 rounded-full shadow-lg focus:outline-none"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
