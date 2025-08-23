let info = {
  name: "shatrio",
  logo_name: "RiO",
  flat_picture: require("./src/assets/rr.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false,
    },
  },
  description:
    "A bachelor degree of informatics engineering. Previous experience as a production operator, driving the transition to Frontend developer due to strong interest in the technology and its application and want to be useful for society with technology",
  links: {
    linkedin: "https://www.linkedin.com/in/shatriyo-adi-putro-b98888258/",
    github: "https://github.com/wiluyo12",
    instagram: "https://www.instagram.com/shatrio.adi/",
    resume: "https://drive.google.com/drive/folders/1YRbr6EXa40wpVdPz3Rz7p84lzjzSZebZ?usp=drive_link",
  },
  education: [
    {
      name: "Krisna Dwipayana University",
      place: "Jakarta, Indonesia",
      date: "jun, 2022 - present",
      degree: "bachelor in informatics technology",
      gpa: "3.6/4.0",
      description: "",
      skills: ["Management Project", "web programming", "Front-end development", "Back-end development"],
    },
  ],
  experience: [
    {
      name: "PT.Yutaka Manufacturing Indonesia",
      place: "Cibitung, Indonesia",
      date: "May, 2019 - Feb, 2021",
      position: "Production Operator & Machine Maintenance",
      description: "",
      skills: ["Finger Caliper", "Technical Drawing", "Developed preventive maintenance", "Operated stamping machine Aida 630T"],
    },
    {
      name: "PT. Yamaha Music Manufacturing Asia",
      place: "Cibitung, Indonesia",
      date: "Apr 2021 - Nov 2022",
      position: "Production Operator & Admin Production",
      description: "",
      skills: ["Operated Toshiba injection molding 180T", "Product Inspection", "Google SpreadSheet", "Excel"],
    },
    {
      name: "PT. Sanly Industries",
      place: "Cibitung, Indonesia",
      date: "Sept, 2023 - sep, 2025",
      position: "Production Operator",
      description: "",
      skills: [" Operating injection molding machine using Super Master 360T", " inspections of the products", "Manual deburring with cutter after injection molding."],
    },
  ],
  skills: [
    {
      title: "Design",
      info: ["Figma", "Canva"],
      icon: "fa fa-pencil-square-o",
    },
    {
      title: "Language",
      info: ["Python", "Javascript"],
      icon: "fa fa-code",
    },
    {
      title: "Front-end",
      info: ["HTML5", "CSS3", "Tailwind"],
      icon: "fa fa-cubes",
    },
    {
      title: "web technologies",
      info: ["React", "NodeJs, pyhton"],
      icon: "fas fa-laptop-code",
    },
  ],
  portfolio_design: [],
  portfolio: [
    {
      name: "Evaluas - App",
      pictures: [
        {
          img: require("./src/assets/portfolio/diary/login.png"),
        },
        {
          img: require("./src/assets/portfolio/diary/header.png"),
        },
        {
          img: require("./src/assets/portfolio/diary/main.png"),
        },
        {
          img: require("./src/assets/portfolio/diary/footer.png"),
        },
      ],
      technologies: ["react", "js", "Tailwind"],
      category: "Web App",
      date: "July, 2025 - 10 days",
      github: "https://github.com/wiluyo12/sistem_pengambilan_keputusan",
      visit: "https://evaluas.netlify.app/login",
      description: " Developed a decision support web application with React.js and Tailwind CSS to evaluate and select the best operator based on performance criteria such as attendance, quality, and compliance ",
    },
    {
      name: "Mizanstore- clone - App",
      pictures: [
        {
          img: require("./src/assets/portfolio/online examination/mizanStore1.png"),
        },
        {
          img: require("./src/assets/portfolio/online examination/mizanStore2.png"),
        },
      ],
      technologies: ["HTML", "CSS", "JavaSript", "React.Js", "MySQL"],
      category: "Web App",
      date: "Jan, 2024 - Apr, 2024",
      github: "https://github.com/zakikurniawan27/mizanstoreClone-backend",
      // visit: "https://github.com/mahy209/online-examination.git",
      description:
        "Clone Website Project – Final Project Bootcamp Harisenin.com. This project was my final assignment during the Harisenin.com bootcamp, where I built a website clone focusing on UI/UX implementation, frontend structure, and core feature integration. The project aimed to enhance my skills in HTML, CSS, JavaScript, and relevant frameworks/libraries, as well as to apply best practices in modern web development.",
    },

    {
      name: "Analysis of the Influence of Mental Health on Students Academic Achievement",
      pictures: [
        {
          img: require("./src/assets/portfolio/myflix.com/mentalHealt1.png"),
        },
        {
          img: require("./src/assets/portfolio/myflix.com/mentalHealt2.png"),
        },
        {
          img: require("./src/assets/portfolio/myflix.com/mentalHealt3.png"),
        },
      ],
      technologies: ["GoogleColab", "Python", "pandas", "Matplotlib", "IBM Granite AI"],
      category: "Data Science",
      date: "Jul, 2025 - 7 days",
      github: "https://github.com/wiluyo12/Capstone-IBM-HACKTIV8-SHATRIO",
      visit: "https://www.canva.com/design/DAGsXlWQ7eE/8gvaNUsqeOLzaj2KFpZo3w/edit?utm_content=DAGsXlWQ7eE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      description: " This project analyzed a public Kaggle dataset on student mental health using Python (Pandas, Matplotlib) and IBM Granite to explore the impact of academic, financial, and social pressures on student well-being. ",
    },
  ],
};

export default info;
