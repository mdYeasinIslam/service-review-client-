import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const sections = [
    {
      title: "Services",
      links: ["Branding", "Design", "Marketing", "Advertisement"],
    },
    {
      title: "Company",
      links: ["About us", "Contact", "Jobs", "Press kit"],
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mohammad-yeasin-islam",
    },
    { icon: FaXTwitter, href: "https://x.com/hyeasinislam" },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/mohammad.yeasin.895788/",
    },
  ];

  return (
    <footer className="footer p-10 bg-base-300 text-base-content border-t border-gray-500">
      {sections.map((section) => (
        <nav key={section.title}>
          <header className="footer-title">{section.title}</header>
          {section.links.map((link) => (
            <a key={link} className="link link-hover">
              {link}
            </a>
          ))}
        </nav>
      ))}

      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          {socialLinks.map(({ icon: Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noreferrer">
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <div className="mt-10">
          <h3 className="font-bold">Copyright © 2023 - All right reserved</h3>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
