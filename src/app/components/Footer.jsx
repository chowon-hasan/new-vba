import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <section>
      <hr className="border border-[#cfcfcf]" />
      <div className="container mx-auto">
        {/* <hr className="mt-[3px] border border-[#c9c9c9]" /> */}
        <footer className="myFooter bg-[#ffffff] border-[#c9c9c9] text-black py-4 ">
          <div className="md:flex flex-wrap justify-between gap-4">
            <div className="">
              <a href="https://maps.app.goo.gl/p7MQH6a2DYB64of59">
                <span className="hover:text-[#EE9D35] text-[15px]">
                  Calculateur Renault Paris (75)
                </span>
                <br />
                <span className="hover:text-[#EE9D35] text-[15px]">
                  Calculateur Renault Marseille (13)
                </span>
                <br />
                <span className="hover:text-[#EE9D35] text-[15px]">
                  Calculateur Renault Lyon (69)
                </span>
                <br />
                <span className="hover:text-[#EE9D35] text-[15px]">
                  Calculateur Renault Toulouse (31)
                </span>
                <br />
                <span className="hover:text-[#EE9D35] text-[15px]">
                  Calculateur Renault Nice (06)
                </span>
                <br />
                <span className="hover:text-[#EE9D35] text-[15px]">
                  Calculateur Renault Rennes (35)
                </span>
                <br />
                <span className="hover:text-[#EE9D35] text-[15px]">
                  Calculateur Renault Reims (51)
                </span>
                <br />
                <span className="hover:text-[#EE9D35] text-[15px]">
                  Calculateur Renault Grenoble (38)
                </span>
              </a>
            </div>
            {/*  */}
            <div className="text-center footerMid">
              <div>
                <Link
                  className="hover:text-[#EE9D35]  text-[16px]"
                  href="/produits"
                >
                  Produits -
                </Link>
                <Link
                  className="hover:text-[#EE9D35]  text-[16px]"
                  href="/prestations/installation"
                >
                  {" "}
                  Installation -
                </Link>
                <Link
                  className="hover:text-[#EE9D35]  text-[16px]"
                  href="/aide-en-ligne"
                >
                  {" "}
                  Aide -
                </Link>

                <Link
                  className="hover:text-[#EE9D35]  text-[16px]"
                  href="/contact"
                >
                  {" "}
                  Contact
                </Link>
              </div>
              <h3 className="pt-1  text-[16px]">
                VBA |{" "}
                <a href="tel:0756944719" className="hover:text-[#EE9D35]">
                  07 56 94 47 19
                </a>{" "}
              </h3>
              <a
                href="https://maps.app.goo.gl/p7MQH6a2DYB64of59"
                className="hover:text-[#EE9D35]"
              >
                110 rue de fontenay 94080 Vincennes
              </a>
              <p>
                <a
                  href="mailto:contact@laboiteautomatique.com"
                  className="hover:text-[#EE9D35]"
                >
                  contact@laboiteautomatique.com
                </a>{" "}
                <br />
                <p className="flex justify-center items-center mt-4 space-x-4">
                  <Link
                    href="https://www.linkedin.com/company/vba-calculateur/"
                    target="_blank"
                    className="hover:bg-bleuvba hover:rounded p-1"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={24} />
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61554187663999"
                    target="_blank"
                    className="hover:bg-bleuvba hover:rounded p-1"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF size={24} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/vbacalculateur/"
                    target="_blank"
                    className="hover:bg-bleuvba hover:rounded p-1"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={24} />
                  </Link>
                  <Link
                    href="https://www.pinterest.fr/vbacalculateur/"
                    target="_blank"
                    className="hover:bg-bleuvba hover:rounded p-1"
                    rel="noopener noreferrer"
                  >
                    <FaPinterest size={24} />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@vbacalculateur"
                    target="_blank"
                    className="hover:bg-bleuvba hover:rounded p-1"
                    rel="noopener noreferrer"
                  >
                    <FaTiktok size={24} />
                  </Link>
                  <Link
                    href="https://twitter.com/vbacalculateur"
                    target="_blank"
                    className="hover:bg-bleuvba hover:rounded p-1"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter size={24} />
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/UCdW6FARqs2Sv6rzeBidaQsw"
                    target="_blank"
                    className="hover:bg-bleuvba hover:rounded p-1"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube size={24} />
                  </Link>
                </p>
              </p>
              <h1 className="pt-6 text-[14px]">
                <a href="/mentions-legales" className="hover:text-[#EE9D35]">
                  Mentions Légales |
                </a>{" "}
                Développé par{" "}
                <a className="text-[#EE9D35]" href="https://clickandtrust.fr/">
                  Click & Trust
                </a>
              </h1>
              <p></p>
            </div>
            {/*  */}
            <div className="">
              <div className="lg:ms-[30px] textCenter">
                <Link href="https://maps.app.goo.gl/p7MQH6a2DYB64of59">
                  <span className="hover:text-[#EE9D35] text-[15px]">
                    Calculateur Renault Nantes (44)
                  </span>
                  <br />
                  <span className="hover:text-[#EE9D35] text-[15px]">
                    Calculateur Renault Montpellier (34)
                  </span>
                  <br />
                  <span className="hover:text-[#EE9D35] text-[15px]">
                    Calculateur Renault Strasbourg (67)
                  </span>
                  <br />
                  <span className="hover:text-[#EE9D35] text-[15px]">
                    Calculateur Renault Bordeaux (33)
                  </span>
                  <br />
                  <span className="hover:text-[#EE9D35] text-[15px]">
                    Calculateur Renault Lille (59)
                  </span>
                  <br />
                  <span className="hover:text-[#EE9D35] text-[15px]">
                    Calculateur Renault Le Havre (76)
                  </span>
                  <br />
                  <span className="hover:text-[#EE9D35] text-[15px]">
                    Calculateur Renault Saint-Étienne (42)
                  </span>
                  <br />
                  <span className="hover:text-[#EE9D35] text-[15px]">
                    Calculateur Renault Toulon (83)
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
