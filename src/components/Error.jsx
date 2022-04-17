import React from "react";

export default function message({ message }) {
  return (
    <div className="bg-red-600 hover:bg-red-500 hover:cursor-pointer uppercase text-white px-2 py-4 rounded-lg text-center">
      {message}
    </div>
  );
}
