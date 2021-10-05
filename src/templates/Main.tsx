import { ReactNode } from "react";

import Link from "next/link";

import { AppConfig } from "../utils/AppConfig";
import { NavBar } from "./../components/NavBar";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}
    <NavBar />
    <div className="max-w-screen-md mx-auto">
      <div className="py-5 text-xl content">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{" "}
        <span role="img" aria-label="Love">
          ♥
        </span>{" "}
        by <a href="/">AmbitionHost</a>
      </div>
    </div>
  </div>
);

export { Main };
