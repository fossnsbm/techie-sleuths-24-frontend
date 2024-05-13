"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import { ToastAction } from "../ui/toast";
import { registerTeam } from "@/api/auth/authApi";

export default function AllRegForms() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    team_name: z
      .string()
      .min(2)
      .max(50)
      .refine((value) => value !== "", "Team name is required"),
    tl_email: z
      .string()
      .email()
      .refine((value) => value !== "", "Email is required"),
    master_password: z
      .string()
      .min(8)
      .max(50)
      .refine((value) => value !== "", "Password is required"),
    tl_name: z
      .string()
      .min(1)
      .max(100)
      .refine((value) => value !== "", "Team leader name is required"),
    tl_student_id: z
      .string()
      .min(5)
      .max(5)
      .refine((value) => value !== "", "Student ID is required"),
    tl_conatct_number: z
      .string()
      .min(10)
      .max(10)
      .refine((value) => value !== "", "Contact number is required"),
    member2_name: z
      .string()
      .min(1)
      .max(100)
      .refine((value) => value !== "", "Member name is required"),
    member2_student_id: z
      .string()
      .min(5)
      .max(5)
      .refine((value) => value !== "", "Student ID is required"),
    member3_name: z.string().optional(),
    member3_student_id: z.string().max(5).optional(),
    member4_name: z.string().optional(),
    member4_student_id: z.string().max(5).optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      team_name: "",
      tl_email: "",
      master_password: "",
      tl_name: "",
      tl_student_id: "",
      tl_conatct_number: "",
      member2_name: "",
      member2_student_id: "",
      member3_name: "",
      member3_student_id: "",
      member4_name: "",
      member4_student_id: "",
    },
  });

  const backToHome = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const {
        team_name,
        tl_email,
        master_password,
        tl_name,
        tl_student_id,
        tl_conatct_number,
        member2_name,
        member2_student_id,
        member3_name,
        member3_student_id,
        member4_name,
        member4_student_id,
      } = values;
      const res = await registerTeam(
        team_name,
        tl_email,
        master_password,
        tl_name,
        tl_student_id,
        tl_conatct_number,
        member2_name,
        member2_student_id,
        member3_name || "",
        member3_student_id || "",
        member4_name || "",
        member4_student_id || ""
      );
      setLoading(false);
      localStorage.setItem("jwtToken", res.token);
      // console.log(values);
      toast({
        title: "Successfully registered!",
        description: "Confirmation email sent to your email address.",
      });
      backToHome();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `${error.response.data.message}`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      setLoading(false);
    }
  }

  const style = {
    formStyle: "space-y-2 w-full flex flex-col items-center",
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-8 overflow-y-scroll max-h-[600px]"
        >
          <FormField
            control={form.control}
            name="team_name"
            render={({ field }) => (
              <FormItem className={style.formStyle}>
                <FormControl>
                  <Input className="" placeholder="TEAM NAME*" {...field} />
                </FormControl>
                <FormMessage className="text-xl" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tl_email"
            render={({ field }) => (
              <FormItem className={style.formStyle}>
                <FormControl>
                  <Input placeholder="TEAM LEADERS'S EMAIL*" {...field} />
                </FormControl>
                <FormMessage className="text-xl" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="master_password"
            render={({ field }) => (
              <FormItem className={style.formStyle}>
                <FormControl>
                  <Input placeholder="TEAM PASSWORD*" {...field} />
                </FormControl>
                <FormMessage className="text-xl" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tl_name"
            render={({ field }) => (
              <FormItem className={style.formStyle}>
                <FormControl>
                  <Input placeholder="TEAM LEADER'S NAME*" {...field} />
                </FormControl>
                <FormMessage className="text-xl" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tl_student_id"
            render={({ field }) => (
              <FormItem className={style.formStyle}>
                <FormControl>
                  <Input placeholder="TEAM LEADER'S STUDENT ID*" {...field} />
                </FormControl>
                <FormMessage className="text-xl" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tl_conatct_number"
            render={({ field }) => (
              <FormItem className={style.formStyle}>
                <FormControl>
                  <Input
                    placeholder="TEAM LEADER'S CONTACT NUMBER*"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xl" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="member2_name"
            render={({ field }) => (
              <FormItem className={style.formStyle}>
                <FormControl>
                  <Input placeholder="2ND MEMBER NAME*" {...field} />
                </FormControl>
                <FormMessage className="text-xl" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="member2_student_id"
            render={({ field }) => (
              <FormItem className={style.formStyle}>
                <FormControl>
                  <Input placeholder="2ND MEMBER STUDENT ID*" {...field} />
                </FormControl>
                <FormMessage className="text-xl" />
              </FormItem>
            )}
          />
          <div className="text-xl md:text-3xl text-[#5A270B] text-center">
            ***3rd and 4th Members are optional***
          </div>
          <FormField
            control={form.control}
            name="member3_name"
            render={({ field }) => (
              <FormItem className={style.formStyle}>
                <FormControl>
                  <Input placeholder="3RD MEMBER NAME*" {...field} />
                </FormControl>
                <FormMessage className="text-xl" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="member3_student_id"
            render={({ field }) => (
              <FormItem className={style.formStyle}>
                <FormControl>
                  <Input placeholder="3RD MEMBER STUDENT ID*" {...field} />
                </FormControl>
                <FormMessage className="text-xl" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="member4_name"
            render={({ field }) => (
              <FormItem className={style.formStyle}>
                <FormControl>
                  <Input placeholder="4TH MEMBER NAME*" {...field} />
                </FormControl>
                <FormMessage className="text-xl" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="member4_student_id"
            render={({ field }) => (
              <FormItem className={style.formStyle}>
                <FormControl>
                  <Input placeholder="4TH MEMBER STUDENT ID*" {...field} />
                </FormControl>
                <FormMessage className="text-xl" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
            className="mt-10"
            loading={loading}
            disabled={loading}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
