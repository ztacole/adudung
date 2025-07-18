import { useState } from "react";
import { Card, CardContent } from "./components/Card";
import Masonry from "react-masonry-css";
import TopNotes from "./components/TopNotes";

export default function NotesApp() {
  const notes = [
    {
      from: "Me",
      to: "Myself",
      note: "Belajar React dan memahami hooks\nMenggunakan useState dan useEffect\nPenanganan event di React",
    },
    {
      from: "Me",
      to: "Myself",
      note: "Mengerjakan tugas akhir minggu\nFokus pada bagian yang sulit terlebih dahulu\nMengatur waktu dengan baik",
    },
    {
      from: "Me",
      to: "Myself",
      note: "Membaca buku tentang pengembangan diri\nMenulis ringkasan dari bab yang penting\nDiskusi dengan teman",
    },
    {
      from: "Me",
      to: "Myself",
      note: "Menulis jurnal harian\nMerefleksi aktivitas dan perasaan\nMencatat pencapaian dan rencana esok",
    },
    {
      from: "Me",
      to: "Myself",
      note: "Olahraga pagi di taman\nLari selama 30 menit\nLatihan fisik ringan setelahnya",
    },
    {
      from: "Me",
      to: "Myself",
      note: "Membuat proyek baru dengan lebih banyak konten\nMenambahkan fitur interaktif\nMenggunakan API eksternal\nMengoptimalkan performa aplikasi",
    },
    {
      from: "Me",
      to: "Myself",
      note: "Melakukan eksperimen dengan resep baru\nMenyiapkan bahan-bahan terlebih dahulu\nMenuliskan kesan setelah mencicipi",
    },
    {
      from: "Me",
      to: "Myself",
      note: "Belajar bahasa baru\nMelatih percakapan dasar\nMenonton film tanpa subtitle",
    },
    {
      from: "Me",
      to: "Myself",
      note: "Menata ulang kamar\nMembuang barang yang tidak terpakai\nMengatur ruang kerja agar lebih nyaman",
    },
    {
      from: "Me",
      to: "Myself",
      note: "Mengikuti kursus online\nMenonton video pembelajaran setiap hari\nMengerjakan latihan dan kuis",
    },
  ];

  const breakpointColumns = {
    default: 4,
    1024: 3,
    640: 2,
  };

  return (
    <div className="w-full mx-auto p-4 bg-gray-800 text-white">
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
