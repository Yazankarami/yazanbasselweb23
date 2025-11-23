import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PatientDashboardProps {
  profile: any;
}

const PatientDashboard = ({ profile }: PatientDashboardProps) => {
  const navigate = useNavigate();

  const { data: posts, isLoading } = useQuery({
    queryKey: ["all-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select(`
          *,
          profiles:author_id (
            full_name,
            specialization
          )
        `)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Patient Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {profile.full_name}
        </p>
      </div>

      <div className="grid gap-4">
        {isLoading ? (
          <p>Loading posts...</p>
        ) : posts && posts.length > 0 ? (
          posts.map((post) => (
            <Card key={post.id} className="shadow-medium hover:shadow-large transition-shadow">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                  By Dr. {post.profiles?.full_name}
                  {post.profiles?.specialization && ` • ${post.profiles.specialization}`}
                  {post.illness_category && ` • ${post.illness_category}`}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground whitespace-pre-wrap line-clamp-4">
                  {post.content}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Posted {new Date(post.created_at).toLocaleDateString()}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => navigate(`/forum/${post.id}`)}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Discuss
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground">No posts available yet.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;
