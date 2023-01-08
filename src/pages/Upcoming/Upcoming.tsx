import React from "react";
export interface UpcomingInterface {}

const Upcoming: React.FC<UpcomingInterface> = () => {
  return (
    <div className="w-full h-full">
      <header className="w-full">
        <h2 className="text-2xl font-bold">Upcoming</h2>
      </header>
    </div>
  );
};

export default Upcoming;
