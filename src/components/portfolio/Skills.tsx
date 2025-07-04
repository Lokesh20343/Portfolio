import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "UI/UX Design"],
      color: "bg-primary/10 border-primary/20"
    },
    {
      title: "Backend Development",
      skills: ["Python", "Node.js", "MongoDB", "API Integration", "Real-time Systems"],
      color: "bg-accent/10 border-accent/20"
    },
    {
      title: "Blockchain & Web3",
      skills: ["Solidity", "Smart Contracts", "Web3.js", "IPFS", "MetaMask", "DApp Development"],
      color: "bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "AI & Machine Learning",
      skills: ["Gemini API", "Prompt Engineering", "NLP", "Ethical AI", "LLM Integration"],
      color: "bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "JavaScript", "Solidity"],
      color: "bg-orange-500/10 border-orange-500/20"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Remix IDE", "MongoDB Atlas", "IPFS", "GitHub", "VS Code"],
      color: "bg-blue-500/10 border-blue-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and innovative applications
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className={`${category.color} hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-background/60 text-foreground hover:bg-background/80 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-card/50 border-border/50 max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Additional Competencies</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    "Problem Solving",
                    "System Design",
                    "Code Review",
                    "Team Collaboration",
                    "Project Management",
                    "Technical Writing"
                  ].map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-background/60">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;