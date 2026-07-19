export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  category: string;
  gradient: string;
  metrics: string[];
  githubUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    slug: "medical-insurance-price-prediction",
    title: "Medical Insurance Price Prediction",
    summary:
      "A regression model that estimates insurance premiums from demographic and lifestyle attributes.",
    description:
      "An end-to-end machine learning workflow covering exploratory analysis, feature preparation, model comparison, and a clean prediction interface.",
    stack: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    category: "Regression",
    gradient: "from-cyan-400/30 via-blue-500/20 to-indigo-600/30",
    metrics: ["R² score 0.88", "Feature engineering", "Interactive app"],
    githubUrl:
      "https://github.com/ShubhamMane1211/Medical_Insurance_Price_Prediction",
    demoUrl: "#result",
  },
  {
    slug: "student-management-system",
    title: "Student Management System",
    summary:
      "A practical application for organizing student records, academic data, and everyday workflows.",
    description:
      "A structured management system focused on reliable record handling and a clear, approachable experience for users.",
    stack: ["Python", "Flask", "SQL", "Bootstrap"],
    category: "Web Application",
    gradient: "from-violet-400/30 via-fuchsia-500/20 to-pink-600/30",
    metrics: ["CRUD workflows", "SQL-backed", "Responsive UI"],
    githubUrl: "https://github.com/ShubhamMane1211/student-management-system",
    demoUrl: "https://student-management-system-1-bl6a.onrender.com",
  },
  {
    slug: "house-price-prediction",
    title: "House Price Prediction",
    summary:
      "A data-driven price estimator built from housing features and market indicators.",
    description:
      "A supervised learning project exploring the effect of location, size, and amenities on property value with transparent model evaluation.",
    stack: ["Python", "NumPy", "Scikit-learn", "Matplotlib"],
    category: "Regression",
    gradient: "from-emerald-400/30 via-teal-500/20 to-cyan-600/30",
    metrics: ["Model evaluation", "EDA pipeline", "Price insights"],
    githubUrl:
      "https://github.com/ShubhamMane1211/House_Price_Prediction_ML_Project",
    demoUrl: "#results",
  },
  {
    slug: "used-car-price-prediction",
    title: "Used Car Price Prediction",
    summary:
      "An ML model for estimating fair market prices for pre-owned vehicles.",
    description:
      "This project turns raw vehicle listings into useful prediction features, helping reveal the variables that most affect resale value.",
    stack: ["Python", "Pandas", "Seaborn", "Scikit-learn"],
    category: "Regression",
    gradient: "from-amber-300/30 via-orange-500/20 to-rose-600/30",
    metrics: ["Cleaned data", "Visual analysis", "Regression model"],
    githubUrl: "https://github.com/ShubhamMane1211/Used_Car_Price_Prediction",
    demoUrl: "https://usedcarpriceprediction-webapp.streamlit.app/",
  },
  {
    slug: "customer-segmentation",
    title: "Customer Segmentation",
    summary:
      "A clustering analysis that groups customers into actionable behavioral segments.",
    description:
      "An unsupervised learning project using customer attributes to identify patterns that can inform targeted engagement strategies.",
    stack: ["Python", "K-Means", "Pandas", "Matplotlib"],
    category: "Clustering",
    gradient: "from-blue-400/30 via-indigo-500/20 to-violet-600/30",
    metrics: ["K-Means clustering", "Segment profiles", "Business insights"],
    githubUrl: "https://github.com/ShubhamMane1211/Customer_Segmentation",
    demoUrl: "https://customersegmentation-app.streamlit.app/",
  },
];
