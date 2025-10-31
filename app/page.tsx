import { outfitSans, noticiaText, noticiaTextBold } from "@/app/ui/fonts";
import users from "./lib/data";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1
            className={`${noticiaTextBold.className} max-w-xs text-3xl leading-10 tracking-tight text-black`}
          >
            Notes App
          </h1>
        </div>
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
                <p className="text-sm leading-6 text-zinc-600">
                  {note.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
