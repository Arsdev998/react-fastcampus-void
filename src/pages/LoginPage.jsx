import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const LoginPage = () => {
  return (
    <main className="px-4 container py-8 flex flex-col justify-center items-center max-w-screen-md h-[80vh]">
      <Card className="w-full max-w-[540px]">
        <CardHeader>
          <CardTitle>Welcome Back</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="">
            <Label htmlFor="username">Username</Label>
            <Input id="username"/>
          </div>
          <div className="">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password"/>
          </div>
          <div className="flex items-center space-x-2">
             <Checkbox id="show"/>
             <Label htmlFor="show">Show Password</Label>
          </div>
        </CardContent>
        <CardFooter>
            <div className="flex flex-col space-y-4 w-full">
                <Button>Login</Button>
                <Button variant="ghost">Sign up instead</Button>
            </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default LoginPage;
