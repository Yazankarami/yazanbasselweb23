import { supabase } from "@/integrations/supabase/client";

export type UserRole = "doctor" | "patient";

export interface SignUpData {
  email: string;
  password: string;
  fullName: string;
  role: UserRole;
  specialization?: string;
  yearsOfExperience?: number;
  bio?: string;
}

export const signUp = async (data: SignUpData) => {
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo: `${window.location.origin}/`,
      data: {
        full_name: data.fullName,
        role: data.role,
        specialization: data.specialization,
        years_of_experience: data.yearsOfExperience,
        bio: data.bio,
      },
    },
  });

  return { error };
};

export const signIn = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};
