import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center w-screen h-screen">
      <p className="text-6xl font-semibold">404: page not found!</p>
      <Link to={'/'} className="text-lh">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
