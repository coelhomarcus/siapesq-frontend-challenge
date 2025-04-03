import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Intro from "../../components/Intro/Intro";
import Link from "next/link";
import Image from "next/image";

//#FDFDFD -> Background
//#BAABAB -> Borda
//#436BFE -> Azul

export default function Home() {
  return (
    <div className="space-y-5 mx-10 md:grid md:justify-center">
      <Image
        className="mx-auto object-cover"
        src="/blob.png"
        alt="Logo"
        width={128}
        height={128}
      />
      <Intro title="Lets Go!" />
      <Input type="text" placeholder="Name" className="md:w-[450px]" />
      <Input type="email" placeholder="Email" className="md:w-[450px]" />
      <Input type="password" placeholder="Password" className="md:w-[450px]" />
      <div className="grid justify-center">
        <Button text="Sign Up" href="/" />
        <div className="flex justify-center mt-5 text-[#717171]/50 cursor-pointer w-fit">
          <Link className="underline" href="/login">
            I already have an account.
          </Link>
        </div>
      </div>
    </div>
  );
}
