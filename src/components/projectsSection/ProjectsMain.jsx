import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Oncology Project for Medical Center",
    year: "Jan 2025 - Present",
    align: "right",
    image: "../../public/images/oncology.png",
   
  },
  {
    name: "National Photography Award Competition Web Application",
    year: "Jan 2025 - Present",
    align: "left",
    image: "../../public/images/Wildlife.png",
   
  },
  {
    name: "Redesign of Asalanka Milk Product Distributors Web Application",
    year: "Dec 2024",
    align: "right",
    image: "../../public/images/CBL.png",
   
  },
  {
    name: "Maternal and Child Clinic Management Web Application",
    year: "Jan 2025 - Present",
    align: "left",
    image: "../../public/images/Clinic.png",
   
  },
  {
    name: "The Burger Shop – Interactive Website",
    year: "Jun 2024",
    align: "right",
    image: "../../public/images/burger.png",
    
  },
  {
    name: "Login and Signup Page",
    year: "Jan 2025",
    align: "left",
    image: "../../public/images/login.png",
    
  },
  {
    name: "Asalanka Milk Product Distributors Web Application",
    year: "Nov 2024",
    align: "right",
    image: "../../public/images/CBL.png",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
