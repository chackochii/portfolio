const config = {
  site: "https://edwinchacko.online",
  title: "Edwin Chacko | MERN Stack Developer",
  description: {
    long: "Edwin Chacko is a MERN Stack Developer with experience in React, Node.js, Express, PostgreSQL, and AWS. Skilled in building scalable web applications, deploying cloud infrastructure, and collaborating with global clients.",
    short:
      "Edwin Chacko – MERN Stack Developer specializing in React, Node.js, AWS, and scalable web applications.",

  },
  keywords: [
    "Edwin Chacko",
    "edwinchacko",
    "Edwin Chacko MERN Stack Developer",
    "MERN Stack Developer India",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "AWS Developer",
    "Full Stack Developer Edwin",
    "Torcue",
    "Edwin portfolio",
    "web development",
    "PostgreSQL",
    "Express.js",
    "EC2",
    "Hire MERN developer",
    "Full Stack Developer India",
  ],
  author: "Edwin chacko",
  email: "edwinchacko2001@gmail.com",


  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/edwinchacko/",
    github: "https://github.com/chackochii",
  },
};
export { config };
