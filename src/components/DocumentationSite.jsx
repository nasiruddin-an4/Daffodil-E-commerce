import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import { sections, sectionTitle } from "../constants/index";
import {
  Search,
  Book,
  Box,
  ShoppingCart,
  Brain,
  CreditCard,
  DollarSign,
  BarChart3,
  LayoutDashboard,
} from "lucide-react";
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import img8 from '../assets/8.png'
import img9 from '../assets/9.png'

const DocumentationSite = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRefs = useRef({});

  const getIconForSection = (sectionId) => {
    const icons = {
      intro: Book,
      InventoryManagement: Box,
      "ai-product-management": Brain,
      "point-of-sale-pos": ShoppingCart,
      "basic-accounting": CreditCard,
      "expense-management": DollarSign,
      report: BarChart3,
      "ai-dashboard": LayoutDashboard,
    };
    const Icon = icons[sectionId] || Book;
    return <Icon className="w-6 h-6" />;
  };

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionRefs.current[sectionId]) {
      sectionRefs.current[sectionId].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      sections.forEach((section) => {
        const element = sectionRefs.current[section.id];
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + height - 100
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <main className="flex-1 md:ml-64 transition-all duration-300">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="backdrop-blur-sm bg-white/75 px-6 py-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <h1 className="text-2xl font-bold text-gray-900">
                Documentation
              </h1>
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/50 backdrop-blur-sm"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto p-6 md:p-8">
          {sectionTitle.map((section) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className="mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-6">
                {getIconForSection(section.id)}
                <h2 className="text-3xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-500/20 transition-colors duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    {section.id === "intro" && (
                      <div className="prose max-w-none">
                        <img
                          src="/api/placeholder/800/400"
                          alt="Documentation Overview"
                          className="w-full rounded-lg mb-6 object-cover"
                        />
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Welcome to the official documentation for Daffodil
                          E-commerce. This guide will help you understand and
                          efficiently use the various features of the platform.
                          Whether you are a beginner or an advanced user, this
                          documentation provides a comprehensive overview of
                          each module.
                        </p>
                      </div>
                    )}

                    {section.id === "getting-started" && (
                      <div className="space-y-6">
                        <img
                          src="/api/placeholder/800/400"
                          alt="Getting Started"
                          className="w-full rounded-lg mb-6 object-cover"
                        />
                        <p className="text-lg text-gray-700 mb-4">
                          Table of Contents:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {sections.slice(2).map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors duration-200"
                              onClick={() => handleSectionClick(item.id)}
                            >
                              {getIconForSection(item.id)}
                              <span className="ml-3 text-gray-700">
                                {item.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {section.id === "InventoryManagement" && (
                      <div className="space-y-6">
                        <img
                          src="/api/placeholder/800/400"
                          alt="Inventory Management"
                          className="w-full rounded-lg mb-6 object-cover"
                        />
                        <p className="text-lg text-gray-700">
                          Manage your inventory effectively. Features include
                          tracking stock levels, creating purchase orders, and
                          managing suppliers.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold mb-4">Key Features</h3>
                            <ul className="space-y-3">
                              <li className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                <span>View and manage current stock</span>
                              </li>
                              <li className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                <span>
                                  Create and track purchase requisitions
                                </span>
                              </li>
                              <li className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                <span>Manage supplier relationships</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {section.id === "ai-product-management" && (
                      <div className="prose max-w-none">
                        <p className="text-lg text-gray-700">
                          Adding Requisition: create a new requisition in DCOM,
                          and follow these steps:
                          <ul>
                            <li className="ml-5">
                              <b>1. Access the Requisition Module:</b>
                              <ul className="ml-10">
                                <li>
                                  Navigate to the Requisition module from the
                                  main menu.
                                </li>
                              </ul>
                            </li>
                            <li className="ml-5">
                              <b>2. Initiate a New Requisition:</b>
                              <ul className="ml-10">
                                <li>Click on Add New Requisition.</li>
                              </ul>
                            </li>
                            <li className="ml-5">
                              <b>3. Enter Requisition Details:</b>
                              <ul className="ml-10">
                                <li>
                                  Requisition Name: Provide a descriptive name
                                  for the requisition.
                                </li>
                                <li>
                                  Notes: Add any pertinent information or
                                  special instructions related to the
                                  requisition.
                                </li>
                              </ul>
                            </li>
                            <li className="ml-5">
                              <b>4. Add Products and Variants:</b>
                              <ol className="ml-10">
                                <li>Click on <b>Add Product</b>.</li>
                                <li>
                                  From the product list, select the desired
                                  product or variant.
                                </li>
                                <li>
                                  Specify the <b>Quantity</b> required for each
                                  selected item.
                                </li>
                                <li>Click on Add Product.</li>
                                <li>
                                  Repeat this process to include all necessary
                                  products and variants.
                                </li>
                              </ol>
                            </li>
                          </ul>
                          <img src={img1} alt="" className="my-10" />

                          <ul className="mt-5">
                            <li><b>5. Review and Submit for Approval:</b>
                              <ul>
                                <li>After adding all items, review the requisition details to ensure accuracy.</li>
                                <li>Click on <b>Submit for Approval</b> to forward the requisition to the designated approver(s).</li>
                              </ul>
                            </li>
                            <img src={img2} alt="" className="my-10"/>

                          </ul>

                          <ul className="mt-5">
                            <li><b>6. Approval Process:</b>
                              <ul className="ml-5">
                                <li>The approver(s) will receive a notification to review the requisition.</li>
                                <li>Upon approval, the requisition will proceed to the next stage in the procurement process.</li>
                                <li>If rejected, the requisition will be returned with feedback for necessary modifications.</li>
                              </ul>
                            </li>
                            <img src={img3} alt="" className="my-10"/>
                            <span><b>Note:</b> Ensure that all required fields are completed and that the information provided is accurate to facilitate a smooth approval process.</span>
                          </ul>

                          <ul className="mt-5">
                            <li className="text-xl"><b>Creating a Purchase Order from an Approved Requisition:</b>
                              <ul className="ml-5 mt-5">
                                <li><b>Access Purchase Orders:</b> Navigate to the <b>Purchase Orders</b> section to view a list of previously added POs.</li>
                                <li>Upon approval, the requisition will proceed to the next stage in the procurement process.</li>
                                <li>If rejected, the requisition will be returned with feedback for necessary modifications.</li>
                              </ul>
                            </li>
                            <img src={img4} alt="" className="my-10"/>
                          </ul>

                          <ul className="mt-5">
                            <li className="text-xl"><b>Initiate New Purchase Order: </b>Click on <b>Add New</b> to start creating a new PO.
                            </li>
                            <img src={img5} alt="" className="my-10"/>
                          </ul>

                          <ul className="mt-5">
                            <li className="text-xl"><b>Import from Requisition: </b>At the top of the form, click the <b>Import from Requisition</b> button. This action will display a list of approved requisitions.
                            </li>
                            <img src={img6} alt="" className="my-10"/>
                          </ul>

                          <ul className="mt-5">
                            <li className="text-xl"><b>Select Requisition:</b> Choose the relevant requisition to auto-populate the PO with the products and quantities specified in the requisition.
                            </li>
                            <img src={img7} alt="" className="my-10"/>
                          </ul>

                          <ul className="mt-5">
                            <li className="text-xl"><b>Enter Supplier Information:</b>
                            <ul className="ml-5 mt-5">
                              <li><b>Select Supplier:</b> Choose the supplier from whom the products will be purchased.</li>
                              <li><b>Order Date:</b> Specify the date of the order.</li>
                              <li><b>Payment Term:</b> Define the payment terms (e.g., net 30 days).</li>
                              <li><b>Attach Documents:</b> If applicable, attach any relevant documents.</li>
                            </ul>
                            </li>
                            <img src={img8} alt="" className="my-10"/>
                          </ul>


                        </p>
                      </div>
                    )}

                    {section.id === "point-of-sale-pos" && (
                      <div className="prose max-w-none">
                        <img
                          src="/api/placeholder/800/400"
                          alt="Point of Sale"
                          className="w-full rounded-lg mb-6 object-cover"
                        />
                        <p className="text-lg text-gray-700">
                          The Point of Sale (POS) system streamlines in-store
                          sales by integrating with your inventory and
                          accounting systems.
                        </p>
                      </div>
                    )}

                    {section.subSections &&
                      section.subSections.map((subSection) => (
                        <section
                          key={subSection.id}
                          id={subSection.id}
                          ref={(el) =>
                            (sectionRefs.current[subSection.id] = el)
                          }
                          className="mt-8 pt-8 border-t border-gray-200"
                        >
                          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                            {subSection.title}
                          </h3>
                          <div className="bg-gray-50 rounded-lg p-6">
                            <p>{subSection.description}</p>
                            <img src={subSection.image} alt="" />
                          </div>
                        </section>
                      ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DocumentationSite;
