import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Phone, Award, Code, Database, Smartphone } from 'lucide-react';

const About = () => {
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

  const stats = [
    { icon: Code, label: "Projects Completed", value: "10+" },
    { icon: Award, label: "Awards Won", value: "3" },
    { icon: Database, label: "Technologies", value: "15+" },
    { icon: Smartphone, label: "Years Experience", value: "2+" }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              About <span className="portfolio-gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer crafting innovative solutions with cutting-edge technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image and Contact Info */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="relative">
                <img 
                  src="/lovable-uploads/2daa47ef-87b4-41d3-8b53-c2ca85b85096.png" 
                  alt="Rakesh K"
                  className="w-full max-w-md mx-auto rounded-2xl portfolio-card"
                />
              </div>
              
              <Card className="portfolio-card card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <span className="text-muted-foreground">mrrakeshk1704@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-accent" />
                      <span className="text-muted-foreground">+91 9381556505</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span className="text-muted-foreground">Chennai, India</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* About Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  As a passionate Java developer with strong problem-solving skills, I create efficient and reliable 
                  backend systems to support powerful applications. Along with my backend expertise, I also work with 
                  the MERN stack to build full-stack web applications that are user-friendly and responsive.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I enjoy solving real-world problems by combining clean code, logical thinking, and a focus on 
                  performance. My experience spans from IoT solutions to web applications, always striving for 
                  innovation and excellence.
                </p>
              </div>

              {/* Language Skills */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Tamil', 'Telugu', 'Hindi', 'English'].map((language) => (
                    <Badge key={language} variant="secondary" className="text-sm py-1 px-3">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="portfolio-card card-hover">
                    <CardContent className="p-4 text-center">
                      <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;