import { outfitSans } from "@/app/ui/fonts";
import users from "../lib/data";
//import { useEffect } from "react";

// set up function to get all the notes from the database for the current user

export default function Notes() {
  // useEffect(() => {
  //   const getNotes = async () => {
  //     const response = await fetch("/api/getNotes");
  //     const data = await response.json();
  //     console.log(data);
  //   };
  //   getNotes();
  // }, []);
  return (
    <div className="flex flex-col gap-4 text-base font-medium sm:flex-col">
      <h2
        className={`${outfitSans.className} text-xl font-semibold leading-10 tracking-tight text-black`}
      >
        {users[0].username}
      </h2>
      {users[0].notes.map((note) => (
        <div key={note.id} className="flex flex-col gap-2 sm:flex-row">
          <div className="w-full">
            <h3 className="text-xl font-semibold leading-10 tracking-tight text-black">
              {note.title}
            </h3>
            <p className="text-sm leading-6 text-zinc-600">{note.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
