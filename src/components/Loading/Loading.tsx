import Image from "next/image";
import { TbLoader2 } from "react-icons/tb";

const Loading = () => {
  return (
    <>
      <div>
        <Image
          src="/blob.png"
          width={100}
          height={100}
          className="mx-auto"
          alt="Logo"
          priority
        />
      </div>
      <div className="flex flex-col w-full h-[80vh] items-center justify-center gap-5">
        <div className="animate-spin text-5xl text-blue-500">
          <TbLoader2 />
        </div>
        <h1 className="text-2xl text-blue-500">Loading...</h1>
      </div>
    </>
  );
};

export default Loading;
