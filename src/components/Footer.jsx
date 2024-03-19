import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple Store</span> or{" "}
            <span className="underline text-blue">other retailer</span> near
            you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 0800-040-1966
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex flex-col gap-3 justify-between md:flex-row md:items-center">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-gray text-sm">
              Developer: Sergey UP
            </p>
            <p className="font-semibold text-gray text-xs">
              Copyright @ 2024 Apple Inc. All rights reserved.
            </p>
          </div>
          <ul className="flex flex-wrap">
            {footerLinks.map((link, i) => (
              <li
                key={link}
                className="font-semibold text-gray text-xs hover:text-blue"
              >
                <a href="#!">{link}</a>{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
