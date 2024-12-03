// constants/index.js
export const sections = [
    { id: 'intro', title: 'Daffodil E-commerce' },
    { id: 'getting-started', title: 'Getting Started' },
    {
        id: 'InventoryManagement',
        title: 'Inventory Management',
        subSections: [
            { id: 'purchase-requisition', title: 'Purchase Requisition' },
            { id: 'purchase-order', title: 'Purchase Order' },
            { id: 'purchase-payments', title: 'Purchase Payments' },
            { id: 'purchase-invoice', title: 'Purchase Invoice' },
            { id: 'purchase-custom-fields', title: 'Purchase Custom Fields' },
        ],
    },
    { id: 'ai-product-management', title: 'AI Product Management' },
    { id: 'point-of-sale', title: 'Point of Sale (POS)' },
    { id: 'basic-accounting', title: 'Basic Accounting' },
    { id: 'expense-management', title: 'Expense Management' },
    { id: 'report', title: 'Report' },
    { id: 'AI Dashboard', title: 'AI Dashboard' },
];

export const sectionTitle = [
    { id: 'intro', title: 'Daffodil E-commerce Documentation' },
    { id: 'getting-started', title: 'Getting Started' },
    {
        id: 'InventoryManagement',
        title: 'Inventory Management',
        subSections: [
            { id: 'purchase-requisition', title: 'Purchase Requisition',
                description: `Adding Requisition: create a new requisition in DCOM, and follow these steps:
                1. Access the Requisition Module: Navigate to the Requisition module from the main menu.\n
                2. Initiate a New Requisition: Click on Add New Requisition.
                3. Enter Requisition Details: Provide a descriptive name for the requisition and add notes.
                4. Add Products and Variants: Add desired products and specify quantities.`,},

            { id: 'purchase-order', title: 'Purchase Order',description:"Hello" ,},
            { id: 'purchase-payments', title: 'Purchase Payments',description:"Hello" ,},
            { id: 'purchase-invoice', title: 'Purchase Invoice',description:"Hello" ,},
            { id: 'purchase-custom-fields', title: 'Purchase Custom Fields',description:"Hello" ,},
        ],
    },

    { id: 'ai-product-management', title: 'AI Product Management' },
    { id: 'point-of-sale-pos', title: 'Point of Sale (POS)' },
    { id: 'basic-accounting', title: 'Basic Accounting' },
    { id: 'expense-management', title: 'Expense Management', content: 'Adding Requisition:  create a new requisition in DCOM, and follow these steps:' },
    { id: 'report', title: 'Report' },

];
