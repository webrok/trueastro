"use client"
import { useState } from "react";
import AstrotalkSlider from "./AstrotalkSlider";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="bg-gray-50 text-center">
      <div className="border-t border-gray-200 max-w-5xl pt-10 mlr-m-15 mx-auto justify-center">
          <h3 className="text-3xl font-semibold text-gray-800">Our True Astro Partners</h3>
          <p className="text-sm text-gray-600">We're associated with india's popular insurance companies.</p>
      </div>
        <div className="p-4">
          <div className="flex space-x-4 max-w-5xl mlr-m-15 mx-auto justify-center">
            <button
              className={`pb-2 ${activeTab === "tab1" ? "border-b-2 border-blue-500 font-bold" : ""}`}
              onClick={() => setActiveTab("tab1")}>
              Carrier
            </button>
            <button
              className={`pb-2 ${activeTab === "tab2" ? "border-b-2 border-blue-500 font-bold" : ""}`}
              onClick={() => setActiveTab("tab2")}>
              Love
            </button>
          </div>

          <div className="mt-4">
              {activeTab === "tab1" && <div>
                  <AstrotalkSlider />
              </div>}
              {activeTab === "tab2" && <div>
                  <AstrotalkSlider />
              </div>}
          </div>
        </div>
    </div>
  );
};

export default Tabs;
