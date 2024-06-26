import Image from "next/image";

import RegistrationForm from "@/components/register/registration-form";
import EventDetailsMarquee from "@/components/ui/marquee";

export default function RegisterPage() {
  return (
    <div>
      <div className="relative min-h-screen w-full">
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
