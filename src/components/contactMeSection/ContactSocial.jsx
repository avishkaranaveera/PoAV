import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/avishka-ranaveera-b5a904315/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/avishkaranaveera" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/avishka_ranaveera?igsh=cGRkN2thcmx4N3o1" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
