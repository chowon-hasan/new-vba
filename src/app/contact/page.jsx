"use client";
import Head from "next/head";
import { useState } from "react";

const Contact = () => {
  const [isError, setIsError] = useState(false);
  const [isTel, setIsTel] = useState(false);
  const [isOk, setIsOk] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
    category: "Renault Captur", // Ajout de la catégorie
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Si c'est le menu déroulant, mettez à jour la valeur dans l'objet formData
    if (name === "category") {
      setFormData((prevData) => ({ ...prevData, category: value }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
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
      const response = await fetch("/api/sendContact", {
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
    <section className="produits">
      <div className="relative">
        <div className="flex flex-col  items-center justify-center min-h-screen">
          {/* <Head>
            <title>
              Contactez-nous pour commander un calculateur de boîte automatique
              Renault
            </title>
          </Head> */}

          <div className="conatctTitleBody bg-[#EE9D35] md:w-[846px] py-4 text-center rounded-md mb-5">
            <h1 className="contactTitle headingText font-bold  my-3 text-white">
              Contactez-nous
            </h1>
          </div>

          <div className="contactForm md:w-[846px]">
            <form
              onSubmit={handleSubmit}
              className="w-full z-20 shadow-xl border-2 border-orangevba p-4 bg-white/95 rounded-2xl"
            >
              <h1 className="text-2xl text-center text-gray-500 font-bold mb-4">
                Contactez-nous
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nom et Prénom */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block pl-2 text-sm font-medium text-gray-600"
                  >
                    Nom / Prénom *
                  </label>
                  <input
                    placeholder="Jean Dupont"
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-xl"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Adresse Email */}
                <div className="mb-4">
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
                    className="mt-1 p-2 w-full border border-gray-300 rounded-xl"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Téléphone */}
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block pl-2 text-sm font-medium text-gray-600"
                  >
                    Téléphone*
                  </label>
                  <input
                    placeholder="0123456789"
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-xl"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Catégories (Menu déroulant) */}
                <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="block pl-2 text-sm font-medium text-gray-600"
                  >
                    Objet de la demande*
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-xl"
                    required
                    onChange={handleChange} // Ajout de la gestion du changement
                  >
                    {/* Remplacez les options par vos propres catégories */}
                    <option value="Renault Captur">Renault Captur</option>
                    <option value="Renault Megane">Renault Megane</option>
                    <option value="Renault Clio IV">Renault Clio IV</option>
                    <option value="Renault Scenic">Renault Scenic</option>
                    <option value="Renault Fluence">Renault Fluence</option>
                    <option value="Ford Focus">Ford Focus</option>
                    <option value="Mercedes Class A">Mercedes Class A</option>
                    <option value="Mercedes Class B">Mercedes Class B</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-4">
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
                  className="mt-1 p-2 w-full border border-gray-300 rounded-xl"
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
    </section>
  );
};

export default Contact;
