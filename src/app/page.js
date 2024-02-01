"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

<link rel="icon" href="/favicon.ico" sizes="any" />;

const Home = () => {
  const router = useRouter();

  const produits = () => {
    router.push("/produits");
  };
  const aide = () => {
    router.push("/aide-en-ligne");
  };

  return (
    <section style={{ padding: "40px 0" }} className="bannerSection">
      <div className="container mx-auto ">
        <div className="min-h-screen flex items-center justify-center">
          <Head>
            <title>
              Fournisseur de Calculateur de boîte automatiques Renault et
              Reprogrammation
            </title>
          </Head>

          <div className="bannerMain flex items-center gap-5">
            <div className="lg:w-1/2">
              <div className="">
                <h1 className="text-[40px] font-bold">
                  Calculateur <br />
                  Vente - Reprogrammation
                </h1>
                <h2 className="text-3xl font-bold my-3">
                  Boites automatiques DC4
                </h2>
                <h2 className="text-3xl font-bold my-3">
                  Renault - Ford pour vehicules :
                </h2>

                <div className="carBannerCont">
                  <div className="bannerCars">
                    <div
                      style={{
                        width: "180px",
                        height: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 0px 5px #cfcfcf",
                      }}
                      className="carsCard"
                    >
                      <Link href="/renault-capture">
                        <img
                          width={100}
                          height={100}
                          src="/images/renault-capture.webp"
                          alt=""
                          className="m-auto"
                        ></img>
                        Renault Captur
                      </Link>
                    </div>
                    <div
                      style={{
                        width: "180px",
                        height: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 0px 5px #cfcfcf",
                      }}
                      className="carsCard"
                    >
                      <Link href="/renault-megane">
                        <img
                          width={85}
                          height={85}
                          src="/images/renault-megane.png"
                          alt=""
                          className="m-auto"
                        ></img>
                        Renault Megane
                      </Link>
                    </div>
                    <div
                      style={{
                        width: "180px",
                        height: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 0px 5px #cfcfcf",
                      }}
                      className="carsCard"
                    >
                      <Link href="/renault-clio">
                        <img
                          width={85}
                          height={85}
                          src="/images/Renault-CLIO.png"
                          alt=""
                          className="m-auto"
                        ></img>
                        Renault Clio IV
                      </Link>
                    </div>
                    <div
                      style={{
                        width: "180px",
                        height: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 0px 5px #cfcfcf",
                      }}
                      className="carsCard"
                    >
                      <Link href="/renault-scenic">
                        <img
                          width={85}
                          height={85}
                          src="/images/renaultsenic.png"
                          alt=""
                          className="m-auto"
                        ></img>
                        Renault Scenic
                      </Link>
                    </div>
                    <div
                      style={{
                        width: "180px",
                        height: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 0px 5px #cfcfcf",
                      }}
                      className="carsCard"
                    >
                      <Link href="/renault-fluence">
                        <img
                          width={85}
                          height={85}
                          src="/images/renault-fluence-silver-grey.png"
                          alt=""
                          className="m-auto"
                        ></img>
                        Renault Fluence
                      </Link>
                    </div>
                    <div
                      style={{
                        width: "180px",
                        height: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 0px 5px #cfcfcf",
                      }}
                      className="carsCard"
                    >
                      <Link href="/renault-ford">
                        <img
                          width={85}
                          height={85}
                          src="/images/fordFocus.png"
                          alt=""
                          className="m-auto"
                        ></img>
                        Ford Focus
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="buttons">
                  <Link href="/produits">
                    <button className="buttons bg-[#EE9D35] text-white capitalize py-3 px-[40px] rounded-md hover:bg-[#B1D8FF] hover:text-white">
                      DISPONIBILITE
                    </button>
                  </Link>
                  <Link href="/aide-en-ligne">
                    <button className="buttons bg-[#287FFE] text-white capitalize ms-3 py-3 px-[38px] rounded-md hover:bg-[#B1D8FF] hover:text-white">
                      AIDE EN LIGNE
                    </button>
                  </Link>
                </div>

                <div className="">
                  <h2 className="sr-only">
                    Calculateur de Boites automatiques Renault Captur
                  </h2>
                  <h2 className="sr-only">
                    Calculateur de Boites automatiques Renault Megane
                  </h2>
                  <h2 className="sr-only">
                    Calculateur de Boites automatiques Renault Clio IV
                  </h2>
                  <h2 className="sr-only">
                    Calculateur de Boites automatiques Renault Scenic
                  </h2>
                  <h2 className="sr-only">
                    Calculateur de Boites automatiques Renault Fluence
                  </h2>
                  <h2 className="sr-only">
                    Calculateur de Boites automatiques Renault Focus
                  </h2>
                  <h3 className="sr-only">
                    310320749R 310320891R 310320756R 310321109R 310321488R
                    310321517R 310320841R 310320717R 310320892R 310320721R
                    310321520R 310321561R, A4539006303 310321808R 310321150R
                    310321421R 310321706R 310321716R 310321793R 310321662R
                    310321524R 310321994R 310322059R 310F93913R 310321149R
                    310321306R 310320553R 310321359R SP03241, DC4016,
                    310321148R, 310321488R
                  </h3>
                </div>
              </div>
            </div>
            <div className="viddeo lg:w-1/2">
              <video
                style={{ width: "778px", height: "400px", objectFit: "cover" }}
                autoPlay
                loop
                muted
                className="myVideo"
              >
                <source src="/images/videohome2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
