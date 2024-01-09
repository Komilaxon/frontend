import React, {  useEffect, useState } from "react";
import TabBasic from "../tabs/basic/Tab.basic";
import TabOptions from "../tabs/options/Tab.options";
import TabDesc from "../tabs/description/Tab.desc";
import TabReq from "../tabs/requirements/Tab.req";
import TabGallery from "../tabs/galery/Tab.Gallery";
import TabsPublication from "../tabs/publication/Tabs.publication";
import { useSearchParams } from "react-router-dom";

export const tabs = [
  {
    label: "Основные",
    id: 1,
    element: <TabBasic />,
  },

  {
    label: "Описание",
    id: 2,
    element: <TabDesc />,
  },
  {
    label: "Требования",
    id: 3,
    element: <TabReq />,
  },
  {
    label: "Галерея",
    id: 4,
    element: <TabGallery />,
  },
  {
    label: "Публикация",
    id: 5,
    element: <TabsPublication />,
  },
];

const TabsHeader = ({ tabIds }) => {
  let [searchParams, setSearchParam] = useSearchParams();
  const tabNumber = parseInt(searchParams.get("tab") || "1");
  useEffect(() => {
    if (!searchParams.get("tab")) {
      setSearchParam({ tab: 1 });
    }
    if (tabIds.length == 0) {
      setSearchParam({ tab: 1 });
    }
  }, []);

  return (
    <>
      <div className="flex items-center max-w-5xl tabs-header mx-auto">
        {tabs.map((tab) => (
          <button className={`w-full`} key={tab.id}>
            <div className={`w-full flex justify-center relative`}>
              {tabs[tabs.length - 1].id != tab.id && (
                <div
                  className={`w-full h-1 ${tabIds?.includes(tab.id) ? "bg-[#1DBF73]" : "bg-[#B0AAD0]"
                    } absolute left-1/2 top-1/2 z-[1]`}
                ></div>
              )}
              <div
                className={`w-14 h-14
                ${tab.id === tabNumber ? "bg-[#BFEBDB]" : "bg-transparent"}
                rounded-full flex items-center justify-center z-[2] text-white font-semibold`}
              >
                <div
                  className={`w-12 h-12  ${tabIds?.includes(tab.id) || tabNumber === tab.id
                    ? "bg-[#1DBF73]"
                    : "bg-[#B0AAD0]"
                    } rounded-full flex items-center justify-center text-white font-semibold`}
                >
                  {tab.id}
                </div>
              </div>
            </div>
            <span className="font-semibold text-base whitespace-nowrap  ">
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default TabsHeader;
