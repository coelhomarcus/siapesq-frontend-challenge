import React from "react";
import Image from "next/image";

const Error = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 *:text-pretty">
      <Image
        src={"/blob.png"}
        alt="Erro - Logo"
        width={100}
        height={100}
        priority
        className="animate-bounce"
      />
      <h1 className="text-2xl font-semibold mt-4">Ops! Algo deu errado...</h1>
      <p className="text-lg text-gray-600 mt-2">
        Parece que nossos servidores estão temporariamente indisponíveis.
      </p>
      <p className="text-lg text-gray-600">
        Estamos trabalhando para resolver isso o mais rápido possível.
      </p>
      <p className="text-lg text-blue-700 mt-4">
        Tente novamente em alguns minutos!
      </p>
    </div>
  );
};

export default Error;
