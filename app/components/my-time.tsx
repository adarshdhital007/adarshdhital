import React, { useState, useEffect } from "react";

interface TimeOfDayProps {
  onClick?: () => void;
}

const TimeOfDay: React.FC<TimeOfDayProps> = ({ onClick }) => {
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

  const formatTime = (date: Date | null) => {
    // Show placeholder until the time is initialized
    return date
      ? date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      : "XX:XX XX";
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      aria-label="Time of day"
      suppressHydrationWarning
    >
      <span className="hidden mobile:inline pr-1 text-sm font-medium">
        Kathmandu :
      </span>
      <span className="inline mobile:hidden pr-1 text-sm font-medium">
        KTM :
      </span>
      <span suppressHydrationWarning className="text-sm">
        {formatTime(time)}
      </span>
    </button>
  );
};

export default TimeOfDay;
