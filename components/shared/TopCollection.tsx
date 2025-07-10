"use client";

import { useState } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";
import { DaysComponent } from "./DaysComponent";

const TABS = [
  {
    label: "24 Hours",
    icon: <BsFillAlarmFill />,
    key: "popular",
    data: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    label: "7 Days",
    icon: <BsCalendar3 />,
    key: "following",
    data: [1, 2, 3, 4],
  },
  {
    label: "30 Days",
    icon: <BsFillCalendarDateFill />,
    key: "news",
    data: [1, 2, 3, 4, 5, 6],
  },
];

export const TopCollection = () => {
  const [activeTab, setActiveTab] = useState("popular");

  const currentData = TABS.find((tab) => tab.key === activeTab)?.data || [];

  return (
    <section className="w-full pt-36">
      <div className="body-container px-6 md:px-12 flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-center pb-2">
          Top List Collections.
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-background p-2 sm:p-4">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                            flex items-center gap-2 rounded-full px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-poppins font-medium cursor-pointer transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-105 hover:shadow-md ${
                              activeTab === tab.key
                                ? "bg-primary text-primary-foreground shadow-lg"
                                : "bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            }
                          `}
                aria-selected={activeTab === tab.key}
                role="tab"
                aria-label={tab.label}
              >
                <span className="text-lg sm:text-xl">{tab.icon}</span>
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentData.map((_, i) => (
            <DaysComponent key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
