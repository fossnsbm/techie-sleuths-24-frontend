import Image from "next/image";

export default function QuestionBox() {
  return (
    <div className="flex gap-1">
      <Image
        alt="start"
        src="/assets/question-box.png"
        width={50}
        height={50}
      />
      <Image
        alt="start"
        src="/assets/question-box.png"
        width={50}
        height={50}
      />
      <Image
        alt="start"
        src="/assets/question-box.png"
        width={50}
        height={50}
      />
    </div>
  );
}
