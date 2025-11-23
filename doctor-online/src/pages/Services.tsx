import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, MessageSquare, Bell, Search, Lock, UserCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: FileText,
      title: "Medical Studies & Updates",
      description: "Access the latest medical research, studies, and health updates shared by verified doctors.",
      features: ["Verified medical content", "Illness-specific categories", "Regular updates"]
    },
    {
      icon: MessageSquare,
      title: "Discussion Forum",
      description: "Engage in meaningful conversations with healthcare professionals and other patients.",
      features: ["Public discussions", "Doctor moderation", "Community support"]
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description: "Stay informed about new posts, replies, and important health updates.",
      features: ["Instant alerts", "Personalized notifications", "Never miss updates"]
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Find specific medical information, studies, or discussions quickly and efficiently.",
      features: ["Category filters", "Keyword search", "Smart recommendations"]
    },
    {
      icon: Lock,
      title: "Privacy & Security",
      description: "Your health information and discussions are protected with enterprise-grade security.",
      features: ["Data encryption", "Secure authentication", "HIPAA compliant"]
    },
    {
      icon: UserCheck,
      title: "Verified Doctors",
      description: "Connect with licensed healthcare professionals who share evidence-based information.",
      features: ["Credential verification", "Specialization badges", "Professional profiles"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive features designed to connect patients with medical expertise and foster informed health discussions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-medium hover:shadow-large transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-gradient-primary rounded-xl">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-large bg-gradient-hero">
            <CardContent className="pt-8 pb-8 text-center space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold text-foreground">Ready to Get Started?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Join our community of patients and healthcare professionals today. 
                  Access verified medical information and engage in meaningful health discussions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="gap-2"
                  onClick={() => navigate("/auth")}
                >
                  Sign Up Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate("/forum")}
                >
                  Browse Discussions
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">For Patients</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Access reliable health information, read the latest medical studies, 
                  and participate in discussions about various health topics.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Read verified medical content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Ask health-related questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Join community discussions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Stay informed about health updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">For Doctors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Share your expertise, publish medical studies, and engage with patients 
                  in a professional and moderated environment.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Share medical research and studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Post health updates and insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Moderate and manage discussions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Build your professional presence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
