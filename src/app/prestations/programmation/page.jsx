// laboiteautomatique.com/src/app/clonage.js
"use client";
import Head from "next/head";
import Link from "next/link";

const pageDescription =
  "Nous proposons des services de reprogrammation et de clonage de calculateurs pour boîtes automatiques Trenault DC4 avec la valise constructeur ";
const HeadingText = "Programation calculateur boite automatique Renault";

export default function Clonage() {
  return (
    <section className="py-[60px] installation produits">
      <div className="relative">
        <Head>
          <title>Programation calculateur boite automatique Renault DC4</title>
          <meta name="description" content={pageDescription} />
          <meta name="headline" content={HeadingText} />
        </Head>
        <div style={{ display: "none" }}>
          <h1>Programation calculateur boite automatique Renault</h1>
        </div>
        {/* Texte au-dessus de l'image */}
        <main className="flex flex-col min-h-[98vh] items-center lg:p-8 sm:p-5 md-8 justify-center relative text-black">
          <div className="bg-[#f5f4f4e3] mb-5 md:w-[850px] rounded-md border text-center border-orangevba py-5">
            <p className="progTitle font-bold text-[#374151]">
              Services de Programmation
            </p>
          </div>
          <div className="bg-[#f5f4f4e3] border border-orangevba rounded-md pt-3 px-5 pb-8 md:w-[850px] text-center">
            <div className="mb-8 text-lg">
              <p className="text-justify text-[16px]">
                Nous proposons des services de reprogrammation et de clonage de
                calculateurs pour boîtes automatiques avec la valise
                constructeur pour les modèles de véhicules suivants :
              </p>
              <ul className="list-disc list-inside font-bold mt-4">
                <p className="text-[#374151]">
                  Renault Captur | Renault Mégane | Renault Clio IV | Renault
                  Scenic | Ford Focus
                </p>
              </ul>
            </div>
            <p className="mb-4">Références compatibles :</p>
            <div className="flex justify-center">
              <div className="w-full italic text-gray-600 instalLaptop">
                <p>
                  3A2C3074300 - 0310320749R - 310320891R - 310320756R -
                  310321109R
                </p>
                <p>
                  310321488R - 310321517R - 310320841R - 310320717R - 310320892R
                </p>
                <p>
                  310320721R - 310321520R - 310321561R - A4539006303 -
                  310321808R
                </p>
                <p>
                  310321150R - 310321421R - 310321706R - 310321716R - 310321793R
                </p>
                <p>
                  310321662R - 310321524R - 310321994R - 310322059R - 310F93913R
                </p>
                <p>
                  310321149R - 310321306R - 310320553R - 310321359R - 310321488R
                </p>
                <p className="text-[15px]">
                  A2C30743000 01 K00 - A2C53374830 03 K01 - A2C30743100 -
                  A2C73768907
                </p>
              </div>
              <div className="w-full italic text-gray-600 instalMobile">
                <p>
                  3A2C3074300 - 0310320749R <br /> 310320891R - 310320756R{" "}
                  <br />
                  310321109R 310321488R <br /> 310321517R - 310320841R <br />{" "}
                  310320717R - 310320892R <br /> 310320721R - 310321520R <br />{" "}
                  310321561R - A4539006303
                  <br /> 310321808R - 310321150R <br /> 310321421R - 310321706R{" "}
                  <br />
                  310321716R - 310321793R <br /> 310321662R - 310321524R <br />{" "}
                  310321994R - 310322059R <br /> 310F93913R - 310321149R <br />{" "}
                  310321306R - 310320553R
                  <br /> 310321359R - 310321488R <br /> A2C30743000 01 K00 -
                  A2C53374830 03 K01 <br /> A2C30743100 - A2C73768907
                </p>
              </div>
            </div>
            <p className="mt-8 mb-8 text-justify">
              Avec notre expertise, nous sommes en mesure d’effectuer la
              reprogrammation ou le clonage de votre calculateur. Intervention -
              Livraison sur toute la France. <br />
              Pour le démontage ou l'installation du module de commande, celui
              ce fait uniquement en IDF ou en région voisine.
            </p>
            <Link
              className="bg-[#EE9D35] text-white py-3 px-5 rounded-md hover:bg-[#B1D8FF] hover:text-black"
              href="/prestations/installation"
            >
              Contactez-nous
            </Link>
          </div>
        </main>
      </div>
    </section>
  );
}
