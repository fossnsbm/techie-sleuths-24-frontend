import React, { useEffect, useState } from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getCellCount, getCellRange } from "../../data/ClueCellCount";
import { MoveDown, MoveRight } from "lucide-react";
import { IClue } from "@/types/puzzle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const ClueAnswerInput = () => {
  const currentClues: IClue[] = useSelector(
    (state: RootState) => state.puzzleDialog.clues
  );
  const [charCount, setCharCount] = useState(0);

  const cellCount = getCellCount(
    currentClues[0].clueNumber,
    currentClues[0].clueDirection
  );

  const formSchema = z.object({
    answer: z.string().length(cellCount, {
      message: "Fill all the characters to submit",
    }),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharCount(e.target.value.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const regex = /^[A-Za-z_]+$/;
    if (!regex.test(e.key)) {
      e.preventDefault();
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      answer: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl">Enter your answer</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="flex justify-start items-center gap-3 text-xl">
          Enter your answer for
          <div className="flex items-center justify-center">
            <span className="text-3xl">{currentClues[0].clueNumber}</span>
            {currentClues[0].clueDirection === "d" ? (
              <MoveDown size={24} />
            ) : (
              <MoveRight size={24} />
            )}
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="answer"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="sm:w-[100%] w-[100%] text-base uppercase"
                      onKeyDown={handleKeyDown}
                      onChange={(e) => {
                        handleInputChange(e);
                        field.onChange(e);
                      }}
                      maxLength={cellCount}
                    />
                  </FormControl>
                  <FormDescription className="text-right text-lg">{`${charCount}/${cellCount} characters`}</FormDescription>
                  <FormDescription className="text-left text-lg">
                    Note:
                    <ul className="list-disc pl-7">
                      <li className="leading-4">
                        Characters already set for this cells will be replaced
                        by your new answer
                      </li>
                      <li className="leading-4">
                        To keep a cell empty, please use a underscore (_)
                        character
                      </li>
                    </ul>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" className="px-10">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ClueAnswerInput;
