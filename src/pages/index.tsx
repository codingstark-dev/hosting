import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
import { useState } from "react";
import { AppConfig } from "./../utils/AppConfig";
import { DomainData } from "./../interface/domain";

const Index = () => {
  const [domainName, setdomainName] = useState("");
  const [error, seterror] = useState("");
  const [domainData, setdomainData] = useState<DomainData>();
  let getDomainDetails = async () => {
    var patt = new RegExp(AppConfig.regex.domain).test(domainName);
    if (patt) {
      let data = await fetch(
        `http://localhost:3000/api/domain?domainQuery=${domainName}`
      ).then((e) => e.json());
      setdomainData(data);
      console.log(data);
    } else if (patt == false || patt == null) {
      seterror("Enter Valid url!!");
    }
  };
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="p-2 text-center">
        <div className="text-gray-600 shadow-md rounded-lg border-[1px] dark:bg-gray-200 flex mt-4">
          <input
            type="search"
            onChange={(e) => {
              setdomainName(e.target.value);
            }}
            placeholder="Search Domain..."
            className="bg-transparent w-full pl-3 h-14 text-sm focus:outline-none text-black "
          />
          <button
            onClick={() => {
              getDomainDetails();
            }}
            className="mt-3 mr-3 bg-yellow-600 w-[96px] flex justify-center h-8 items-center rounded text-white"
          >
            <svg width="1em" height="1em" viewBox="0 0 24 24">
              <path
                d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="text-sm mr-1">Search</span>
          </button>
        </div>{" "}
        <span className="font-bold text-red-500 text-center">{error}</span>
      </div>

      {domainData?.domain?.result?.map((e) => {
        return <h1>{e.legacyStatus}</h1>;
      })}
    </Main>
  );
};

export default Index;
