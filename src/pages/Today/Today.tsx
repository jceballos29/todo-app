import React from "react";
export interface TodayInterface {}

const Today: React.FC<TodayInterface> = () => {
  return (
    <div className="w-full h-full">
      <header className="w-full">
        <h2 className="text-2xl font-bold">Today</h2>
      </header>
    </div>
  );
};

export default Today;
