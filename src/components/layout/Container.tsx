"use client";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`
            relative
            mx-auto
            max-w-[1500px]
            px-6
            sm:px-10
            md:px-10
            xl:px-20
        `}
    >
      {children}
    </div>
  );
};

export default Container;
