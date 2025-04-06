"use client"
import { useState } from "react";
import HeroSlider from "../HeroSlider";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="bg-yellow-100 mb-4">
        <div className="p-4">
          <div className="flex space-x-4 border-b">
            <button
              className={`pb-2 ${activeTab === "tab1" ? "border-b-2 border-blue-500 font-bold" : ""}`}
              onClick={() => setActiveTab("tab1")}
            >
              Tab 1
            </button>
            <button
              className={`pb-2 ${activeTab === "tab2" ? "border-b-2 border-blue-500 font-bold" : ""}`}
              onClick={() => setActiveTab("tab2")}
            >
              Tab 2
            </button>
          </div>

          <div className="mt-4">
            {activeTab === "tab1" && <div>
              
              <HeroSlider />
              
              </div>}
            {activeTab === "tab2" && <div>This is content of Tab 2</div>}
          </div>
        </div>
    </div>
  );
};

export default Tabs;
