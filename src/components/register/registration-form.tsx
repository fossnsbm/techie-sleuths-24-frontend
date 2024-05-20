import AllRegForms from "./all-reg-forms";

export default function RegistrationForm() {
  const style = {
    boxShadowLittle: "3px 3px #000",
    boxShadowLarge: "8px 8px #000",
    littleBoxStyle: "absolute aspect-square w-3 bg-[#A66224]",
  };

  return (
    <div className="gird relative z-10 min-h-[75vh] w-full place-content-center">
      <div
        style={{
          boxShadow: style.boxShadowLarge,
        }}
        className="relative mx-7  border-8 border-[#A66224] bg-[#FEF3C7] py-10 md:mx-auto md:max-w-5xl"
      >
        <div
          style={{ boxShadow: style.boxShadowLittle }}
          className={`top-0 ml-2 mt-2 ${style.littleBoxStyle}`}
        />
        <div
          style={{ boxShadow: style.boxShadowLittle }}
          className={`bottom-0 mb-2 ml-2 ${style.littleBoxStyle}`}
        />
        <div
          style={{ boxShadow: style.boxShadowLittle }}
          className={`bottom-0 right-0 mb-2 mr-2 ${style.littleBoxStyle}`}
        />
        <div
          style={{ boxShadow: style.boxShadowLittle }}
          className={`right-0 top-0 mr-2 mt-2 ${style.littleBoxStyle}`}
        />
        <h1 className="absolute left-1/2 top-5 -translate-x-1/2 transform text-center text-3xl text-[#5A270B] md:top-2 md:text-6xl">
          Enter game
        </h1>
        <div className="w-full">
          <AllRegForms />
        </div>
      </div>
    </div>
  );
}
