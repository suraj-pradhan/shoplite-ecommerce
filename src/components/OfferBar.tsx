"use client";
import React from "react";
import { CrossIcon, RightArrow, TicketPercent } from "./Icons";
import Link from "next/link";

export default function OfferBar() {
  const [status, setStatus] = React.useState(true);

  return (
    <div>
      {status ? (
        <div
          className="flex items-center justify-center h-8 py-5 bg-light-blue relative
                      text-[13px] xs:text-[12.4px] xs:justify-start xs:px-5"
        >
          <div className="flex items-center justify-start">
            <TicketPercent /> &nbsp; 30% off storewide - Limited time! &nbsp;
            <div className=" text-blue relative ">
              <Link className="flex" href="/">
                Shop Now&nbsp;
                <RightArrow />
                <span className="absolute top-[19px] xs:top-[18px] left-0 border-t w-[6.4em]"></span>
              </Link>
            </div>
          </div>
          <button onClick={() => setStatus(false)}>
            <span
              className="absolute top-[14px]
         right-6 xs:right-4"
            >
              <CrossIcon />
            </span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
