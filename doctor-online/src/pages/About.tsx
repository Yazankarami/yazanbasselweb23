import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Users, Shield, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">About Dr. Online</h1>
            <p className="text-xl text-muted-foreground">
              Connecting patients with medical expertise through meaningful discussions
            </p>
          </div>

          <Card className="shadow-large">
            <CardContent className="pt-6 space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Online is a revolutionary platform designed to bridge the gap between medical 
                professionals and patients seeking reliable health information. We provide a safe, 
                moderated environment where doctors can share the latest medical research, studies, 
                and insights while patients can ask questions and engage in informed discussions 
                about their health concerns.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-medium hover:shadow-large transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-primary rounded-xl">
                    <Stethoscope className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Expert Medical Content</h3>
                </div>
                <p className="text-muted-foreground">
                  Access verified medical studies and health updates shared by licensed healthcare professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-primary rounded-xl">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Community Driven</h3>
                </div>
                <p className="text-muted-foreground">
                  Join a supportive community where patients and doctors engage in meaningful health discussions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-primary rounded-xl">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Safe & Secure</h3>
                </div>
                <p className="text-muted-foreground">
                  Your privacy is our priority. All discussions are moderated and your data is protected.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-primary rounded-xl">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Patient-Centered</h3>
                </div>
                <p className="text-muted-foreground">
                  Empowering patients with knowledge and creating connections that improve health outcomes.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-large bg-gradient-hero">
            <CardContent className="pt-6 space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Why Dr. Online?</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Access to verified medical information from licensed doctors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Engage in discussions about specific illnesses and treatments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Stay updated with the latest medical research and studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Connect with a community of patients and healthcare providers</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
