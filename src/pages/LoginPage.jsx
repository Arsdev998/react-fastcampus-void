import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormItem,
  FormMessage,
  FormField,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosIstance } from "@/lib/axios";
import { useDispatch } from "react-redux";

const loginFormSchema = z.object({
  username: z
    .string()
    .min(3, "username under 3 character")
    .max(16, "username over 16 character"),
  password: z
    .string()
    .min(8, "password must be 8 character")
    .max(16, "password maximum  16 character"),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
    reValidateMode: "onSubmit",
  });

  const [isChek, setIsCheck] = useState(false);
  const handleLogin = async (values) => {
    try {
      const userResponse = await axiosIstance.get("/users", {
        params: {
          username: values.username,
        },
      });
      if (
        !userResponse.data.length ||
        userResponse.data[0].password !== values.password
      ) {
        alert("Invalid username or password");
        return;
      }
      alert("login success");
      dispatch({
        type: "USER_LOGIN",
        payload: {
          username: userResponse.data[0].username,
          id: userResponse.data[0].id,
        },
      });
      form.reset()
    } catch (error) {}
  };

  return (
    <main className="px-4 container py-8 flex flex-col justify-center items-center max-w-screen-md h-[80vh]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="w-full max-w-[540px]"
        >
          <Card>
            <CardHeader>
              <CardTitle>Welcome Back</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        username has to be between 3 and 16 character
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} type={isChek ? "text" : "password"} />
                      </FormControl>
                      <FormDescription>
                        password has to be between 3 and 16 character
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="show"
                  onCheckedChange={(checked) => setIsCheck(checked)}
                />
                <Label htmlFor="show">Show Password</Label>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col space-y-4 w-full">
                <Button type="submit">Login</Button>
                <Button variant="ghost">Sign up instead</Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </main>
  );
};

export default LoginPage;
