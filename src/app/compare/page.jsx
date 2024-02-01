// Import statements

"use client";

import { useState } from "react";
import Link from "next/link";

const ComparePage = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [selectedMachine, setSelectedMachine] = useState(null);

  const brands = ["Renault", "Ford"];

  const models = {
    Renault: [
      {
        name: "Clio IV",
        years: ["de 11/2012 à 12/2023"],
        versions: [
          "0.9 TCe 75",
          "0.9 TCe 90",
          "0.9 TCe 90 LPG",
          "1.2 16V",
          "1.2 LPG",
          "1.2 LPG 16V",
          "1.2 TCe 120",
          "1.5 dCi",
          "1.5 dCi 75",
          "1.5 dCi 90",
          "1.5 dCi 110",
          "1.6 RS",
          "1.6 RS Trophy",
        ],
        machines: [
          "898 ccm, 56 KW, 76 Chevaux",
          "898 ccm, 66 KW, 90 Chevaux",
          "1149 ccm, 55 KW, 75 Chevaux",
          "1149 ccm, 54 KW, 73 Chevaux",
          "1149 ccm, 53 KW, 72 Chevaux",
          "1149 ccm, 54 KW, 73 Chevaux",
          "1197 ccm, 87 KW, 118 Chevaux",
          "1197 ccm, 88 KW, 120 Chevaux",
          "1461 ccm, 62 KW, 84 Chevaux",
          "1461 ccm, 63 KW, 86 Chevaux",
          "1461 ccm, 55 KW, 75 Chevaux",
          "1461 ccm, 66 KW, 90 Chevaux",
          "1461 ccm, 81 KW, 110 Chevaux",
          "1618 ccm, 147 KW, 200 Chevaux",
          "1618 ccm, 162 KW, 220 Chevaux",
        ],
        href: "/product/clio",
      },
      {
        name: "Captur",
        years: ["de 06/2013 à 12/2023"],
        versions: [
          "1.2 T",
          "1.2 TCe",
          "1.2TCe - 120",
          "1.5 dCi",
          "1.5 dCi 90",
          "1.5 dCi 110",
        ],
        machines: [
          "1197 ccm, 85 KW, 116 Chevaux, 66 KW",
          "1197 ccm, 83 KW, 113 Chevaux",
          "1197 ccm, 97 KW, 132 Chevaux",
          "1197 ccm, 87 KW, 118 Chevaux",
          "1197 ccm, 88 KW, 120 Chevaux",
          "1461 ccm, 63 KW, 86 Chevaux",
          "1461 ccm, 66 KW, 90 Chevaux",
          "1461 ccm, 81 KW, 110 Chevaux",
        ],
        href: "/product/clio",
      },
      {
        name: "Clio IV Grandtour",
        years: ["de 11/2012 à 12/2023"],
        versions: [
          "0.9 TCe 75",
          "0.9 TCe 90",
          "1.2 16V",
          "1.2 LPG",
          "1.2 TCe 120",
          "1.5 dCi 75",
          "1.5 dCi 90",
          "1.5 dCi 110",
        ],
        machines: [
          "898 ccm, 56 KW, 76 Chevaux",
          "898 ccm, 66 KW, 90 Chevaux",
          "1149 ccm, 54 KW, 73 Chevaux",
          "1197 ccm, 87 KW, 118 Chevaux",
          "1197 ccm, 88 KW, 120 Chevaux",
          "1461 ccm, 55 KW, 75 Chevaux",
          "1461 ccm, 66 KW, 90 Chevaux",
          "1461 ccm, 81 KW, 110 Chevaux",
        ],
        href: "/product/clio",
      },
      {
        name: "Fluence",
        years: ["de 02/2010 à 12/2023"],
        versions: ["1.5 dCi"],
        machines: [
          "1461 ccm, 70 KW, 95 Chevaux",
          "1461 ccm, 63 KW, 86 Chevaux",
          "1461 ccm, 66 KW, 90 Chevaux",
          "1461 ccm, 78 KW, 106 Chevaux",
          "1461 ccm, 81 KW, 110 Chevaux",
        ],
        href: "/product/clio",
      },
      {
        name: "Scénic III",
        years: ["de 02/2009 à 12/2023"],
        versions: ["1.5 dCi"],
        machines: [
          "1461 ccm, 70 KW, 95 Chevaux",
          "1461 ccm, 63 KW, 86 Chevaux",
          "1461 ccm, 78 KW, 106 Chevaux",
          "1461 ccm, 81 KW, 110 Chevaux",
        ],
        href: "/product/clio",
      },
      {
        name: "Grand Scénic III",
        years: ["de 02/2009 à 12/2023"],
        versions: ["1.5 dCi"],
        machines: [
          "1461 ccm, 70 KW, 95 Chevaux",
          "1461 ccm, 63 KW, 86 Chevaux",
          "1461 ccm, 78 KW, 106 Chevaux",
          "1461 ccm, 81 KW, 110 Chevaux",
        ],
        href: "/product/clio",
      },
      {
        name: "Megane CC",
        years: ["de 06/2010 à 12/2016"],
        versions: ["1.2 TCe", "1.5 dCi"],
        machines: [
          "1197 ccm, 97 KW, 132 Chevaux",
          "1198 ccm, 85 KW, 116 Chevaux",
          "1461 ccm, 78 KW, 106 Chevaux",
          "1461 ccm, 81 KW, 110 Chevaux",
        ],
        href: "/product/clio",
      },
      {
        name: "Megane III Coupé",
        years: ["de 08/2011 à 08/2015"],
        versions: ["1.2 TCe", "1.5 dCi"],
        machines: [
          "1197 ccm, 97 KW, 132 Chevaux",
          "1198 ccm, 85 KW, 116 Chevaux",
          "1461 ccm, 70 KW, 95 Chevaux",
          "1461 ccm, 81 KW, 110 Chevaux",
          "1461 ccm, 78 KW, 106 Chevaux",
          "1461 ccm, 63 KW, 86 Chevaux",
          "1461 ccm, 66 KW, 90 Chevaux",
        ],
        href: "/product/clio",
      },
      {
        name: "Megane III Grandtour",
        years: ["de 02/2009 à 12/2023"],
        versions: ["1.2 TCe", "1.5 dCi"],
        machines: [
          "1197 ccm, 97 KW, 132 Chevaux",
          "1198 ccm, 85 KW, 116 Chevaux",
          "1461 ccm, 70 KW, 95 Chevaux",
          "1461 ccm, 63 KW, 86 Chevaux",
          "1461 ccm, 66 KW, 90 Chevaux",
          "1461 ccm, 78 KW, 106 Chevaux",
          "1461 ccm, 81 KW, 110 Chevaux",
        ],
        href: "/product/clio",
      },
      {
        name: "Megane III Hatchback Van",
        years: ["de 11/2008 à 08/2015"],
        versions: ["1.5 dCi"],
        machines: [
          "1461 ccm, 81 KW, 110 Chevaux",
          "1461 ccm, 66 KW, 90 Chevaux",
        ],
        href: "/product/clio",
      },
    ],
    Ford: [
      {
        name: "Ford Focus",
        years: ["de 11/2008 à 08/2015"],
        versions: ["1.6 Diesel", "1.6 Essence"],
        machines: ["toute cylindrée"],
        href: "/produits/essence/ford-focus",
      },
    ],
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    setSelectedModel(null);
    setSelectedYear(null);
    setSelectedVersion(null);
    setSelectedMachine(null);
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
    setSelectedYear(null);
    setSelectedVersion(null);
    setSelectedMachine(null);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedVersion(null);
    setSelectedMachine(null);
  };

  const handleVersionChange = (version) => {
    setSelectedVersion(version);
    setSelectedMachine(null);
  };

  const handleMachineChange = (machine) => {
    setSelectedMachine(machine);
  };

  return (
    <section className="md:py-[200px] compare">
      <div className="container mx-auto">
        <h2 className="text-[30px] text-center text-white mb-5">
          CHERCHEZ VOTRE VEHICULE
        </h2>
        <div className="compareParent">
          <div className="compareCont">
            <div className="labandsel">
              <label className="formLabel">Marque:</label>
              <select
                className="formSelect"
                onChange={(e) => handleBrandChange(e.target.value)}
                value={selectedBrand || ""}
              >
                <option value="" disabled>
                  Sélectionnez marque
                </option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {selectedBrand && (
            <div className="compareCont">
              <div className="labandsel">
                <label className="formLabel">Modèle:</label>
                <select
                  className="formSelect"
                  onChange={(e) => handleModelChange(e.target.value)}
                  value={selectedModel || ""}
                >
                  <option value="" disabled>
                    Sélectionnez modèle
                  </option>
                  {models[selectedBrand].map((model) => (
                    <option key={model.name} value={model.name}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedModel && (
                <div className="compareCont">
                  <div className="labandsel">
                    <label className="formLabel">Année:</label>
                    <select
                      className="formSelect"
                      onChange={(e) => handleYearChange(e.target.value)}
                      value={selectedYear || ""}
                    >
                      <option value="" disabled>
                        Sélectionnez année
                      </option>
                      {models[selectedBrand]
                        .find((m) => m.name === selectedModel)
                        ?.years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                    </select>
                  </div>

                  {selectedYear && (
                    <div className="compareCont">
                      <div className="labandsel">
                        <label className="formLabel">Version:</label>
                        <select
                          className="formSelect"
                          onChange={(e) => handleVersionChange(e.target.value)}
                          value={selectedVersion || ""}
                        >
                          <option value="" disabled>
                            Sélectionnez version
                          </option>
                          {models[selectedBrand]
                            .find((m) => m.name === selectedModel)
                            ?.versions.map((version) => (
                              <option key={version} value={version}>
                                {version}
                              </option>
                            ))}
                        </select>
                      </div>

                      {selectedVersion && (
                        <div className="compareCont">
                          <div className="labandsel">
                            <label className="formLabel">Moteur:</label>
                            <select
                              className="formSelect"
                              onChange={(e) =>
                                handleMachineChange(e.target.value)
                              }
                              value={selectedMachine || ""}
                            >
                              <option value="" disabled>
                                Sélectionnez motorisation
                              </option>
                              {models[selectedBrand]
                                .find((m) => m.name === selectedModel)
                                ?.machines.map((machine) => (
                                  <option key={machine} value={machine}>
                                    {machine}
                                  </option>
                                ))}
                            </select>
                          </div>

                          {selectedMachine && (
                            <div className="formBox">
                              <p>
                                Véhicule selectionné: {selectedBrand}{" "}
                                {selectedModel} ({selectedYear})
                              </p>
                              <p>Version selectionnée : {selectedVersion}</p>
                              <p>Version selectionnée: {selectedMachine}</p>
                              <div className="formButnParent">
                                <Link
                                  href={
                                    models[selectedBrand].find(
                                      (m) => m.name === selectedModel
                                    )?.href
                                  }
                                >
                                  <button className="formBoxButton">
                                    Commander
                                  </button>
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ComparePage;
