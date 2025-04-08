"use client";
// components/Header.js (Responsive - Using Modern Link - Complete Code)
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// --- Data Structure ---
const menuItems = [
    {
        title: "Insurance",
        path: "#", // Or '/insurance'
        children: [ // Level 1 Items (Column 1)
            {
                title: "Health Insurance",
                path: "/insurance/health",
                children: [ // Level 2 Items for Health Insurance (Column 2)
                    {
                        title: "Health Insurance Companies",
                        path: "/insurance/health/companies",
                        children: [ // Level 3 Items for Companies (Column 3)
                            { title: "HDFC ERGO Health Insurance", path: "/insurance/health/companies/hdfc-ergo" },
                            { title: "Niva Bupa Health Insurance", path: "/insurance/health/companies/niva-bupa" },
                            { title: "Care Health Insurance", path: "/insurance/health/companies/care" },
                            { title: "Aditya Birla Health Insurance", path: "/insurance/health/companies/aditya-birla" },
                            { title: "Star Health Insurance", path: "/insurance/health/companies/star" },
                            { title: "ICICI Lombard Health Insurance", path: "/insurance/health/companies/icici-lombard" },
                            { title: "Reliance Health Insurance", path: "/insurance/health/companies/reliance" },
                            // ... Add more companies
                        ],
                    },
                    { title: "Mediclaim Policy", path: "/insurance/health/mediclaim" },
                    { title: "Best Health Insurance Plans", path: "/insurance/health/best-plans" },
                    { title: "Health Insurance Plans for Family", path: "/insurance/health/family-plans" },
                    { title: "Health Insurance for Senior Citizens", path: "/insurance/health/senior-citizens" },
                    { title: "Health Insurance for Parents", path: "/insurance/health/parents" },
                    { title: "Women Health Insurance", path: "/insurance/health/women" },
                    { title: "Health Insurance for Children", path: "/insurance/health/children" },
                     // ... Add other L2 items under Health Insurance
                ],
            },
            {
                title: "Car Insurance",
                path: "/insurance/car",
                 children: [ // Example L2 for Car Insurance
                    { title: "Third Party Car Insurance", path: "/insurance/car/third-party" },
                    { title: "Comprehensive Car Insurance", path: "/insurance/car/comprehensive" },
                    { title: "Car Insurance Add-ons", path: "/insurance/car/addons", children: [ // Example L3
                        {title: "Zero Depreciation", path: "/insurance/car/addons/zero-dep"},
                        {title: "Engine Protect", path: "/insurance/car/addons/engine-protect"},
                    ] },
                 ]
            },
            { title: "Bike Insurance", path: "/insurance/bike", children: [/* L2 Items */] },
            { title: "Life Insurance", path: "/insurance/life", children: [/* L2 Items */] },
            { title: "Term Insurance", path: "/insurance/term", children: [/* L2 Items */] },
            { title: "Investment", path: "/insurance/investment", children: [/* L2 Items */] },
            { title: "Business Insurance", path: "/insurance/business", children: [/* L2 Items */] },
            { title: "Travel Insurance", path: "/insurance/travel", children: [/* L2 Items */] },
        ],
    },
    { title: "Insurance Advisors", path: "/insurance-advisors" },
    { title: "Renew", path: "/renew" },
    {
        title: "Support",
        path: "#", // Or '/support'
        children: [
            { title: "Contact Us", path: "/support/contact", children: [ /* L2 Items */ ] },
            { title: "FAQs", path: "/support/faq" },
        ]
    },
    { title: "News", path: "/news" },
    { title: "Become POSP Agent", path: "/posp-agent" },
];

// --- SVG Icons ---
const ChevronDownIcon = () => (
    <svg className="ml-1 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg className="ml-auto h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L10.94 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
    </svg>
);

// Mobile Menu Icons
const HamburgerIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const CloseIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


