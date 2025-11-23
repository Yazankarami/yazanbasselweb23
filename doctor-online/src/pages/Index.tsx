import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Stethoscope, Users, MessageCircle, Shield } from "lucide-react";

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      
      if (session) {
        navigate("/dashboard");
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        
        if (session && event === "SIGNED_IN") {
          navigate("/dashboard");
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <nav className="border-b bg-card/80 backdrop-blur-sm shadow-soft">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="p-2 bg-gradient-primary rounded-xl">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>
            Dr. Online
          </div>
          <Link to="/auth">
            <Button>Sign In</Button>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-4">
            <Stethoscope className="h-16 w-16 text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Connect with Medical
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Professionals & Patients
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A trusted platform where doctors share medical insights and patients engage
            in meaningful health discussions. Join our community today.
          </p>

          <div className="flex gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="text-lg px-8">
                Get Started
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="p-6 rounded-2xl bg-card shadow-medium hover:shadow-large transition-shadow">
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Doctors</h3>
              <p className="text-muted-foreground">
                Connect with verified medical professionals sharing the latest research
                and insights.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-medium hover:shadow-large transition-shadow">
              <div className="p-3 bg-secondary/10 rounded-xl w-fit mb-4">
                <MessageCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Active Discussions</h3>
              <p className="text-muted-foreground">
                Join conversations about health topics that matter to you and your
                community.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-medium hover:shadow-large transition-shadow">
              <div className="p-3 bg-accent/10 rounded-xl w-fit mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Platform</h3>
              <p className="text-muted-foreground">
                Secure, moderated environment ensuring quality discussions and accurate
                information.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
