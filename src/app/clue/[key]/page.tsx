"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface Clue {
  id: number;
  clue: string;
  answer: string;
  key: string;
}

const clues: Clue[] = [
  {
    id: 1,
    clue: "dila's pp size *some might say it is non existent*",
    answer: "extra small",
    key: "dilagotsmolppasdasdasfkfhkglahdflkjghaldsfjughoaisjudhfgoiausydtoifuahgigjfvaoij", // pre generate this key with UUID or something
  },
  {
    id: 2,
    clue: "dila's favorite color",
    answer: "blue",
    key: "dilasasdasdasfkfhkglahdflkjghaldsfjughoaisjudhfgoiausydtoifuahgigjfvaoij",
  },
];

function CluePage({ params }: { params: { key: string } }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const key = params.key;
  const clue = clues.find((clue) => clue.key === key);

  const actkn = searchParams.get("actkn");

  if (actkn) {
    const currentTeamName = "Team 1"; // fetch it from the backend using session cookie
    const involvedTeamName = "Team 2"; // fetch it from the backend using actkn

    window.alert(
      `Team ${currentTeamName} has cheated by looking at the clue, illegally shared by Team ${involvedTeamName}`,
    );
  } else {
    const actknsig = "some-random-string"; // fetch it from the backend by providing the team id who found the clue
    router.push(`/clue/${key}?actkn=${actknsig}`);
  }

  return (
    <div className='text-white w-full min-h-[30vh] flex justify-center items-center text-3xl text-center'>
      <div className='w-[700px]'>
        {clue ? <h1>Clue: {clue.clue}</h1> : <h1>Clue not found</h1>}
      </div>
    </div>
  );
}

export default CluePage;
