import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/20 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12 lg:gap-16">
          {/* Content - Left Side, Centered */}
          <div className={`order-2 lg:order-1 text-center lg:text-left max-w-2xl ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-foreground">Hi, I'm</span>
                  <span className="block portfolio-gradient-text">Rakesh K</span>
                </h1>
                <div className="text-xl lg:text-2xl text-muted-foreground space-y-2">
                  <p>💻 <span className="text-primary">Java Developer</span> & <span className="text-accent">Full-Stack Engineer</span></p>
                  <p>🚀 Building powerful applications with passion</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                💻 Aspiring Software Developer skilled in Java problem-solving and building full-stack MERN projects. 
                🚀 Delivered 3+ real-world applications with optimized performance and great client feedback.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="portfolio-glow hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6">
                <a 
                  href="https://github.com/MrRakeshk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rakeshk1704" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://leetcode.com/u/Rakeshk2003/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full"
                >
                  <ExternalLink className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className={`order-1 lg:order-2 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden portfolio-glow">
                <img 
                  src="/lovable-uploads/2daa47ef-87b4-41d3-8b53-c2ca85b85096.png" 
                  alt="Rakesh K - Software Developer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary rounded-xl rotate-45 opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-accent rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;