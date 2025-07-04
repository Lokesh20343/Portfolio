import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.08),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="text-primary font-semibold text-lg tracking-wider">Hi, I'm</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-2 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            LOKESH
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Full-Stack Developer
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-muted-foreground">
            Blockchain & AI Enthusiast
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Computer Science graduate passionate about building innovative solutions with 
            cutting-edge technologies. Specializing in full-stack development, blockchain, 
            and generative AI applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://drive.google.com/file/d/1XJDkIAOzAy8gMvBg3RdARxgm7iMHDWnv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/Lokesh20343" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/reddipigari-lokesh-reddy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;