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

export const Collection = () => {
  const [activeTab, setActiveTab] = useState("popular");

  const currentData = TABS.find((tab) => tab.key === activeTab)?.data || [];

  return (
    <section className="w-full pt-36">
      <div className="body-container px-6 md:px-12 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-3xl font-bold">Top List Collections</h2>
          <div className="flex gap-4">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 rounded-full py-2 px-4 cursor-pointer text-lg transition-all 
                  ${
                    activeTab === tab.key
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:bg-accent"
                  }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {currentData.map((_, i) => (
            <DaysComponent key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
