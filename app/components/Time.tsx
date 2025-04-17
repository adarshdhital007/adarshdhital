import React, { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TimeOfDayProps {
  onClick?: () => void;
}

const Time: React.FC<TimeOfDayProps> = ({ onClick }) => {
  const getKathmanduTime = () => {
    return new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" })
    );
  };

  // Initialize the time as null initially
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set the initial time when the component mounts
    setTime(getKathmanduTime());

    // Update the time every second
    const interval = setInterval(() => {
      setTime(getKathmanduTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (onClick) onClick();
  };

  const formatTimeWithoutSeconds = (date: Date | null) => {
    return date
      ? date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      : "XX:XX";
  };

  const formatTimeWithSeconds = (date: Date | null) => {
    return date
      ? date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      : "XX:XX:XX";
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleClick}
            type="button"
            aria-label="Time of day"
            suppressHydrationWarning
          >
            <span className="text-sm font-medium">
              {formatTimeWithoutSeconds(time)}
            </span>
          </button>
        </TooltipTrigger>
        <TooltipContent className="text-sm font-medium">
          <p>KTM : {formatTimeWithSeconds(time)}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Time;
