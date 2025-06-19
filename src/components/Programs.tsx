
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Code, Briefcase, Database, Smartphone } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Full Stack Developer",
    description: "Master both frontend and backend development with React, Node.js, and databases",
    duration: "6 months",
    students: "12K+",
    level: "Beginner to Advanced",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    icon: Code,
    price: "₹99,999",
    featured: true
  },
  {
    id: 2,
    title: "Data Science & ML",
    description: "Learn Python, machine learning, and data analysis to become a data scientist",
    duration: "8 months",
    students: "8K+",
    level: "Intermediate",
    skills: ["Python", "TensorFlow", "Pandas", "SQL"],
    icon: Database,
    price: "₹1,24,999",
    featured: false
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Build native iOS and Android apps with React Native and Flutter",
    duration: "5 months",
    students: "6K+",
    level: "Beginner",
    skills: ["React Native", "Flutter", "Firebase", "API"],
    icon: Smartphone,
    price: "₹89,999",
    featured: false
  },
  {
    id: 4,
    title: "DevOps Engineering",
    description: "Master cloud infrastructure, CI/CD, and deployment automation",
    duration: "7 months",
    students: "4K+",
    level: "Advanced",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    icon: Briefcase,
    price: "₹1,39,999",
    featured: false
  }
];

const Programs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-designed programs that prepare you for high-demand tech roles. 
            Learn by building real projects with mentorship from experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <Card 
                key={program.id} 
                className={`relative transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  program.featured ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
              >
                {program.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">{program.price}</div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {program.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {program.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      {program.students} enrolled
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Level:</span> {program.level}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full mt-6 ${
                      program.featured 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
