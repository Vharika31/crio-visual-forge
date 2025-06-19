
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, 
  Users, 
  Award, 
  BookOpen, 
  Target, 
  Zap,
  CheckCircle,
  TrendingUp
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Project-Based Learning",
    description: "Build real-world applications and add them to your portfolio while learning"
  },
  {
    icon: Users,
    title: "1:1 Mentorship",
    description: "Get personalized guidance from industry experts throughout your journey"
  },
  {
    icon: Award,
    title: "Industry Certification",
    description: "Earn recognized certificates that validate your skills to employers"
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Cover everything from basics to advanced concepts with structured modules"
  },
  {
    icon: Target,
    title: "Job Placement Support",
    description: "Resume building, interview prep, and direct connections with hiring partners"
  },
  {
    icon: Zap,
    title: "Hands-on Practice",
    description: "Learn by doing with interactive coding exercises and real projects"
  }
];

const stats = [
  { number: "50,000+", label: "Students Trained", icon: Users },
  { number: "85%", label: "Placement Rate", icon: TrendingUp },
  { number: "500+", label: "Hiring Partners", icon: CheckCircle },
  { number: "4.8/5", label: "Student Rating", icon: Award }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Crio.do?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience learning like never before with our unique approach that focuses on 
            practical skills and real-world application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
