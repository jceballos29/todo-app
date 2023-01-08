import React from "react";
export interface CompletedInterface {}

const Completed: React.FC<CompletedInterface> = () => {
  return (
    <div className="w-full h-full">
      <header className="w-full">
        <h2 className="text-2xl font-bold">Completed</h2>
      </header>
    </div>
  );
};

export default Completed;
