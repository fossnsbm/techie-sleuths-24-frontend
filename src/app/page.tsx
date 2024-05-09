import ExampleCard from "@/components/cards/ExampleCard";
import RegisterNowCard from "@/components/cards/registerNowCard";
import ExampleForm from "@/components/forms/ExampleForm";
import EventDetails from "@/components/landing/eventDetails";
import HeroSection from "@/components/landing/hero";

export default function Home() {  
  return (
    <div>
      <div className="flex flex-col h-screen justify-center items-center gap-10">
        <ExampleForm />
        <ExampleCard />
      </div>
        <HeroSection />
        <EventDetails />
        <div className="hidden md:block">
        <RegisterNowCard />
      </div>
    </div>
  );
}
