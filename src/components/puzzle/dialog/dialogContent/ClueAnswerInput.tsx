import React, { useState } from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import { getCellCount, getCellRange } from "@/data/puzzle/ClueCellCount";
import { MoveDown, MoveRight } from "lucide-react";
import { IClue } from "@/types/puzzle";
import { updatePuzzle } from "@/store/reducers/puzzle-reducer";
import { closePuzzleDialog } from "@/store/reducers/puzzleDialog-reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { updateCrossword } from "@/api/puzzle/puzzleApi";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const ClueAnswerInput = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const currentClues: IClue[] = useSelector(
    (state: RootState) => state.puzzleDialog.clues
  );
  const currentCellValues = useSelector((state: RootState) => state.puzzle);
  const [charCount, setCharCount] = useState(0);

  const cellCount = getCellCount(
    currentClues[0].clueNumber,
    currentClues[0].clueDirection
  );

  const formSchema = z.object({
    answer: z.string().length(cellCount, {
      message: `Fill all ${cellCount} characters to submit`,
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const cellKeys = getCellRange(
      currentClues[0].clueNumber,
      currentClues[0].clueDirection
    );

    if (!cellKeys) {
      console.error("cellKeys is undefined");
      setIsLoading(false);
      return;
    }

    const newCellValues = { ...currentCellValues } as { [key: string]: string };

    for (let i = 0; i < cellKeys.length; i++) {
      newCellValues[cellKeys[i]] =
        values.answer[i] === "_" ? "" : values?.answer[i]?.toUpperCase();
    }
    try {
      const res = await updateCrossword(newCellValues);
      if (res?.status === 401) {
        router.push("/login");
      }
      if (res?.status === 200) {
        dispatch(updatePuzzle(res?.data?.boxes));
        router.replace("/play");
        dispatch(closePuzzleDialog());
        toast({
          title: "Update Successful",
          description: "Your answer was submitted successfully.",
        });
        setIsLoading(false);
      }
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
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
                  <FormMessage className="text-base" />
                  <FormDescription className="text-right text-lg">{`${charCount}/${cellCount} characters`}</FormDescription>
                  <div className="text-left text-lg">
                    <FormDescription className="text-lg">Note:</FormDescription>
                    <ul className="list-disc pl-7 text-muted-foreground">
                      <li className="leading-4">
                        Characters already set for this cells will be replaced
                        by your new answer
                      </li>
                      <li className="leading-4">
                        To keep a cell empty, please use a underscore (_)
                        character
                      </li>
                    </ul>
                  </div>
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" className="px-10" loading={isLoading}>
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
