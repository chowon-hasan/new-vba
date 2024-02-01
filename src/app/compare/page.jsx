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
        years: ["2008"],
        versions: ["1.2 Essence", "1.5 Diesel"],
        machines: ["1197 ccm, 85 KW", "1461 ccm, 81 KW"],
        href: "/product/clio",
      },
      {
        name: "Megane",
        years: ["2011-2016"],
        versions: ["1.6 Hatchback", "2.0 GT"],
        machines: ["1598 ccm, 81 KW", "1998 ccm, 162 KW"],
        href: "/product/clio",
      },
      {
        name: "Captur",
        years: ["2013"],
        versions: ["1.2 T", "1.2 TCe", "1.2TCe - 120", "1.5 dCi", "1.5 dCi 90"],
        machines: ["898 ccm, 66 KW", "1461 ccm, 66 KW"],
        href: "/product/clio",
      },
      {
        name: "Clio IV Grandtour",
        years: ["2012"],
        versions: ["1.5 dCi", "0.9 TCe"],
        machines: ["1461 ccm, 66 KW", "898 ccm, 66 KW"],
        href: "/product/clio",
      },
      {
        name: "Fluence",
        years: ["2010"],
        versions: ["1.6 Essence", "1.5 dCi"],
        machines: ["1598 ccm, 81 KW", "1461 ccm, 66 KW"],
        href: "/product/clio",
      },
      {
        name: "Scénic III",
        years: ["2009-2015"],
        versions: ["1.5 dCi", "1.6 VVT"],
        machines: ["1461 ccm, 81 KW", "1598 ccm, 81 KW"],
        href: "/product/clio",
      },
      {
        name: "Grand Scénic III",
        years: ["2011-2017"],
        versions: ["1.5 dCi", "1.6 VVT"],
        machines: ["1461 ccm, 81 KW", "1598 ccm, 81 KW"],
        href: "/product/clio",
      },
      {
        name: "Megane CC",
        years: ["2010-2016"],
        versions: ["1.4 TCe", "2.0 GT"],
        machines: ["1397 ccm, 96 KW", "1998 ccm, 162 KW"],
        href: "/product/clio",
      },
      {
        name: "Megane III Coupé",
        years: ["2008-2013"],
        versions: ["1.6 VVT", "2.0 TCe"],
        machines: ["1598 ccm, 81 KW", "1998 ccm, 132 KW"],
        href: "/product/clio",
      },
      {
        name: "Megane III Grandtour",
        years: ["2008-2015"],
        versions: ["1.5 dCi", "1.6 VVT"],
        machines: ["1461 ccm, 81 KW", "1598 ccm, 81 KW"],
        href: "/product/clio",
      },
      {
        name: "Megane III Hatchback Van",
        years: ["2008-2014"],
        versions: ["1.5 dCi", "1.6 VVT"],
        machines: ["1461 ccm, 81 KW", "1598 ccm, 81 KW"],
        href: "/product/clio",
      },
    ],
    Ford: [
      {
        name: "Ford Focus",
        years: ["2008", "2009"],
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
