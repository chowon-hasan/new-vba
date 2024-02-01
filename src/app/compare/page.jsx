// Import statements

"use client";

import { useState } from "react";
import Link from "next/link";

const ComparePage = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState(null);
  // const [selectedMachine, setSelectedMachine] = useState(null);

  const brands = ["Renault", "Ford"];

  const models = {
    Renault: [
      {
        name: "Captur",
        years: [
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        versions: [
          "Essence 0.9L - 0.9 Tce",
          "Essence 1.2L - 1.2 Tce",
          "Diesel 1.5L - 1.5 dCi",
        ],
        hrefEssence: "/renault-capture/essence",
        hrefDiesel: "/renault-capture/diesel",
      },
      {
        name: "Clio IV",
        years: [
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        versions: [
          "Essence 0.9L - 0.9 Tce",
          "Essence 1.2L - 1.2 16v",
          "Essence 1.2L - 1.2 Tce",
          "Diesel 1.5L - 1.5 dCi",
          "Essence 1.6L - RS",
        ],
        hrefEssence: "/renault-clio/essence",
        hrefDiesel: "/renault-clio/diesel",
      },

      {
        name: "Clio IV Grandtour",
        years: [
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        versions: [
          "Essence 0.9L - 0.9 Tce",
          "Essence 1.2L - 1.2 16v",
          "Essence 1.2L - 1.2 Tce",
          "Diesel 1.5L - 1.5 dCi",
          "Essence 1.6L - RS",
        ],
        hrefEssence: "/renault-capture/essence",
        hrefDiesel: "/renault-capture/diesel",
      },
      {
        name: "Fluence",
        years: [
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        versions: ["Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/renault-fluence/essence",
        hrefDiesel: "/renault-fluence/diesel",
      },
      {
        name: "Scénic III",
        years: [
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        versions: ["Essence 1.2L - 1.2 Tce", "Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/renault-scenic/essence",
        hrefDiesel: "/renault-scenic/diesel",
      },
      {
        name: "Grand Scénic III",
        years: [
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        versions: ["Essence 1.2L - 1.2 Tce", "Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/renault-scenic/essence",
        hrefDiesel: "/renault-scenic/diesel",
      },
      {
        name: "Megane CC",
        years: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        versions: ["Essence 1.2L - 1.2 Tce", "Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/renault-megane/essence",
        hrefDiesel: "/renault-megane/diesel",
      },
      {
        name: "Megane III Coupé",
        years: [
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        versions: ["Essence 1.2L - 1.2 Tce", "Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/renault-megane/essence",
        hrefDiesel: "/renault-megane/diesel",
      },
      {
        name: "Megane III Grandtour",
        years: [
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ],
        versions: ["Essence 1.2L - 1.2 Tce", "Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/renault-megane/essence",
        hrefDiesel: "/renault-megane/diesel",
      },
      {
        name: "Megane III Hatchback Van",
        years: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
        versions: ["Essence 1.2L - 1.2 Tce", "Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/renault-megane/essence",
        hrefDiesel: "/renault-megane/diesel",
      },
    ],
    Ford: [
      {
        name: "Ford Focus",
        years: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
        versions: ["Essence 1.6L - 1.6 Tce", "Diesel 1.5L - 1.5 dCi"],
        hrefEssence: "/renault-ford/essence",
        hrefDiesel: "/renault-ford/diesel",
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

  // const handleMachineChange = (machine) => {
  //   setSelectedMachine(machine);
  // };

  return (
    <section className="compare">
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
                        <div className="formBox">
                          <p>
                            Véhicule selectionné: {selectedBrand}{" "}
                            {selectedModel} ({selectedYear})
                          </p>
                          <p>Version selectionnée : {selectedVersion}</p>
                          <div className="formButnParent">
                            <Link
                              href={
                                selectedVersion === "Diesel 1.5L - 1.5 dCi"
                                  ? models[selectedBrand].find(
                                      (m) => m.name === selectedModel
                                    )?.hrefDiesel
                                  : models[selectedBrand].find(
                                      (m) => m.name === selectedModel
                                    )?.hrefEssence
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
      </div>
    </section>
  );
};

export default ComparePage;
