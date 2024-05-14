"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
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
    team_name: z.string().min(2).max(50),
    tl_email: z.string().email(),
    master_password: z
      .string()
      .min(8)
      .max(50)
      .refine(
        (value) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/.test(
            value
          ),
        {
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, one symbol, and one number",
        }
      ),
    tl_name: z.string().min(1).max(100),
    tl_student_id: z.string().min(5).max(5),
    tl_conatct_number: z.string().min(10).max(10),
    member2_name: z.string().min(1).max(100),
    member2_student_id: z.string().min(5).max(5),
    member3_name: z.string().min(1).max(100).optional(),
    member3_student_id: z.string().min(5).max(5).optional(),
    member4_name: z.string().min(1).max(100).optional(),
    member4_student_id: z.string().min(5).max(5).optional(),
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
        member4_student_id || "", 
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
        description: `${error.response.data.error}`,
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
          className="flex flex-col items-center justify-center gap-8"
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
          <Button type="submit" className="mt-10">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
