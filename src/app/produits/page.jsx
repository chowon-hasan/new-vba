"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const pageDescription =
  "Trouver ici dans les produits les différents type de calculateur pour Renault et Ford Focus DC4 6DCT450 A2C30743000";
const HeadingText = "Types de calculateur boite automatique Renault ";
// const secondaryHeadingText =
//   "calculateur boite automatique Renault Captur, calculateur boite automatique Renault Clio 4, calculateur boite automatique Renault Mégane, calculateur boite automatique Renault scénic, calculateur boite automatique Renault fluence, calculateur boite automatique Ford Focus";

export default function Produits() {
  return (
    <section className="produits1" style={{ padding: "140px 0 60px 0" }}>
      <div className="container mx-auto">
        <div className="product3rdCont">
          <Head>
            <title>Les différents types de calculateur Renault </title>
            <meta name="description" content={pageDescription} />
            <meta name="headline" content={HeadingText} />
            {/* <meta name="secondaryHeading" content={secondaryHeadingText} /> */}
          </Head>
          <div style={{ display: "none" }}>
            <h1>Types de calculateur boite automatique Renault</h1>
          </div>
          <main className="flex  flex-col z-20 relative">
            <div className="productTitle mx-auto">
              <div className="product border border-orangevba bg-[#f5f4f4d6] py-4 text-center rounded-md">
                <h2 className="subTitleText font-bold text-[#374151]">
                  Trouvez Ici votre
                </h2>
                <h1 className="headingText font-bold  my-1 text-[#374151]">
                  Calculateur de boite automatique
                </h1>
                <h2 className="subTitleText font-bold text-[#374151]">
                  Renault - Ford
                </h2>
                <h3 className="font-bold mt-4 text-[#374151]">
                  Vérifiez la disponibilité
                </h3>
              </div>
            </div>

            <div className="productscards grid grid-cols-3 justify-center gap-5 mt-5">
              {/* Produits */}
              <div className="lg:w-full rounded-md shadow-2xl p-5 singleProductCard border border-orangevba">
                <img
                  src="https://cdn.discordapp.com/attachments/878674914268311625/1195467343338414080/image-removebg-preview_2.png?ex=65b418b9&is=65a1a3b9&hm=ad53e7617b50737997033def5eef3070494854056e293870a4cc49d931461640&" // Remplacez par le bon chemin de l'image
                  alt="Calculateur avec carton"
                  className="w-[300px] m-auto h-60 object-cover  rounded-t-xl"
                  loading="lazy"
                />

                <div className="flex  mb-3  justify-center">
                  <h2
                    className={`mt-3 text-2xl font-semibold text-center transition-transform text-[#374151]`}
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
                {/* <div className="flex justify-center gap-5 mt-5">
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      href="/produits/essence-a-partir-de/renault-captur"
                      className="hover:underline  hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-a-partir-de/renault-captur"
                    >
                      <h2>
                        1.2 <br /> Diesel à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                </div> */}
              </div>

              {/* Produit 2 */}
              <div className="lg:w-full rounded-md shadow-2xl p-5 bg-white singleProductCard border border-orangevba">
                <img
                  src="https://cdn.discordapp.com/attachments/878674914268311625/1195467343338414080/image-removebg-preview_2.png?ex=65b418b9&is=65a1a3b9&hm=ad53e7617b50737997033def5eef3070494854056e293870a4cc49d931461640&" // Remplacez par le bon chemin de l'image
                  alt="Calculateur avec carton"
                  className="w-[300px] m-auto h-60 object-cover  rounded-t-xl"
                  loading="lazy"
                />
                <div className="flex  mb-3  justify-center">
                  <h2
                    className={`mt-3 text-2xl font-semibold text-center transition-transform text-[#374151]`}
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
                        1.5 <br /> Diesel <br />à partir de 2012
                      </h2>
                    </Link>
                  </div>
                </div>
                {/* <div className="flex justify-center  gap-5 mt-5">
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      href="/produits/essence-a-partir-de/renault-clioiv"
                      className="hover:underline  hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
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

              {/* Produit 3 */}
              <div className="lg:w-full rounded-md shadow-2xl p-5 bg-white singleProductCard border border-orangevba">
                <img
                  src="https://cdn.discordapp.com/attachments/878674914268311625/1195467343338414080/image-removebg-preview_2.png?ex=65b418b9&is=65a1a3b9&hm=ad53e7617b50737997033def5eef3070494854056e293870a4cc49d931461640&" // Remplacez par le bon chemin de l'image
                  alt="Calculateur avec carton"
                  className="w-[300px] m-auto h-60 object-cover  rounded-t-xl"
                  loading="lazy"
                />
                <div className="flex  mb-3  justify-center">
                  <h2
                    className={`mt-3 text-2xl font-semibold text-center transition-transform text-[#374151]`}
                  >
                    Renault Mégane
                  </h2>
                </div>

                <div className="flex justify-center gap-5">
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      href="/produits/diesel-a-partir-de/renault-megane"
                      className="hover:underline hover:text-orangevba"
                    >
                      <h2>
                        1.5
                        <br /> Diesel <br />à partir de 2008
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/essence/renault-megane"
                    >
                      <h2>
                        1.2 <br />
                        Essence <br />à partir de 2012
                      </h2>
                    </Link>
                  </div>
                </div>
                {/* <div className="flex justify-start gap-5 mt-5">
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      href="/produits/diesel-a-partir-de/renault-megane"
                      className="hover:underline  hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Diesel <br />A partir de <br /> 2012
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-a-partir-de/renault-megane"
                    >
                      <h2>
                        1.2 <br /> Diesel à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                </div> */}
              </div>

              {/* Produit 4 */}
              <div className="lg:w-full rounded-md shadow-2xl p-5 bg-white singleProductCard border border-orangevba">
                <img
                  src="https://cdn.discordapp.com/attachments/878674914268311625/1195467343338414080/image-removebg-preview_2.png?ex=65b418b9&is=65a1a3b9&hm=ad53e7617b50737997033def5eef3070494854056e293870a4cc49d931461640&" // Remplacez par le bon chemin de l'image
                  alt="Calculateur avec carton"
                  className="w-[300px] m-auto h-60 object-cover  rounded-t-xl"
                  loading="lazy"
                />
                <div className="flex  mb-3  justify-center">
                  <h2
                    className={`mt-3 text-2xl font-semibold text-center transition-transform text-[#374151]`}
                  >
                    Renault Scénic
                  </h2>
                </div>
                <div className="flex justify-start gap-5 ">
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      href="/produits/diesel-a-partir-de/renault-scenic"
                      className="hover:underline hover:text-orangevba"
                    >
                      <h2>
                        1.5
                        <br /> Diesel <br />à partir de 2009
                      </h2>
                    </Link>
                  </div>
                  {/* <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-2009-2015/renault-scenic"
                    >
                      <h2>
                        1.2 <br /> Essence <br />A partir de <br /> 2009 à 2015
                      </h2>
                    </Link>
                  </div> */}
                </div>
                {/* <div className="flex justify-center gap-5 mt-5">
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      href="/produits/essence-a-partir-de/renault-scenic"
                      className="hover:underline  hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-a-partir-de/renault-scenic"
                    >
                      <h2>
                        1.2 <br /> Diesel à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                </div> */}
              </div>

              {/* Produit 5 */}
              <div className="lg:w-full rounded-md shadow-2xl p-5 bg-white singleProductCard border border-orangevba">
                <img
                  src="https://cdn.discordapp.com/attachments/878674914268311625/1195467343338414080/image-removebg-preview_2.png?ex=65b418b9&is=65a1a3b9&hm=ad53e7617b50737997033def5eef3070494854056e293870a4cc49d931461640&" // Remplacez par le bon chemin de l'image
                  alt="Calculateur avec carton"
                  className="w-[300px] m-auto h-60 object-cover  rounded-t-xl"
                  loading="lazy"
                />
                <div className="flex  mb-3  justify-center">
                  <h2
                    className={`mt-3 text-2xl font-semibold text-center transition-transform text-[#374151]`}
                  >
                    Renault Fluence
                  </h2>
                </div>
                <div className="flex justify-start gap-5">
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      href="/produits/diesel-a-partir-de/renault-fluence"
                      className="hover:underline hover:text-orangevba"
                    >
                      <h2>
                        1.5
                        <br />
                        Diesel
                        <br />à partir de 2009
                      </h2>
                    </Link>{" "}
                  </div>
                  {/* <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-2009-2015/renault-fluence"
                    >
                      <h2>
                        1.2 <br /> Diesel de <br /> 2009 à 2015
                      </h2>
                    </Link>
                  </div> */}
                </div>
                {/* <div className="flex justify-center gap-5 mt-5">
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      href="/produits/essence-a-partir-de/renault-fluence"
                      className="hover:underline  hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-a-partir-de/renault-fluence"
                    >
                      <h2>
                        1.2 <br /> Diesel à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                </div> */}
              </div>

              {/* Product 6 */}

              <div className="lg:w-full rounded-md shadow-2xl p-5 bg-white singleProductCard border border-orangevba">
                <img
                  src="https://cdn.discordapp.com/attachments/878674914268311625/1195467343338414080/image-removebg-preview_2.png?ex=65b418b9&is=65a1a3b9&hm=ad53e7617b50737997033def5eef3070494854056e293870a4cc49d931461640&" // Remplacez par le bon chemin de l'image
                  alt="Calculateur avec carton"
                  className="w-[300px] m-auto h-60 object-cover  rounded-t-xl"
                  loading="lazy"
                />
                <div className="flex  mb-3  justify-center">
                  <h2
                    className={`mt-3 text-2xl font-semibold text-center transition-transform text-[#374151]`}
                  >
                    Ford Focus
                  </h2>
                </div>
                <div className="flex justify-start gap-5 ">
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      href="/produits/essence/ford-focus"
                      className="hover:underline hover:text-orangevba"
                    >
                      <h2>
                        1.2 <br /> Essence <br />à partir de 2010
                      </h2>
                    </Link>
                  </div>

                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-a-partir-de/ford-focus"
                    >
                      <h2>
                        1.6 <br /> Diesel <br />à partir de 2008
                      </h2>
                    </Link>
                  </div>
                </div>

                {/* <div className="flex justify-center gap-5 mt-5">
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      href="/produits/essence-a-partir-de/ford-focus"
                      className="hover:underline  hover:text-orangevba"
                    >
                      <h2>
                        1.5 <br /> Essence à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                  <div className="w-1/2 border border-[#EE9D35] rounded-md text-center py-2 px-2 shadow-2xl">
                    <Link
                      className="hover:underline hover:text-orangevba"
                      href="/produits/diesel-a-partir-de/ford-focus"
                    >
                      <h2>
                        1.2 <br /> Diesel à <br /> partir de 2016
                      </h2>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
