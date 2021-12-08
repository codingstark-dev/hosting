import { useState } from 'react';

import { getHostingPages } from '../config/notion';
import { DomainData } from '../interface/domain';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

const Index = () => {
  const [domainName, setdomainName] = useState('');
  const [error, seterror] = useState('');
  const [domainData, setdomainData] = useState<DomainData>();
  const getDomainDetails = async () => {
    const patt = new RegExp(AppConfig.regex.domain).test(domainName);
    console.log(patt);
    if (patt) {
      const data = await fetch(
        `http://localhost:3000/api/domain?domainQuery=${domainName}`
      ).then((e) => e.json());
      setdomainData(data);
      console.log(data);
    } else if (patt === false || patt === null) {
      seterror('Enter Valid url!!');
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
      {/* <div
        style={{
          backgroundImage: "url(http://via.placeholder.com/1920x900);",
          width: "100%",
          height: 600,
        }}
      >
        {" "}
      </div> */}
      <br />
      <div className="max-w-screen-xl mx-auto">
        <div
          className="lg:relative w-full h-96"
          // style={{ width: "1232px", height: "520px" }}
        >
          {" "}
          <p
            className="lg:absolute  leading-loose text-gray-500 text-xl md:m-auto font-bold"
            style={{ width: "608px", left: 0, top: "40px" }}
          >
            {`Host your Website on CLOUD Hosting`}
          </p>
          <p
            className=" lg:absolute leading-10 text-gray-800 font-bold text-4xl mx-0 mt-0 mb-6 p-0 tracking-normal md:justify-center md:mx-auto md:mt-0 md:mb-6 lg:text-5xl"
            style={{ width: "608px", left: 0, top: "80px" }}
          >
            {` That's Faster,Secure &amp;`}
            <span className="text-indigo-400">fully managed.</span>
          </p>
          <p
            className="lg:absolute text-base leading-loose text-gray-500 font-medium"
            style={{ width: "608px", left: 0, top: "170px" }}
          >
            {`Our managed cloud services make sure that your website is fast,
            secure &amp; always up so visitors and search engines trust you.
            Starting from $2.00 per month.`}
          </p>
          <div
            className="lg:absolute hidden lg:block right-0 top-0 bg-gray-200 rounded-3xl"
            style={{ width: "504px", height: "400px" }}
          />
          <div
            className="inline-flex items-center justify-center w-40 p-3 lg:absolute bg-indigo-500 shadow rounded-lg"
            style={{ left: 0, top: "250px" }}
          >
            <button className="text-sm leading-normal text-white">
              GET STARTED NOW
            </button>
          </div>
        </div>
        <div
          className="flex justify-center mx-auto  "
          // style={{ width: 1284.59, height: 439.32 }}
        >
          <div
            className="inline-flex flex-col space-y-7 items-center justify-end px-24 py-20  bg-indigo-500 rounded-2xl"
            // style={{ width: 1232, height: 432, left: 20.49, top: 7.32 }}
          >
            <p
              className="text-4xl lg:text-6xl  font-bold leading-tight text-center text-white"
              // style={{ width: 1024 }}
            >
              Find the perfect domain name
            </p>
            <p
              className="text-base leading-loose text-center text-gray-200"
              // style={{ width: 608 }}
            >
              Enter your select domain name and choose any extension name in the
              next step (choose between .com, .online, .tech, .site, .net, and
              more)
            </p>
            <div className="bg-white text-gray-600 shadow-md rounded-lg border-[1px] dark:bg-gray-200 flex mt-4">
              <input
                type="search"
                onChange={(e) => {
                  setdomainName(e.target.value);
                }}
                placeholder="Search Domain..."
                className="lg:w-96 w-72 bg-white pl-3 h-14 text-sm focus:outline-none text-black "
              />
              <button
                onClick={() => {
                  getDomainDetails();
                }}
                className="mt-3 mr-3 bg-indigo-400 w-[96px] flex justify-center h-8 items-center rounded text-white"
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
            <div className="flex font-bold space-x-10 text-white">
              <div>.COM only RS 199 </div> <div>.IN only Rs 299</div>
            </div>
            <span className="font-bold text-red-500 text-center">{error}</span>
            {domainData?.domain?.result?.map((e, index) => {
              return <h1 key={index}>{e.legacyStatus}</h1>;
            })}
          </div>
        </div>
        <br />
        <br />

        <div className="container flex flex-wrap pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
          <div className="w-full px-0 lg:px-4">
            <h2 className="px-12 text-base font-bold text-center md:text-2xl text-blue-700">
              Best Hosting Platform. Multiple Server Options.
            </h2>
            <p className="py-1 text-sm text-center text-blue-700 mb-10">
              VARIOUS HOSTING PLATFORMS TO MEET EVERY NEED!
            </p>
            <div className="flex flex-wrap items-center justify-center py-4 pt-0">
              <div className="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
                <label className="flex flex-col rounded-lg shadow-lg group relative cursor-pointer hover:shadow-2xl">
                  <div className="w-full px-4 py-6 rounded-t-lg card-section-1">
                    <h3 className="mx-auto text-base font-semibold text-center underline text-indigo-500 ">
                      Shared Hosting
                    </h3>
                    {/* <p className="text-5xl font-bold text-center group-hover:text-white text-indigo-500">
                      $25.<span className="text-3xl">95</span>
                    </p> */}
                    <p className="text-xs text-center uppercase  text-indigo-500">
                      all features that need you to get started including 400+
                      Scripts like WordPress, Jumla, Drupal, Ecommerece, etc
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-indigo-500">
                    <p className="text-xl text-white">Starting from $1.0/mo.</p>
                    <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-indigo-500">
                      See Plans
                    </button>
                  </div>
                </label>
              </div>
              <div className="w-full p-4 md:w-1/2 lg:w-1/4">
                <label className="flex flex-col rounded-lg shadow-lg relative cursor-pointer hover:shadow-2xl">
                  <div className="w-full px-4 py-8 rounded-t-lg c">
                    <h3 className="mx-auto text-base font-semibold text-center underline text-indigo-500 group-hover:text-white">
                      Cloud Hosting
                    </h3>
                    {/* <p className="text-5xl font-bold text-center text-white">
                      $21.<span className="text-3xl">95</span>
                    </p> */}
                    <p className="text-xs text-center uppercase text-indigo-500 ">
                      Go with Ultra Fast Cloud Hosting Powered by Digital Ocean
                      & Linode servers.
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-indigo-700">
                    <p className="text-xl text-white">
                      Starting from $2.00/mo.
                    </p>
                    <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-indigo-500">
                      See Plans
                    </button>
                  </div>
                </label>
              </div>
              <div className="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
                <label className="flex flex-col rounded-lg shadow-lg group card-group relative hover:bg-jblue-secondary cursor-pointer hover:shadow-2xl">
                  <div className="w-full px-4 py-6 rounded-t-lg card-section-1">
                    <h3 className="mx-auto text-base font-semibold text-center underline text-indigo-500 ">
                      VPS Hosting
                    </h3>
                    {/* <p className="text-5xl font-bold text-center group-hover:text-white text-indigo-500">
                      $19.<span className="text-3xl">45</span>
                    </p> */}
                    <p className="text-xs text-center uppercase  text-indigo-500">
                      High Performance VPS with Simplicity, Scalability &
                      unmetered traffic up to 2 Gb/s
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-indigo-500">
                    <p className="text-xl text-white">Starting from $8.5/mo.</p>
                    <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-indigo-500">
                      See Plans
                    </button>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h2 className="px-12 text-base font-bold text-center md:text-2xl text-blue-700">
          What makes AmbitionHost the best choise for you?
        </h2>

        <hr />

        <br />

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {/* 1 card */}
            <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                {/* svg  */}
                <svg width="1.5em" height="1.5em" viewBox="0 0 48 48">
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="6" y="6" width="36" height="36" rx="3"></rect>
                    <path d="M14 29l10-10l10 10"></path>
                  </g>
                </svg>
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold my-2">Uptime Guaranteed.</p>

                <p className="text-sm">
                  We are providing a 99.99% uptime guarantee in cloud hosting.
                  (except scheduled maintenance (5 minutes to 30 minutes). In
                  Shared Hosting 99.95% uptime guarantee means your websites
                  will always be available.
                </p>
              </div>
            </div>
            {/* 2 card */}
            <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                {/* svg  */}
                <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
                  <g strokeWidth="1.5" fill="none">
                    <path
                      d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6z"
                      stroke="currentColor"
                    ></path>
                    <path
                      d="M15 8.5c-.685-.685-1.891-1.161-3-1.191M9 15c.644.86 1.843 1.35 3 1.391m0-9.082c-1.32-.036-2.5.561-2.5 2.191c0 3 5.5 1.5 5.5 4.5c0 1.711-1.464 2.446-3 2.391m0-9.082V5.5m0 10.891V18.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold my-2">
                  Money-back Guarantee
                </p>
                <p className="text-sm">
                  We offer a 30-day moneyback guarantee on all of our plans.
                  We're extremely confident that you'll never need to find
                  another host after becoming a part of The AmbitionHost
                  Experience!
                </p>
              </div>
            </div>
            {/* 3 card */}
            <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                {/* svg  */}
                <svg width="1.5em" height="1.5em" viewBox="0 0 512 512">
                  <path
                    d="M294.1 365.5c-2.6-1.8-7.2-4.5-17.5-4.5H160.5c-34.7 0-64.5-26.1-64.5-59.2V201h-1.8C67.9 201 48 221.5 48 246.5v128.9c0 25 21.4 40.6 47.7 40.6H112v48l53.1-45c1.9-1.4 5.3-3 13.2-3h89.8c23 0 47.4-11.4 51.9-32l-25.9-18.5z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M401 48H183.7C149 48 128 74.8 128 107.8V276c0 33.1 28 60 62.7 60h101.1c10.4 0 15 2.3 17.5 4.2L384 400v-64h17c34.8 0 63-26.9 63-59.9V107.8c0-33-28.2-59.8-63-59.8z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold my-2">Amazing support</p>
                <p className="text-sm">
                  We are more responsive on WhatsApp and voice call, for any
                  kind of support, message us. If you will email or open a
                  ticket, then response time may be in some hours.
                </p>
              </div>
            </div>
            {/* 4 card */}
            <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
                {/* svg  */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold my-2">Reliable Price</p>
                <p className="text-sm">
                  {" "}
                  We are providing reliable price for all plans.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="box-border font-bold text-2xl mb-14 text-center">
          What makes AmbitionHost the best choise for you?
        </h2>
        <div className="flex flex-col md:flex-row px-2 md:px-0">
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
            <h3 className="text-gray-600 text-lg">Base</h3>
            <p className="text-gray-600 mt-1">
              <span className="font-bold text-black text-4xl">$69</span> /Month
            </p>
            <p className="text-sm text-gray-600 mt-2">
              For most businesses that want to optimize web queries.
            </p>
            <div className="text-sm text-gray-600 mt-4">
              <p className="my-2">✓ All qlimited links</p>
              <p className="my-2">✓ Own analytics platform</p>
              <p className="my-2">✓ Chat support</p>
              <p className="my-2">✓ Optimize hashtags</p>
              <p className="my-2">✓ Unlimited users</p>
            </div>
            <button className="w-full text-indigo-700 border border-indigo-700 rounded hover:bg-indigo-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
              Choose Plan
            </button>
          </div>
          <div className="w-full md:w-1/3 text-white bg-indigo-700 rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
            <h3 className="text-lg">Popular</h3>
            <p className="mt-1">
              <span className="font-bold text-4xl">$99</span> /Month
            </p>
            <p className="text-sm opacity-75 mt-2">
              For most businesses that want to optimize web queries.
            </p>
            <div className="text-sm mt-4">
              <p className="my-2">✓ All limited links</p>
              <p className="my-2">✓ Own analytics platform</p>
              <p className="my-2">✓ Chat support</p>
              <p className="my-2">✓ Optimize hashtags</p>
              <p className="my-2">✓ Unlimited users</p>
            </div>
            <button className="w-full text-indigo-700 bg-white rounded opacity-75 hover:opacity-100 hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
              Choose Plan
            </button>
          </div>
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mb-10 md:mb-0">
            <h3 className="text-gray-600 text-lg">Enterprise</h3>
            <p className="text-gray-600 mt-1">
              <span className="font-bold text-black text-4xl">$299</span> /Month
            </p>
            <p className="text-sm text-gray-600 mt-2">
              For most businesses that want to optimize web queries.
            </p>
            <div className="text-sm text-gray-600 mt-4">
              <p className="my-2">✓ All limited links</p>
              <p className="my-2">✓ Own analytics platform</p>
              <p className="my-2">✓ Chat support</p>
              <p className="my-2">✓ Optimize hashtags</p>
              <p className="my-2">✓ Unlimited users</p>
            </div>
            <button className="w-full text-indigo-700 border border-indigo-700 rounded hover:bg-indigo-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
              Choose Plan
            </button>
          </div>{" "}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mb-10 md:mb-0">
            <h3 className="text-gray-600 text-lg">Enterprise</h3>
            <p className="text-gray-600 mt-1">
              <span className="font-bold text-black text-4xl">$299</span> /Month
            </p>
            <p className="text-sm text-gray-600 mt-2">
              For most businesses that want to optimize web queries.
            </p>
            <div className="text-sm text-gray-600 mt-4">
              <p className="my-2">✓ All limited links</p>
              <p className="my-2">✓ Own analytics platform</p>
              <p className="my-2">✓ Chat support</p>
              <p className="my-2">✓ Optimize hashtags</p>
              <p className="my-2">✓ Unlimited users</p>
            </div>
            <button className="w-full text-indigo-700 border border-indigo-700 rounded hover:bg-indigo-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
              Choose Plan
            </button>
          </div>
        </div>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="text-center pb-12">
            {/* <h2 className="text-base font-bold text-indigo-600">
              We have the best equipment
            </h2> */}
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
              Recommended by Bloggers & Youtube
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <div className="w-full bg-white rounded-lg  flex-col justify-center items-center shadow">
              <div className="mb-8">
                <img src="/yt.jpg" alt="" />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  Ft Thoughts
                </p>
                <p className="text-base text-gray-400 font-normal">Youtuber</p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg   flex-col justify-center items-center shadow">
              <div className="mb-8">
                <img src="/yt2.jpg" alt="" />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  BM Tech Tips
                </p>
                <p className="text-base text-gray-400 font-normal">Youtuber</p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg   flex-col justify-center items-center shadow">
              <div className="mb-8">
                <img src="/rec.jpg" alt="" />
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">
                 {`See More >>`}
                </p>
                {/* <p className="text-base text-gray-400 font-normal">Youtuber</p> */}
              </div>
            </div>
          </div>
        </section>
        {/* <div className="p-2 text-center">
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
        </div> */}
      </div>
    </Main>
  );
};
export async function getStaticProps() {
  const project = await getHostingPages();
  console.log(project);
  if (!project) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      project,
    },
    revalidate: 10,
  };
}

export default Index;
