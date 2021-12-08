import { ReactNode } from "react";

import Link from "next/link";

import { NavBar } from "./../components/NavBar";
import Footer from './../components/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}
    <div className="m-0 p-2 text-center bg-indigo-400 text-white">
      <div className="container-fluid container-lg">
        <div className="row">
          <div className="m-0 max-w-full p-0  w-full">
            <a href="/black-friday.html" className="newline-link">
              <b>Offer:</b> Black Friday Offer is live!
            </a>
          </div>
        </div>
      </div>
    </div>
    <NavBar />
    <div className="">
      <div className="py-5 text-xl content">{props.children}</div>
      <Footer />
    </div>
  </div>
);

export { Main };
