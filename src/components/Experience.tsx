import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building2, Users, Plane, Code } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      title: "Associate Career Guide & Tutor",
      company: "Vidhu Academy",
      location: "Chennai, India",
      duration: "03/2024 – 08/2024",
      type: "Education",
      icon: Users,
      description: "Guided school and college students to improve their career prospects through technical training and mentorship.",
      achievements: [
        "Conducted hands-on sessions on emerging technologies",
        "Helped students build practical skills and real-world project experience",
        "Enhanced student confidence and employability",
        "Bridged the gap between academic learning and industry expectations"
      ],
      skills: ["Teaching", "Mentorship", "Technical Training", "Career Guidance"]
    },
    {
      title: "Agri Drone Pilot",
      company: "Garuda Aerospace (Visit Bharat Yatra, Govt. of India)",
      location: "Amreli, India",
      duration: "11/2023 – 02/2024",
      type: "Government Initiative",
      icon: Plane,
      description: "Operated agricultural drones to demonstrate their use in farming during the Visit Bharat Yatra initiative by the Central Government.",
      achievements: [
        "Trained under Garuda Aerospace for professional drone operations",
        "Conducted live demos across villages in Amreli, Gujarat",
        "Educated farmers and local panchayats on drone spraying and precision farming",
        "Helped spread awareness of drone technology in agriculture"
      ],
      skills: ["Drone Operations", "Agriculture Technology", "Public Speaking", "Training"]
    },
    {
      title: "Web Developer",
      company: "Code Blind (Training Program)",
      location: "Remote",
      duration: "07/2022 – 08/2022",
      type: "Training",
      icon: Code,
      description: "Gained hands-on experience in front-end development and MERN stack through structured training.",
      achievements: [
        "Built a Used Car Selling Website with dynamic car listings",
        "Implemented user-friendly UI and responsive design",
        "Strengthened full-stack development skills",
        "Improved ability to build real-world web applications"
      ],
      skills: ["MERN Stack", "Frontend Development", "UI/UX Design", "Web Development"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Education': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Government Initiative': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Training': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Professional <span className="portfolio-gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diverse experience across education, government initiatives, and technology
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className={`portfolio-card card-hover ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <exp.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                        <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge className={`${getTypeColor(exp.type)} border text-xs px-3 py-1`}>
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Skills & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;