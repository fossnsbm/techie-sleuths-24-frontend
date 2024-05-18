"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setTeamName } from "@/store/reducers/teamDetails-reducer";
import { RootState } from "@/store";
import Container from "@/components/layout/Container";

const formSchema = z.object({
  teamName: z.string().min(2).max(50),
});
export default function ExampleForm() {
  const dispatch = useDispatch();

  const teamName = useSelector(
    (state: RootState) => state.teamDetails.teamName,
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values.teamName);

    dispatch(setTeamName(values.teamName));

    toast({
      title: "You team name will be:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Container>
      <div className="flex justify-center items-center w-full">
        {teamName === "" ? (
          <div className="border px-5 py-8 border-gray-400 rounded-lg">
            <h1 className="py-2 text-2xl font-semibold">
              Techie Sleuths &apos;24🔎
            </h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="teamName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Eg: Runtime Terror" {...field} />
                      </FormControl>
                      <FormDescription>
                        This will be your team name for the event.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col md:flex-row gap-4">
                  <Button type="submit" variant="default">
                    Register Now
                  </Button>
                  <Button type="reset" variant="secondary">
                    Cancel
                  </Button>
                  <Button type="button" variant="default" disabled>
                    Disabled
                  </Button>
                  <Button type="button" variant="default" disabled loading>
                    Disabled
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        ) : null}
      </div>
    </Container>
  );
}
