import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Zap, Target, TrendingUp, Users, MapPin, Globe } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "PawTag Collar – Smart IoT Solution",
      description: "Smart collar with real-time tracking and health alerts using GPS and biosensors. Built 3D prototype in Blender and SolidWorks.",
      icon: MapPin,
      highlights: [
        "Reduced false alerts by 60%",
        "Operational costs reduced by 40%",
        "TabNet model achieved higher accuracy",
        "Real-time GPS tracking"
      ],
      tech: ["IoT", "GPS", "TabNet", "Random Forest", "Blender", "SolidWorks"],
      category: "IoT & Hardware"
    },
    {
      title: "Global Cryptocurrency Price Prediction",
      description: "Achieved 88.4% accuracy using Support Vector Machine (SVM) model. Compared performance with LSTM and Random Forest.",
      icon: TrendingUp,
      highlights: [
        "88.4% prediction accuracy",
        "SVM vs LSTM comparison",
        "Faster training with high precision",
        "Long-term pattern recognition"
      ],
      tech: ["Python", "SVM", "LSTM", "Random Forest", "Machine Learning"],
      category: "AI & ML"
    },
    {
      title: "Job Portal – MERN Stack",
      description: "Full-featured job portal enabling users to register, post jobs, and apply online. Built with secure authentication and RESTful APIs.",
      icon: Users,
      highlights: [
        "Secure user authentication",
        "RESTful API integration",
        "Responsive across all devices",
        "Improved user experience"
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
      category: "Full-Stack Web",
      liveUrl: "https://cc-frontend-dusky.vercel.app/",
      githubUrl: "https://github.com/MrRakeshk"
    },
    {
      title: "Easy Visa – Management System",
      description: "Full-stack visa management platform with CRUD operations, status tracking, and secure login functionality.",
      icon: Globe,
      highlights: [
        "Complete CRUD operations",
        "Status tracking system",
        "Responsive design",
        "Improved data accessibility"
      ],
      tech: ["React", "Express.js", "MongoDB", "Vercel"],
      category: "Full-Stack Web",
      liveUrl: "https://easy-visa-frontend.vercel.app/",
      githubUrl: "https://github.com/MrRakeshk"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="portfolio-gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions showcasing technical expertise and problem-solving skills
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`portfolio-card card-hover group ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm">
                          <Zap className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {(project.liveUrl || project.githubUrl) && (
                    <div className="flex space-x-3 pt-4">
                      {project.liveUrl && (
                        <Button 
                          variant="default" 
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="https://github.com/MrRakeshk" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;