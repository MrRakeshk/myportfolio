import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: ["Java", "JavaScript", "SQL", "Git", "DSA", "OOPs", "Database", "Software Testing", "REST API", "Backend", "Frontend"],
      color: "text-blue-400"
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "GitHub", "Vercel", "Firebase", "VS Code", "Selenium", "Canva", "SPSS", "Figma", "Blender"],
      color: "text-green-400"
    },
    {
      title: "Familiar Technologies",
      icon: Brain,
      skills: ["Python", "Deep Learning", "Machine Learning", "Data Analytics", "Power BI"],
      color: "text-purple-400"
    }
  ];

  const mainSkills = [
    { name: "Java", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 88 },
    { name: "Node.js", level: 82 },
    { name: "MongoDB", level: 80 },
    { name: "SQL", level: 85 }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="portfolio-gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`portfolio-card card-hover ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Skills Progress */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-center mb-8">Core Proficiencies</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {mainSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full skill-progress rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;