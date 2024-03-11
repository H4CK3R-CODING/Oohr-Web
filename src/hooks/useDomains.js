const useDomains = () => {
  const domains = [
    {
      heading: "Computer Science",
      reasons: [
        { content: "Internet of Things (IoT)" },
        { content: "Software as a service (SaaS)" },
        { content: "Networking protocols" },
        { content: "Artificial Intelligence" },
        { content: "Cloud Management" },
        { content: "Online services and Solutions" },
        { content: "Internet and world wide Web" },
      ],
      img: "/Domains/cs.webp",
    },

    {
      heading: "Electronics And Telecommunications",
      reasons: [
        { content: "Power electronics" },
        { content: "Semiconductor devices" },
        { content: "Robotics" },
        { content: "Electronics circuits" },
        { content: "Wireless technology and devices" },
        { content: "Communication protocols" },
      ],
      img: "/Domains/telcomi.jpg",
    },
    {
      heading: "Electrical",
      reasons: [
        { content: "Electrical machine" },
        { content: "Transmission and distribution" },
      ],
      img: "/Domains/electric.webp",
    },
    {
      heading: " Mechanical",
      reasons: [
        { content: "Automobiles" },
        { content: "Oil, Gas and Energy" },
        { content: "Aerospace" },
        { content: "Fluid Mechanics" },
        { content: "Thermal Engineering" },
        { content: "Mechatronic" },
      ],
      img: "/Domains/mechanical.jpg",
    },
    {
      heading: "Chemical",
      reasons: [
        { content: "Medicinal" },
        { content: "Chemistry" },
        { content: "Pharmaceutical Chemistry" },
        { content: "Organic/ Inorganic Chemistry" },
        { content: "Physical Chemistry" },
        { content: "Polymer Chemistry" },
        { content: "Analytical Chemistry" },
      ],
      img: "/Domains/chemical.jpg",
    },
    {
      heading: "Medical, Biotechnology and Pharmaceutical",
      reasons: [
        { content: "Medicine formulation and chemical structure" },
        { content: "Personalized Medicine" },
        { content: "Synthetic Biology & Nanotechnology" },
        { content: "Therapeutics" },
        { content: "Tissue Engineering" },
        { content: "Dosage & Formulations" },
        { content: "RNA/DNA sequence searching" },
      ],
      img: "/Domains/medical.jpg",
    },
    {
      heading: "Aerospace Technology",
      reasons: [
        { content: "Zero-Fuel Aircraft" },
        { content: "Structural Health Monitoring (SHM)" },
        { content: "Advanced Materials" },
        { content: "Smart Automation and Blockchain" },
        { content: "Additive Manufacturing (3D Printing)" },
        { content: "Supersonic Flights" },
        { content: "More Resilient and Dynamic A&D Supply Chains" },
        {
          content:
            "Utilizing Internet of Things (IoT) to Anticipate Maintenance Issues",
        },
        { content: "Artificial intelligence (AI)" },
        { content: "Autonomous Flight Systems" },
      ],
      img: "/Domains/aerospace.jpg",
    },
  ];

  return { domains };
};

export default useDomains;
