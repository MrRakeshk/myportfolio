import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/MrRakeshk"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://www.linkedin.com/in/rakeshk1704"
    },
    {
      name: "LeetCode",
      icon: ExternalLink,
      url: "https://leetcode.com/u/Rakeshk2003/"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:mrrakeshk1704@gmail.com"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold portfolio-gradient-text">
                Rakesh K
              </h3>
              <p className="text-muted-foreground">
                Passionate Java developer and full-stack engineer building innovative solutions with modern technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 mrrakeshk1704@gmail.com</p>
                <p>📱 +91 9381556505</p>
                <p>📍 Chennai, India</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Rakesh K. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm flex items-center mt-2 md:mt-0">
                Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;