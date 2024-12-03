import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { sections } from '../constants/index'; // Import the sections from constants

const Sidebar = ({ activeSection, onSectionClick, isOpen, toggleSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle the dropdown for a specific section
  const handleDropdownToggle = (sectionId) => {
    setOpenDropdown(openDropdown === sectionId ? null : sectionId);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-68 bg-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out
        md:translate-x-0 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Documentation</h2>
          <nav>
            {sections.map((section, index) => (
              <div key={index}>
                {/* Main Section Link */}
                <div 
                  className={`
                    cursor-pointer py-2 px-2 rounded-md flex items-center justify-between
                    ${activeSection === section.id ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}
                  `}
                  onClick={() => {
                    // If it's a section with a dropdown, toggle it
                    if (section.subSections) {
                      handleDropdownToggle(section.id);
                    } else {
                      onSectionClick(section.id);
                    }
                  }}
                >
                  <span>{section.title}</span>
                  {section.subSections ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </div>

                {/* Dropdown Menu */}
                {section.subSections && openDropdown === section.id && (
                  <div className="pl-6 mt-2">
                    {section.subSections.map((subSection, subIndex) => (
                      <div 
                        key={subIndex}
                        className={`
                          cursor-pointer py-2 px-3 rounded-md flex items-center
                          ${activeSection === subSection.id ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}
                        `}
                        onClick={() => onSectionClick(subSection.id)}
                      >
                        {subSection.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
