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
import { useNavigate } from "react-router-dom";

const registerFormSchema = z
  .object({
    username: z
      .string()
      .min(3, "username under 3 character")
      .max(16, "username over 16 character"),
    password: z
      .string()
      .min(8, "password must be 8 character")
      .max(16, "password maximum  16 character"),
    repeatPassword: z
      .string()
      .min(8, "password must be 8 character")
      .max(16, "password maximum  16 character"),
  })
  .superRefine(({ password, repeatPassword }, ctx) => {
    if (password !== repeatPassword) {
      ctx.addIssue({
        code: "custom",
        message: "password not match",
        path: ["repeatPassword"],
      });
    }
  });

const RegisterPage = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
      repeatPassword: "",
    },
    resolver: zodResolver(registerFormSchema),
    reValidateMode: "onSubmit",
  });

  const handleRegister = async (values) => {
    try {
    const userResponse = await axiosIstance.get(`/users?username=${values.username}`);
    if(userResponse.data.length > 0) {
      alert("Username already exists");
      return
    }
      await axiosIstance.post("/users",{
        username: values.username,
        password: values.password
      });
      alert("Register successfully");
      navigate("/login");
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="px-4 container py-8 flex flex-col justify-center items-center max-w-screen-md h-[80vh]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleRegister)}
          className="w-full max-w-[540px]"
        >
          <Card>
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
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
                        <Input {...field} type="password" />
                      </FormControl>
                      <FormDescription>
                        password has to be between 3 and 16 character
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="">
                <FormField
                  control={form.control}
                  name="repeatPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Repeat Password</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" />
                      </FormControl>
                      <FormDescription>
                        Make sure show your passwords macth
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col space-y-4 w-full">
                <Button type="submit">Register</Button>
                <Button variant="ghost">Log in instead</Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </main>
  );
};

export default RegisterPage;
