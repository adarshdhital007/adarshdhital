"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Time from "./Time";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const dynamicFooterMessages: Record<string, string> = {
  message1: "Saving progress... in life and code.",
  message2: "Compiling today for a better tomorrow.",
  message3: "One breakpoint away from greatness.",
  message4: "Building my future, one line at a time.",
  message5: "If life throws errors, refactor and move on.",
};

const FooterWithClock = () => {
  const [showSubFooter, setShowSubFooter] = useState(false);
  const pathname = usePathname();
  const [footerMessage, setFooterMessage] = useState("");

  useEffect(() => {
    const messagesKeys = Object.keys(dynamicFooterMessages);
    const randomKey = messagesKeys[getRandomInt(messagesKeys.length)];
    setFooterMessage(dynamicFooterMessages[randomKey]);
  }, [showSubFooter]);

  const handleClockClick = () => {
    setShowSubFooter((prev) => {
      const newShowSubFooter = !prev;
      if (newShowSubFooter) {
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }, 100);
      }
      return newShowSubFooter;
    });
  };

  useEffect(() => {
    if (pathname !== "/" && showSubFooter) {
      setShowSubFooter(false);
    }
  }, [pathname, showSubFooter]);

  const shouldShowSubFooter = pathname === "/";

  return (
    <>
      <footer
        className={`border-t w-full ${
          showSubFooter ? "border-b" : "border-b-transparent"
        } border-neutral-200 dark:border-neutral-800 py-3 px-4 flex justify-between items-center text-neutral-700 dark:text-neutral-300`}
      >
        <div className="flex px-4 w-[56rem] items-center mx-auto justify-between">
          <div className="font-medium text-sm">Crafted by Adarsh</div>
          <div className="flex items-center">
            <Time onClick={handleClockClick} />
          </div>
        </div>
      </footer>
      {showSubFooter && shouldShowSubFooter && (
        <div
          id="subFooter"
          className="px-4 py-10 items-center justify-center flex w-full"
        >
          <span
            className={`font-semibold text-[15px] w-[640px] flex flex-col gap-5 items-center dark:text-[#E5E5E5] text-[#3A3A3A]`}
          >
            {footerMessage}
          </span>
        </div>
      )}
    </>
  );
};

export default FooterWithClock;
