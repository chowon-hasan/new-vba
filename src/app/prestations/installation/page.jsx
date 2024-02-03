"use client";
import Head from "next/head";
import { useState } from "react";

const AutreFormulaire = () => {
  const [isError, setIsError] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [isTel, setIsTel] = useState(false);

  const [formData, setFormData] = useState({
    vehicle: "Renault Captur",
    year: "Entre 2009 et 2015",
    fuel: "Diesel",
    service: "Module seul",
    region: "Ile-de-France", // Par défaut, vous pouvez mettre la région que vous souhaitez
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isPhoneNumberValid = (phoneNumber) => {
    // Utilisez une expression régulière pour vérifier si le numéro de téléphone est valide
    const phoneRegex = /^[0-9]{10}$/; // Uniquement des chiffres, exactement 9 chiffres
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone || !isPhoneNumberValid(formData.phone)) {
      setIsTel(true);
      return;
    }

    try {
      const response = await fetch("/api/sendContact/sendInstallation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsOk(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire", error);
    }
  };

  return (
    <section className="py-[80px] produits">
      <div className="container mx-auto">
        <div className="relative">
          <div className="flex flex-col z-20 items-center justify-center min-h-screen ">
            {/* <Head>
              <title>
                Comment monter, démonter et installer un calculateur de boîte
                automatique Renault
              </title>
            </Head> */}

            <div className="installTitle text-2xl text-center my-10 lg:mx-16 bg-[#EE9D35] text-white z-20 rounded-2xl p-3">
              <p>Montage, démontage et reprogrammation du calculateur </p>
              <a href="/produit" className="font-bold">
                Renault (Clio IV, Captur, Mégane, Scénic) ou Ford Focus
              </a>
              <span className="block mt-2 contactTitle">
                Contactez-nous via le formulaire ci-dessous ou par tél. au{" "}
                <a
                  className="hover:text-bleuvba  font-bold"
                  href="tel:0756944719"
                >
                  07 56 94 47 19
                </a>
              </span>
            </div>
            <div className="installForm">
              <form
                onSubmit={handleSubmit}
                className="h-full z-20 shadow-xl  mb-10 p-4 bg-white/95 border-2 border-orangevba rounded-2xl"
              >
                <h1 className="sr-only">
                  Montage démontage installation calculateur boîte automatique
                  Renault
                </h1>

                <h2 className="text-2xl font-bold text-gray-700  text-center  mb-3 ">
                  Installation
                </h2>
                <h2 className="sr-only">
                  Montage calculateur de boîte automatique Renault
                </h2>
                <h2 className="sr-only">
                  Démontage calculateur de boîte automatique Renault
                </h2>
                <h2 className="sr-only">
                  Installation calculateur de boîte automatique Renault
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Sélection du véhicule */}
                  <div className="mb-3">
                    <label
                      htmlFor="vehicle"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      Sélection du véhicule *
                    </label>
                    <select
                      id="vehicle"
                      name="vehicle"
                      className="forminputFields"
                      onChange={handleChange}
                      required
                    >
                      <option value="Renault Captur">Renault Captur</option>
                      <option value="Renault Megane">Renault Megane</option>
                      <option value="Renault Clio IV">Renault Clio IV</option>
                      <option value="Renault Scenic">Renault Scenic</option>
                      <option value="Renault Fluence">Renault Fluence</option>
                      <option value="Ford Focus">Ford Focus</option>
                      {/* <option value="Mercedes Class A">Mercedes Class A</option>
                      <option value="Mercedes Class B">Mercedes Class B</option> */}
                    </select>
                  </div>

                  {/* Année (Liste déroulante) */}
                  <div className="mb-3">
                    <label
                      htmlFor="year"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      Année *
                    </label>
                    <select
                      id="year"
                      name="year"
                      className="forminputFieldsYear"
                      required
                      onChange={handleChange}
                    >
                      {/* Options pour les années - Vous pouvez ajuster selon vos besoins */}
                      <option value="2008">2008</option>
                      <option value="2009">2009</option>
                      <option value="2010">2010</option>
                      <option value="2011">2011</option>
                      <option value="2012">2012</option>
                      <option value="2013">2013</option>
                      <option value="2014">2014</option>
                      <option value="2015">2015</option>
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                    </select>
                  </div>

                  {/* Diesel ou Essence */}
                  <div className="mb-3">
                    <label
                      htmlFor="fuel"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      Carburant *
                    </label>
                    <select
                      id="fuel"
                      name="fuel"
                      required
                      className="forminputFields"
                      onChange={handleChange}
                    >
                      <option value="Diesel">Diesel</option>
                      <option value="Essence">Essence</option>
                    </select>
                  </div>

                  {/* Sélection de la prestation */}
                  <div className="mb-3">
                    <label
                      htmlFor="service"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      Prestation *
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="forminputFields"
                      required
                      onChange={handleChange}
                    >
                      <option value="Module seul">Module seul</option>
                      <option value="Module + Installation">
                        Module + Installation
                      </option>
                    </select>
                  </div>

                  {/* Sélection de la région */}
                  <div className="mb-3">
                    <label
                      htmlFor="region"
                      className="block pl-2 text-sm font-medium text-gray-600"
                    >
                      Région *
                    </label>
                    <select
                      id="region"
                      name="region"
                      className="forminputFields"
                      required
                      onChange={handleChange}
                    >
                      <option value="Ile-de-France">Ile-de-France</option>
                      <option value="Auvergne-Rhône-Alpes">
                        Auvergne-Rhône-Alpes
                      </option>
                      <option value="Bourgogne-Franche-Comté">
                        Bourgogne-Franche-Comté
                      </option>
                      <option value="Bretagne">Bretagne</option>
                      <option value="Centre-Val de Loire">
                        Centre-Val de Loire
                      </option>
                      <option value="Corse">Corse</option>
                      <option value="Grand Est">Grand Est</option>
                      <option value="Hauts-de-France">Hauts-de-France</option>
                      <option value="Normandie">Normandie</option>
                      <option value="Nouvelle-Aquitaine">
                        Nouvelle-Aquitaine
                      </option>
                      <option value="Occitanie">Occitanie</option>
                      <option value="Pays de la Loire">Pays de la Loire</option>
                      <option value="Provence Alpes Côte d’Azur">
                        Provence Alpes Côte d’Azur
                      </option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guyane">Guyane</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Réunion">Réunion</option>
                    </select>
                  </div>
                </div>

                {/* Numéro de téléphone */}
                <div className="mb-3">
                  <label
                    htmlFor="tel"
                    className="block pl-2 text-sm font-medium text-gray-600"
                  >
                    Téléphone*
                  </label>
                  <input
                    placeholder="0123456789"
                    type="tel"
                    id="phone"
                    name="phone"
                    className="forminputFields"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block pl-2 text-sm font-medium text-gray-600"
                  >
                    Nom prénom*
                  </label>
                  <input
                    placeholder="Jean Dupont"
                    type="name"
                    id="name"
                    name="name"
                    className="forminputFields"
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Adresse Email */}
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block pl-2 text-sm font-medium text-gray-600"
                  >
                    Adresse e-mail*
                  </label>
                  <input
                    placeholder="votre-adresse@mail.com"
                    type="email"
                    id="email"
                    name="email"
                    className="forminputFields"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label
                    htmlFor="message"
                    className="block pl-2 text-sm font-medium text-gray-600"
                  >
                    Message*
                  </label>
                  <textarea
                    placeholder="Merci de préciser l'objet de votre demande. Nous nous engageons à vous répondre sous 24 heures."
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="forminputFields"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <p className="text-red-500">
                  {isTel
                    ? "Erreur lors de l'envoi du formulaire, vérifier votre numéro de téléphone"
                    : ""}
                </p>
                <p className="text-red-500">
                  {isError ? "Erreur lors de l'envoi du formulaire" : ""}
                </p>
                <p className="text-green-500">
                  {isOk ? "Formulaire envoyé avec succès" : ""}
                </p>

                {/* Bouton Envoyer */}
                <button
                  type="submit"
                  className="bg-orangevba text-white px-10 py-2 rounded-full font-bold hover:brightness-110 mx-auto block"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutreFormulaire;
