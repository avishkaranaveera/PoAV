import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "JavaScript for Beginners",
    company: "Udemy",
    date: "Jan 2024",
    responsibilities: [
      "Gained a solid foundation in JavaScript, including variables, functions, loops, and event handling.",
      "Learned DOM manipulation to create interactive web pages.",
    ],
  },
  {
    job: "Postman API Fundamentals Student Expert ",
    company: "Postman",
    date: "Feb 2025",
    responsibilities: [
      "Gained hands-on experience in API testing, request handling, and response analysis using Postman.",
      "Learned to create, test, and document APIs efficiently with RESTful principles.",
      "Developed skills in authentication, environment variables, and automated testing for APIs.",
      
    ],
  },
  {
    job: "Git Training ",
    company: "Simplilearn",
    date: "Feb 2025",
    responsibilities: [
      "Gained proficiency in version control using Git, including branching, merging, and repository management.",
      "Learned to collaborate effectively using Git workflows and remote repositories (GitHub/GitLab).",
      "Developed skills in tracking changes, resolving conflicts, and maintaining code integrity in software projects."
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-5xl text-cyan lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
