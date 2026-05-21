import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const sections = [
    {
      heading: "Explore",
      links: ["Destinations", "Adventures", "City Guides", "Beach Escapes"],
      isClickable: false,
    },
    {
      heading: "Resources",
      links: ["Travel Guides", "Visa Info", "Packing Lists", "Travel Insurance"],
      isClickable: false,
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", link: "/about" },
        { label: "Blog", link: "/blog" },
        { label: "Contact", link: "/contact" },
        { label: "Privacy Policy", link: "/privacy" },
      ],
      isClickable: true,
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
    <footer className="bg-black border-t border-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">✈️</span>
              <span className="text-lg font-bold text-white">Adventa</span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Real travel stories from real travellers. No sponsored fluff.
            </p>
          </div>
          {sections.map(({ heading, links, isClickable }) => (
            <div key={heading}>
              <p className="text-white text-sm font-semibold mb-3">{heading}</p>
              <ul className="space-y-2">
                {links.map((link) => {
                  const text = isClickable ? link.label : link;
                  const href = isClickable ? link.link : "#";
                  
                  return (
                    <li key={text}>
                      {isClickable ? (
                        <a
                          href={href}
                          className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
                        >
                          {text}
                        </a>
                      ) : (
                        <span className="text-neutral-500 text-sm">{text}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-neutral-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-neutral-600 text-xs">
            © 2026 WanderLog. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-neutral-400 transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
