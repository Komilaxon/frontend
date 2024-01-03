import React, { useEffect, useState } from "react";
import TabsHeader, { tabs } from "./Tabs.header";
import { useSearchParams } from "react-router-dom";
import TabFooter from "./tab.footer";

const GetTab = ({ tabNumber, setSearchParams }) => {
  let element = tabs.find((tab) => tab.id == tabNumber)?.element;
  if (element != undefined) {
    return element;
  } else {
    setSearchParams({ tab: 1 });
    return tabs[0].element;
  }
};

const CreateWorkTabs = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [tabIds, setTabIds] = useState([]);
  let tabNumber = parseInt(searchParams.get("tab") || "1");
  return (
    <main className="container !py-14">
      <TabsHeader tabIds={tabIds} />
      <div className="py-20">
        <GetTab tabNumber={tabNumber} setSearchParams={setSearchParams} />
      </div>
      <TabFooter
        setTabIds={setTabIds}
        tabIds={tabIds}
        setSearchParams={setSearchParams}
      />
    </main>
  );
};

export default CreateWorkTabs;
