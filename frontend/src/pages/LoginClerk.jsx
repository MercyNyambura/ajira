import React from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginClerk() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login to Ajirio</CardTitle>
        </CardHeader>
        <CardContent>
          <SignIn path="/login" routing="path" signUpUrl="/signup" />
        </CardContent>
      </Card>
    </div>
  );
}
