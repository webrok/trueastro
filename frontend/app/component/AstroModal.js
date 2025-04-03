import React from 'react';
import { X, Umbrella, Shield, CircleDollarSign, Heart, Stethoscope, Activity, Users, BadgeDollarSign, Baby, Armchair } from 'lucide-react';

export default function AstroModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const categories = [
    {
      title: "Term Life Insurance",
      tag: "Save On Tax*",
      products: [
        {
          icon: <Umbrella className="w-12 h-12 text-blue-500" />,
          title: "Term Life",
          subtitle: "Insurance"
        },
        {
          icon: <Shield className="w-12 h-12 text-blue-500" />,
          title: "2 cr.",
          subtitle: "Term Life"
        },
        {
          icon: <CircleDollarSign className="w-12 h-12 text-blue-500" />,
          title: "Return",
          subtitle: "of Premium"
        }
      ]
    },
    {
      title: "Health Insurance",
      tag: "Save On Tax*",
      products: [
        {
          icon: <Heart className="w-12 h-12 text-blue-600 fill-blue-500" />,
          title: "Health",
          subtitle: "Insurance"
        },
        {
          icon: <Stethoscope className="w-12 h-12 text-blue-500" />,
          title: "Aarogya",
          subtitle: "Insurance"
        },
        {
          icon: <Activity className="w-12 h-12 text-blue-500" />,
          title: "1 cr.",
          subtitle: "Health Cover"
        },
        {
          icon: <Users className="w-12 h-12 text-blue-500" />,
          title: "Family",
          subtitle: "Insurance"
        }
      ]
    },
    {
      title: "Investment Plans",
      tag: "Save & Secure Life",
      tagColor: "bg-red-500",
      products: [
        {
          icon: <CircleDollarSign className="w-12 h-12 text-blue-500" />,
          title: "Investment",
          subtitle: "Plans"
        },
        {
          icon: <BadgeDollarSign className="w-12 h-12 text-blue-500" />,
          title: "Guaranteed",
          subtitle: "Return"
        },
        {
          icon: <Baby className="w-12 h-12 text-blue-500" />,
          title: "Child",
          subtitle: "Savings"
        },
        {
          icon: <Armchair className="w-12 h-12 text-blue-500" />,
          title: "Retirement",
          subtitle: "Plans"
        }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Insurance Products</h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          <div className="space-y-8">
            {categories.map((category, index) => (
              <div key={index} className="space-y-4">
                <div className="relative">
                  <h3 className="text-2xl font-semibold text-gray-800">{category.title}</h3>
                  {category.tag && (
                    <span className={`absolute inline-block ml-3 px-3 py-1 text-white text-sm font-medium rounded-md ${category.tagColor || 'bg-green-500'}`}>
                      {category.tag}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.products.map((product, prodIndex) => (
                    <div 
                      key={prodIndex}
                      className="flex flex-col items-center justify-center p-4 bg-white rounded-xl hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="mb-3">{product.icon}</div>
                      <h4 className="text-lg font-medium text-gray-800 text-center">{product.title}</h4>
                      <p className="text-sm text-gray-600 text-center">{product.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}