import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, or innovative projects. 
            Let's connect and build something amazing together!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-primary" />
                    Let's Connect
                  </CardTitle>
                  <CardDescription>
                    Open to full-time roles, internships, and freelance opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a href="https://github.com/Lokesh20343" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        github.com/Lokesh20343
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/reddipigari-lokesh-reddy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        linkedin.com/in/reddipigari-lokesh-reddy
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:lokeshreddy11877@gmail.com" className="text-primary hover:underline">
                        lokeshreddy11877@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Looking For</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Full-Stack Developer positions
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Blockchain/Web3 development roles
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      AI/ML integration projects
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Open-source collaborations
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Let's discuss opportunities" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or opportunity..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;