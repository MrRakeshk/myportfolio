import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
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

  const education = [
    {
      degree: "BE.CSE",
      institution: "Saveetha School of Engineering",
      location: "Chennai, India",
      duration: "2021 – 2025",
      score: "CGPA - 8.0",
      type: "Bachelor's Degree",
      description: "Computer Science and Engineering with focus on software development, algorithms, and system design."
    },
    {
      degree: "HSC",
      institution: "Sri Vivekananda Jr. College",
      location: "Chittoor, India", 
      duration: "2019 – 2021",
      score: "Marks - 95.4%",
      type: "Higher Secondary",
      description: "Higher Secondary Education with specialization in Mathematics, Physics, and Chemistry."
    },
    {
      degree: "SSLC",
      institution: "ZP High School",
      location: "Chittoor, India",
      duration: "2018 – 2019", 
      score: "Marks - 97%",
      type: "Secondary School",
      description: "Secondary School Leaving Certificate with exceptional academic performance."
    }
  ];

  const achievements = [
    {
      title: "Best Poster Award",
      event: "SIMATS Tech Star Summit",
      date: "06/2024",
      description: "Recognized for outstanding presentation and innovation"
    },
    {
      title: "Best Project Prototype Award",
      event: "OneYes Startup Fest",
      date: "04/2024",
      description: "Won for innovative project prototype development"
    },
    {
      title: "Intra Institutional Project Plan Competition",
      event: "II Prize",
      date: "11/2024",
      description: "Second place in institutional project planning competition"
    }
  ];

  const certificates = [
    "Oracle Cloud Infrastructure AI Generative (07/2024)",
    "Oracle APEX Cloud Developer Professional (03/2025)",
    "Udemy Java Advanced for Masters"
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Education & <span className="portfolio-gradient-text">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic excellence and continuous learning journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Section */}
            <div className="space-y-8">
              <h3 className={`text-2xl font-bold text-primary mb-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                Academic Background
              </h3>
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className={`portfolio-card card-hover ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg">{edu.degree}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {edu.type}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-muted-foreground mb-2">{edu.institution}</h4>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Performance:</span>
                        <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                          {edu.score}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Achievements & Certificates */}
            <div className="space-y-8">
              {/* Achievements */}
              <div>
                <h3 className={`text-2xl font-bold text-primary mb-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                  Awards & Recognition
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <Card 
                      key={index}
                      className={`portfolio-card card-hover ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
                      style={{ animationDelay: `${(index + 3) * 0.2}s` }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-accent/10 rounded-lg">
                            <Award className="h-5 w-5 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-primary mb-1">{achievement.title}</h4>
                            <p className="text-sm font-medium text-muted-foreground mb-1">{achievement.event}</p>
                            <div className="flex justify-between items-center">
                              <p className="text-xs text-muted-foreground">{achievement.description}</p>
                              <Badge variant="outline" className="text-xs">
                                {achievement.date}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Certificates */}
              <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
                <h3 className="text-2xl font-bold text-primary mb-6">Certifications</h3>
                <Card className="portfolio-card">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {certificates.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;