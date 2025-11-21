import { SignIn as ClerkSignIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";

const SignIn = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-hero px-4">
      <div className="mb-8 text-center">
        <Link to="/" className="inline-flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/20">
            <Briefcase className="h-7 w-7 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-primary-foreground">Ajirio</span>
        </Link>
      </div>
      <div className="w-full max-w-md">
        <ClerkSignIn
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "shadow-xl",
            },
          }}
          redirectUrl="/dashboard"
          signUpUrl="/sign-up"
        />
      </div>
      <p className="mt-6 text-center text-sm text-primary-foreground/80">
        Don't have an account?{" "}
        <Link to="/sign-up" className="font-semibold underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
