import AllRegForms from "./all-reg-forms";

export default function RegistrationForm() {
  const style = {
    boxShadowLittle: "3px 3px #000",
    boxShadowLarge: "8px 8px #000",
    littleBoxStyle: "absolute aspect-square w-3 bg-[#A66224]",
  };

  return (
    <div className="relative z-10 min-h-[75vh] gird place-content-center w-full">
      <div
        style={{
          boxShadow: style.boxShadowLarge,
        }}
        className="relative mx-7  md:max-w-5xl md:mx-auto bg-[#FEF3C7] py-10 border-8 border-[#A66224]"
      >
        <div
          style={{ boxShadow: style.boxShadowLittle }}
          className={`top-0 mt-2 ml-2 ${style.littleBoxStyle}`}
        />
        <div
          style={{ boxShadow: style.boxShadowLittle }}
          className={`bottom-0 mb-2 ml-2 ${style.littleBoxStyle}`}
        />
        <div
          style={{ boxShadow: style.boxShadowLittle }}
          className={`right-0 bottom-0 mb-2 mr-2 ${style.littleBoxStyle}`}
        />
        <div
          style={{ boxShadow: style.boxShadowLittle }}
          className={`right-0 top-0 mt-2 mr-2 ${style.littleBoxStyle}`}
        />
        <h1 className="absolute top-5 md:top-2 left-1/2 transform -translate-x-1/2 text-center text-3xl md:text-6xl text-[#5A270B]">
          Enter game
        </h1>
        <div className="w-full">
          <AllRegForms />
        </div>
      </div>
    </div>
  );
}
