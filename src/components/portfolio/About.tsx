import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <p className="text-lg text-muted-foreground leading-relaxed pl-6">
                  As a Computer Science graduate, I'm passionate about leveraging emerging technologies 
                  to solve real-world problems. My journey spans full-stack web development, blockchain 
                  innovation, and AI-powered solutions.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-accent to-primary rounded-full"></div>
                <p className="text-lg text-muted-foreground leading-relaxed pl-6">
                  I believe in the transformative power of technology and strive to build applications 
                  that are not only functional but also meaningful. My experience includes developing 
                  decentralized applications, integrating AI capabilities, and creating seamless 
                  user experiences.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-semibold text-lg mb-3 text-primary">Education</h3>
                  <p className="text-muted-foreground">Computer Science Graduate</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-semibold text-lg mb-3 text-accent">Focus Areas</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Full-Stack Development • Blockchain Technology • Generative AI • Web3
                  </p>
                </div>
              </div>
            </div>

            <Card className="glass-card border-border/50 hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">★</span>
                  </div>
                  <h3 className="font-semibold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Core Strengths</h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start group">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 group-hover:scale-125 transition-transform"></div>
                    <span className="group-hover:text-foreground transition-colors">Strong analytical and problem-solving abilities</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 group-hover:scale-125 transition-transform"></div>
                    <span className="group-hover:text-foreground transition-colors">Effective communication and collaboration skills</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 group-hover:scale-125 transition-transform"></div>
                    <span className="group-hover:text-foreground transition-colors">Passion for continuous learning and innovation</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 group-hover:scale-125 transition-transform"></div>
                    <span className="group-hover:text-foreground transition-colors">Experience with modern development practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;