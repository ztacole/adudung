import { useState } from "react";
import { Card, CardContent } from "./components/Card";
import Masonry from "react-masonry-css";
import TopNotes from "./components/TopNotes";

export default function NotesApp() {
  const notes = [
    // {
    //   from: "Me",
    //   to: "Myself",
    //   note: "Belajar React dan memahami hooks\nMenggunakan useState dan useEffect\nPenanganan event di React",
    // },
  ];

  const breakpointColumns = {
    default: 4,
    1024: 3,
    640: 2,
  };

  return (
    <div className="w-full h-[100vh] mx-auto p-4 bg-gray-800 text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Welcome to Adudung!</h1>
          <p className="text-xl">Titip rasa lewat kata</p>
        </div>
        <div className="bg-gray-900 p-4 mb-4">
          <TopNotes notes={notes} />
        </div>
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {notes.map((note, index) => (
            <Card
              key={index}
              className="break-words p-4 shadow-md rounded-lg mb-4 bg-gray-700 hover:bg-gray-600 transition-shadow duration-300 ease-in-out"
            >
              <CardContent className="p-2">
                <p className="font-bold">From: {note.from}</p>
                <p className="font-bold mb-2">To: {note.to}</p>
                <p>{note.note}</p>
              </CardContent>
            </Card>
          ))}
        </Masonry>
      </div>
    </div>
  );
}
