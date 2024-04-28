import ExampleCard from "@/components/cards/ExampleCard";
import ExampleForm from "@/components/forms/ExampleForm";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-10">
      <ExampleForm />
      <ExampleCard />
    </div>
  );
}
