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

export default function AllRegForms() {
  const { toast } = useToast();

  const formSchema = z.object({
    team_name: z.string().min(2).max(50),
    team_email: z.string().email(),
    team_password: z.string().min(8).max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      team_name: "",
      team_email: "",
      team_password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast({
        title: "Successfully registered!",
        description: "Confirmation email sent to your email address.",
      });
    } catch (error) {}
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
            name="team_email"
            render={({ field }) => (
              <FormItem className={style.formStyle}>
                <FormControl>
                  <Input placeholder="TEAM EMAIL*" {...field} />
                </FormControl>
                <FormMessage className="text-xl" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="team_password"
            render={({ field }) => (
              <FormItem className={style.formStyle}>
                <FormControl>
                  <Input placeholder="TEAM PASSWORD*" {...field} />
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
