"use client";

import React, { useState, useEffect, forwardRef } from "react";
import styles from "./revealMe.module.scss";
import { Flex } from "./Flex";
import { SpacingToken } from "@/lib/types";

interface RevealMeProps extends React.ComponentProps<typeof Flex> {
  children: React.ReactNode;
  speed?: "slow" | "medium" | "fast";
  delay?: number;
  revealedByDefault?: boolean;
  translateY?: number | SpacingToken;
  trigger?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const RevealMe = forwardRef<HTMLDivElement, RevealMeProps>(
  (
    {
      children,
      speed = "medium",
      delay = 0,
      revealedByDefault = false,
      translateY,
      trigger,
      style,
      className,
      ...rest
    },
    ref
  ) => {
    const [isRevealed, setIsRevealed] = useState(revealedByDefault);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsRevealed(true);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
      if (trigger !== undefined) {
        setIsRevealed(trigger);
      }
    }, [trigger]);

    const getSpeedDuration = () => {
      switch (speed) {
        case "fast":
          return "1s";
        case "medium":
          return "2s";
        case "slow":
          return "3s";
        default:
          return "1.5s";
      }
    };

    const getTranslateYValue = () => {
      if (typeof translateY === "number") {
        return `${translateY}rem`;
      } else if (typeof translateY === "string") {
        return `var(--static-space-${translateY})`;
      }
      return undefined;
    };

    const translateValue = getTranslateYValue();

    const revealStyle: React.CSSProperties = {
      transitionDuration: getSpeedDuration(),
      transform: isRevealed ? "translateY(0)" : `translateY(${translateValue})`,
      ...style,
    };

    return (
      <Flex
        fillWidth
        horizontal="center"
        ref={ref}
        style={revealStyle}
        className={`${styles.visible} ${
          isRevealed ? styles.revealed : styles.hidden
        } ${className || ""}`}
        {...rest}
      >
        {children}
      </Flex>
    );
  }
);

RevealMe.displayName = "RevealMe";
export { RevealMe };
