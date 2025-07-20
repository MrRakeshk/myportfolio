import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Globe } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mrrakeshk1704@gmail.com",
      href: "mailto:mrrakeshk1704@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9381556505",
      href: "tel:+919381556505",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#",
      color: "text-red-400"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/MrRakeshk",
      description: "View my code repositories and open source contributions"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/rakeshk1704",
      description: "Connect with me professionally"
    },
    {
      name: "LeetCode",
      icon: ExternalLink,
      url: "https://leetcode.com/u/Rakeshk2003/",
      description: "Check out my coding problem solutions"
    },
    {
      name: "Portfolio",
      icon: Globe,
      url: "https://rakesh-portfolio-verse.vercel.app",
      description: "Explore my complete portfolio website"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className="portfolio-gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's connect and discuss opportunities to work together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="portfolio-card card-hover">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <info.icon className={`h-6 w-6 ${info.color}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-primary">{info.label}</h4>
                            <a 
                              href={info.href}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Message */}
              <Card className="portfolio-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-3">Ready to collaborate?</h4>
                  <p className="text-muted-foreground mb-4">
                    I'm always open to discussing new opportunities, innovative projects, and ways to bring ideas to life through technology.
                  </p>
                  <Button 
                    className="w-full portfolio-glow hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:mrrakeshk1704@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Send me an email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Find Me Online</h3>
                <div className="grid gap-4">
                  {socialLinks.map((link, index) => (
                    <Card 
                      key={index} 
                      className="portfolio-card card-hover group cursor-pointer"
                      onClick={() => window.open(link.url, '_blank')}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                            <link.icon className="h-6 w-6 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-primary group-hover:text-accent transition-colors">
                              {link.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {link.description}
                            </p>
                          </div>
                          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <Card className="portfolio-card border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-primary mb-2">Let's Build Something Amazing</h4>
                      <p className="text-muted-foreground text-sm">
                        Whether it's a full-stack application, an IoT solution, or a machine learning project, 
                        I'm excited to bring your vision to life.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        variant="default" 
                        className="flex-1"
                        asChild
                      >
                        <a href="mailto:mrrakeshk1704@gmail.com">
                          Start a Project
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a href="https://www.linkedin.com/in/rakeshk1704" target="_blank" rel="noopener noreferrer">
                          Connect on LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;