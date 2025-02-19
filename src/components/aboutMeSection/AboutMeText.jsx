import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Avishka Ranaveera, a full stack developer and DevOps learner. Passionate about building dynamic, scalable web applications with a keen interest in both front-end and
        back-end development. Currently pursuing a Software Engineering degree with hands-on experience in HTML,
        CSS, JavaScript, React, Java, Springboot, and databases (SQL & NoSQL).
        Proficient in designing responsive UI, developing RESTful APIs, and working with version control like Git and
        GitHub. Enthusiastic about problem solving, clean code, and agile development. Seeking an internship
        opportunity to apply my skills in a real-world environment and collaborate with development teams
      </p>
      <button className="border border-cyan rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:border-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-white transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
