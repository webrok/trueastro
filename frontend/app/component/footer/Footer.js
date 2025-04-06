import React from "react";

const Footer = () => {
  const footerData = {
    title: "Quick Links",
    categories: [
      {
        name: "Car Insurance",
        links: [
          "Car Insurance Renewal",
          "Car Insurance Calculator",
          "Zero Depreciation Car Insurance",
          "IDV Calculator",
          "Own Damage Car Insurance",
          "Car Insurance Claim Settlement",
          "Best Car Insurance Companies"
        ]
      },
      {
        name: "Health Insurance",
        links: [
          "Health Insurance Plans",
          "Best Health Insurance Companies",
          "Mediclaim Policy",
          "Health Insurance Claim Settlement Ratio",
          "Critical Health Insurance",
          "Health Insurance Premium Calculator",
          "Family Health Insurance",
          "Senior Citizens Health Insurance"
        ]
      },
      {
        name: "Life Insurance",
        links: [
          "Postal Life Insurance Scheme",
          "Life Insurance Types",
          "Life Insurance Claim Settlement Ratio",
          "Term Insurance Vs Life Insurance",
          "Best Life Insurance Companies",
          "Life Insurance Plans",
          "Life Insurance Tax Benefits",
          "Life Insurance Premium Calculator"
        ]
      },
      {
        name: "Investment Plans",
        links: [
          "Investment Plans",
          "Fixed Deposit Calculator",
          "Tax-Saving Fixed Deposit",
          "Child Investment Plans",
          "Best Investment Plans",
          "Annuity Plans",
          "Section 10(10D)",
          "Investment Plans for NRI"
        ]
      }
    ]
  };

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-bold mb-4">{footerData.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {footerData.categories.map((category, index) => (
            <div key={index}>
              <h3 className="text-md font-semibold mb-2">{category.name}</h3>
              <ul>
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="text-gray-600 text-sm hover:text-gray-900">
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
