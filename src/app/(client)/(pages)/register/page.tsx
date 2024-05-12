import Image from "next/image";
import EventDetailsMarquee from "@/components/ui/marquee";
import RegistrationForm from "@/components/register/registration-form";

export default function RegisterPage() {
  return (
    <div>
      <div className="w-full min-h-screen relative">
        <div className="absolute inset-0 bg-slate-900">
          <Image
            alt="Mountains"
            src="/assets/bg-img.webp"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <RegistrationForm />
      </div>
      <div className="mt-10 opacity-70">
        <EventDetailsMarquee />
      </div>
    </div>
  );
}
