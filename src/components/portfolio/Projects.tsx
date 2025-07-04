import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Zod Pay",
      description: "A full-stack digital payment application built with modern web technologies. Features responsive design, secure transactions, and planned banking API integration for seamless financial services.",
      tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "MongoDB"],
      category: "Full-Stack Web Development",
      color: "bg-primary/10 text-primary",
      github: "https://github.com/Lokesh20343/Zod_pay/tree/main/Zod_pay-master",
      demo: "https://github.com/Lokesh20343/Zod_pay/tree/main/Zod_pay-master"
    },
    {
      title: "AI Chatbot with Gemini API",
      description: "An intelligent chatbot leveraging Gemini's LLM for real-time contextual responses. Demonstrates advanced prompt engineering and natural language processing capabilities.",
      tech: ["Python", "Gemini API", "NLP", "Prompt Engineering"],
      category: "Generative AI",
      color: "bg-accent/10 text-accent",
      github: "https://github.com/Lokesh20343/chat_bot",
      demo: "https://github.com/Lokesh20343/chat_bot"
    },
    {
      title: "Blockchain Land Registry DApp",
      description: "A decentralized land registration system enabling transparent property transactions. Features smart contract integration, IPFS document storage, and MetaMask authentication.",
      tech: ["Solidity", "React.js", "Web3.js", "IPFS", "MongoDB", "MetaMask"],
      category: "Blockchain Development",
      color: "bg-purple-500/10 text-purple-500",
      github: "https://github.com/Lokesh20343/BlockChain_land_rms",
      demo: "https://github.com/Lokesh20343/BlockChain_land_rms"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A showcase of my work across full-stack development, AI integration, and blockchain technology
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card/50 border-border/50 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={project.color} variant="secondary">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View
                        </a>
                      </Button>
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

export default Projects;