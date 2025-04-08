import React from "react";

type QIProps = {
  icon: React.ReactNode;
  value: string;
};

const QuickInfo = ({ icon, value }: QIProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-2xl">{icon}</p>
      <p>{value}</p>
    </div>
  );
};

export default QuickInfo;
