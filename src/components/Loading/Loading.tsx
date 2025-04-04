import Image from "next/image";

const Loading = () => {
  return (
    <>
      <div className="flex flex-col w-full h-[80vh] items-center justify-center gap-5">
        <div className="animate-bounce text-5xl text-blue-500">
          <Image
            src="/blob.png"
            width={100}
            height={100}
            className="mx-auto"
            alt="Logo"
            priority
          />
        </div>
        <h1 className="text-2xl text-blue-500">Loading</h1>
      </div>
    </>
  );
};

export default Loading;
