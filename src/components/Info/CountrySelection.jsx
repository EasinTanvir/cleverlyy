import React, { useState } from "react";
import { FiSearch, FiCheck } from "react-icons/fi";

import { useContextProvider } from "../../../hooks/useContextProvider";
import { NotFound } from "../NotFound";

const countriesList = [
  { name: "Bangladesh", flag: "🇧🇩", city: "Dhaka" },
  { name: "England", flag: "EN", city: "London" },
  { name: "Sri Lanka", flag: "🇱🇰", city: "Colombo" },
  { name: "Nepal", flag: "🇳🇵", city: "Kathmandu" },
  { name: "India", flag: "🇮🇳", city: "New Delhi" },
  { name: "Pakistan", flag: "🇵🇰", city: "Islamabad" },
  { name: "Singapore", flag: "🇸🇬", city: "Singapore" },
  { name: "Malaysia", flag: "🇲🇾", city: "Kuala Lumpur" },
];

function CountrySelection() {
  const [search, setSearch] = useState("");

  const { selectedCountry, setSelectedCountry } = useContextProvider();

  const filteredCountries = countriesList.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCountryClick = (countryName) => {
    setSelectedCountry(countryName);
  };

  return (
    <div className="flex flex-col items-center p-6  xl:w-[78%] md:w-[88%] w-full  mx-auto ">
      <h2 className="text-black md:text-3xl text-xl  font-bold mb-4">
        SELECT YOUR <span className="text-textColor">COUNTRY & CITY</span>
      </h2>

      <div className="relative w-full mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-10 py-3 text-black rounded-md  bg-transparent border border-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FiSearch className="absolute left-3 top-4 text-black" size={20} />
      </div>

      <div className="grid md:grid-cols-2 gap-4 w-full  px-8 pt-3">
        {filteredCountries.length > 0 &&
          filteredCountries.map((country, index) => (
            <div
              key={country.name}
              className={`flex items-center justify-between p-[18px] rounded-2xl cursor-pointer  bg-white border-[3px] ${
                selectedCountry?.name === country.name
                  ? "border-green-600"
                  : "border-transparent"
              } `}
              onClick={() => handleCountryClick(country)}
            >
              <span className="text-lg font-semibold flex items-center">
                <span className="mr-2">{country.flag}</span> {country.name}
              </span>

              <span
                className={`w-6 h-6 rounded-full ${
                  selectedCountry?.name === country.name
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-white"
                }   flex-center`}
              >
                <FiCheck className=" p-0.5" size={24} />
              </span>
            </div>
          ))}
      </div>

      {filteredCountries.length === 0 && (
        <div className=" mt-1">
          <NotFound title="No Country Found" />
        </div>
      )}
    </div>
  );
}

export default CountrySelection;