// --- Menu Column Component (Using Modern Link) ---
const MenuColumn = ({ items, activeItemTitle, onItemHover, level }) => {
    return (
        <ul className="py-1 min-w-[220px] border-r border-gray-100 last:border-r-0 flex-shrink-0">
            {items.map(item => (
                <li
                    key={item.title}
                    // Update the active item state for this column's parent on hover
                    onMouseEnter={() => onItemHover && onItemHover(item.title)}
                >
                    {/* REMOVED legacyBehavior, applied className to Link */}
                    <Link
                        href={item.path || '#'}
                        className={`flex items-center justify-between whitespace-nowrap px-4 py-2 text-sm transition-colors duration-150 ease-in-out text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                            // Highlight if this item is the active one triggering the next column
                            activeItemTitle === item.title ? 'bg-gray-100 text-gray-900 font-medium' : ''
                        }`}
                    >
                       {/* Direct children of Link */}
                       <span>{item.title}</span>
                       {/* Show right arrow only if item has children */}
                       {item.children && item.children.length > 0 && (
                           <ChevronRightIcon />
                       )}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

// --- Dropdown Menu Component (Manages desktop columns) ---
const DropdownMenu = ({ items, onMouseEnter, onMouseLeave }) => {
    // State holds the *title* of the currently hovered item in the previous column
    const [activeLevel1ItemTitle, setActiveLevel1ItemTitle] = useState(null);
    const [activeLevel2ItemTitle, setActiveLevel2ItemTitle] = useState(null);

    // Find the items for the second column based on the hovered item in the first
    const level2Items = activeLevel1ItemTitle
        ? items.find(item => item.title === activeLevel1ItemTitle)?.children ?? [] // Use ?? for nullish coalescing
        : [];

    // Find the items for the third column based on the hovered item in the second
    const level3Items = activeLevel2ItemTitle
        ? level2Items.find(item => item.title === activeLevel2ItemTitle)?.children ?? []
        : [];

    // Reset lower levels when hovering a new item in an upper level, or when leaving a column
    const handleLevel1Hover = (itemTitle) => {
        setActiveLevel1ItemTitle(itemTitle);
        setActiveLevel2ItemTitle(null); // Reset level 2 active item when level 1 changes
    };

    const handleLevel2Hover = (itemTitle) => {
        setActiveLevel2ItemTitle(itemTitle);
    }

    // Reset active items when mouse leaves the entire dropdown area
    const handleDropdownLeave = () => {
        setActiveLevel1ItemTitle(null);
        setActiveLevel2ItemTitle(null);
        onMouseLeave(); // Call the original handler passed from Header
    }

    return (
        <div
            className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md border border-gray-200 overflow-hidden z-20" // Added z-20
            // Use the combined leave handler
            onMouseLeave={handleDropdownLeave}
            // Keep menu open when mouse enters dropdown itself
            onMouseEnter={onMouseEnter}
        >
            <div className="flex w-auto"> {/* Use flexbox for columns, w-auto allows it to grow */}
                {/* --- Column 1 --- */}
                <MenuColumn
                    items={items}
                    activeItemTitle={activeLevel1ItemTitle}
                    onItemHover={handleLevel1Hover}
                    level={1}
                />

                {/* --- Column 2 --- */}
                {/* Render only if an item in Column 1 is hovered AND that item has children */}
                {activeLevel1ItemTitle && level2Items.length > 0 && (
                   <MenuColumn
                       items={level2Items}
                       activeItemTitle={activeLevel2ItemTitle}
                       onItemHover={handleLevel2Hover}
                       level={2}
                   />
                )}

                {/* --- Column 3 --- */}
                {/* Render only if an item in Column 2 is hovered AND that item has children */}
                {activeLevel2ItemTitle && level3Items.length > 0 && (
                     <MenuColumn
                         items={level3Items}
                         // No active item tracking or hover action needed for the last column
                         level={3}
                     />
                )}
            </div>
        </div>
    );
};


// --- Mobile Menu Item Component (Using Modern Link) ---
// Renders a single item in the mobile menu, handling nested accordion logic
const MobileMenuItem = ({ item, closeMobileMenu }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    // Toggle expansion for items with children
    const handleToggle = (e) => {
        if (hasChildren) {
            e.preventDefault(); // Prevent link navigation if it's just a parent toggle
            setIsExpanded(!isExpanded);
        }
        // Note: Closing the menu on parent toggle might be desired, add `else { closeMobileMenu(); }` if needed
    };

    // Close menu when a final navigation link is clicked
    const handleLinkClick = () => {
         if (!hasChildren) { // Only close if it's a final link, not a toggle parent
            closeMobileMenu();
        }
    };

    return (
        <li className="border-b border-gray-100 last:border-b-0">
            <div
                className={`flex items-center justify-between px-4 py-3 text-sm ${hasChildren ? 'cursor-pointer hover:bg-gray-50' : ''}`}
                 // Use onClick on the DIV for toggling parent items IF the button isn't handling it
                 // onClick={hasChildren ? handleToggle : undefined} // Can be placed here or on the button
            >
                 {/* REMOVED legacyBehavior, applied className and onClick to Link */}
                 <Link
                    href={item.path || '#'}
                    className="flex-grow text-gray-700 hover:text-gray-900"
                    // Apply click handler for actual navigation links
                    onClick={!hasChildren ? handleLinkClick : undefined}
                    // If the link itself should toggle (when it has children but no separate button is desired)
                    // onClick={handleToggle}
                >
                    {/* Direct child of Link */}
                    {item.title}
                </Link>

                {/* Toggle Icon / Button */}
                {hasChildren && (
                    <button
                        type="button"
                        className="p-1 -mr-1 ml-2 text-gray-500" // Added padding for easier tapping
                        aria-expanded={isExpanded}
                        onClick={handleToggle} // Handle toggle specifically on the button
                    >
                       {isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
                    </button>
                )}
            </div>

            {/* --- Nested Mobile Submenu (Accordion) --- */}
            {hasChildren && isExpanded && (
                <ul className="pl-4 bg-gray-50"> {/* Indent and slightly different background */}
                    {item.children.map(childItem => (
                        <MobileMenuItem key={childItem.title} item={childItem} closeMobileMenu={closeMobileMenu} />
                    ))}
                </ul>
            )}
        </li>
    );
};


// --- Main Header Component (Handles overall state and layout) ---
const NavMenu = () => {
    // State for desktop dropdown visibility (which menu is open)
    const [openMenuTitle, setOpenMenuTitle] = useState(null);
    // State for mobile menu toggle
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Refs for desktop hover timeouts to prevent flickering
    const openTimeoutRef = useRef(null);
    const closeTimeoutRef = useRef(null);

    // --- Desktop Hover Logic ---
    const handleMouseEnter = (title) => {
        clearTimeout(closeTimeoutRef.current); // Clear any pending close action
        // Optional: Add a small delay before opening if needed
        // openTimeoutRef.current = setTimeout(() => {
             setOpenMenuTitle(title);
        // }, 50); // e.g., 50ms delay
    };

    const handleMouseLeave = () => {
        clearTimeout(openTimeoutRef.current); // Clear any pending open action
        // Add a delay before closing to allow moving cursor between menu item and dropdown
        closeTimeoutRef.current = setTimeout(() => {
            setOpenMenuTitle(null);
        }, 150); // e.g., 150ms delay - adjust as needed
    };

    // Function to keep the menu open when hovering over the dropdown itself
    const keepMenuOpen = () => {
         clearTimeout(closeTimeoutRef.current); // Cancel the scheduled closing
    }

    // --- Mobile Menu Toggle Logic ---
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Optional: Close any open desktop dropdown when opening mobile menu
        if (!isMobileMenuOpen) {
            setOpenMenuTitle(null);
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    }


    // Clean up timeouts on unmount
    useEffect(() => {
        return () => {
            clearTimeout(openTimeoutRef.current);
            clearTimeout(closeTimeoutRef.current);
        };
    }, []);

    // Close mobile menu if window resizes to desktop width
    useEffect(() => {
        const handleResize = () => {
            // Use Tailwind's 'md' breakpoint (768px default)
            if (window.innerWidth >= 768 && isMobileMenuOpen) {
                closeMobileMenu();
            }
        };
        window.addEventListener('resize', handleResize);
        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen]); // Re-run effect if isMobileMenuOpen changes

    // Optional: Add effect to disable body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);


    return (
        // Added relative positioning for mobile menu absolute positioning context
        <header className=" sticky top-0 z-50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    

                    {/* --- Desktop Menu (Hidden on small screens 'md' and below) --- */}
                    <div className="hidden md:flex md:items-center md:justify-center flex-grow">
                        <ul className="flex items-baseline space-x-1">
                            {menuItems.map((item) => (
                                <li
                                    key={item.title}
                                    className="relative" // Needed for absolute positioning of dropdown
                                    // Use hover handlers only for items that have children
                                    onMouseEnter={item.children ? () => handleMouseEnter(item.title) : undefined}
                                    onMouseLeave={item.children ? handleMouseLeave : undefined}
                                >
                                    {/* Top Level Item Link (Modern Syntax) */}
                                    <Link
                                        href={item.path || '#'}
                                        className={`flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-md transition-colors ${openMenuTitle === item.title ? 'text-gray-900 bg-gray-50' : ''}`}
                                    >
                                        {item.title}
                                        {/* Show down arrow only if item has children */}
                                        {item.children && <ChevronDownIcon />}
                                    </Link>

                                    {/* --- Render Dropdown Conditionally --- */}
                                    {item.children && openMenuTitle === item.title && (
                                        <DropdownMenu
                                            items={item.children}
                                            // Pass handlers to manage hover state between top item and dropdown
                                            onMouseEnter={keepMenuOpen} // Keep open when entering dropdown
                                            onMouseLeave={handleMouseLeave} // Start close timer when leaving dropdown
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                     {/* --- Mobile Menu Button (Visible only on 'md' and below) --- */}
                     <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Toggle menu" // Added aria-label
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                        </button>
                    </div>

                </div>
            </nav>

            {/* --- Mobile Menu Panel (Hidden on 'md' and up) --- */}
             {/* Use transition for smooth opening/closing */}
            <div
                 className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-100 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ${isMobileMenuOpen ? 'visible' : 'invisible'}`} // Combined transform/opacity, use invisible
                 id="mobile-menu"
                 // style={{ visibility: isMobileMenuOpen ? 'visible' : 'hidden' }} // Alternative to visible/invisible classes
             >
                {/* Render content only when needed/visible for performance */}

                    <ul className="py-1 max-h-[calc(100vh-4rem)] overflow-y-auto"> {/* Added max-height and scroll */}
                        {menuItems.map((item) => (
                           <MobileMenuItem key={item.title} item={item} closeMobileMenu={closeMobileMenu} />
                        ))}
                    </ul>

            </div>
        </header>
    );
};

export default NavMenu;