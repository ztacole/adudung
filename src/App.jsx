import { useState } from "react";
import { Card, CardContent } from "./components/Card";
import Masonry from "react-masonry-css";
import TopNotes from "./components/TopNotes";

export default function NotesApp() {
  const notes = [
    {
      from: "X RPL 2",
      to: "Kak Fahrel",
      note: "bisa gak ttp jdi pj kita ampe lulus😞",
    },
    {
      from: "Anonim",
      to: "Almira X KUL 1",
      note: "omg kamu keren bgt pls!!! happy terus, semangat yesss❤",
    },
    {
      from: "juaaajuaaaa",
      to: "kaka fharel dan kaka reza ",
      note: "terimakasi ya kaka uda sabar jadi pj rpl 2, walau kalian hilang hilang mulu dan kita jd kaya anak ilang tp gapapa ko, terimakasi banyaaaak kakaas",
    },
    {
      from: "X Ph 1",
      to: "UNTUK SEMUA KAKAK OSIS!!",
      note: "keren banget kakak OSIS semua nyaa.. sukses trs ya kakk buat kedepannya bimbing kita trs pokoknya 🫶🏻. mpls kali ini SANGATT SANGATT MENGESANKAN!! 💜💜 #Keepshining ✨✨",
    },
    {
      from: "key",
      to: "Kaka kelas 12 busanas tigas cantika",
      note: "i love u ",
    },
    {
      from: "Asa Mitaka",
      to: "Kak Hououin",
      note: "Main robelok yuk",
    },
    {
      from: "Farel",
      to: "nisaa 12 busana 3, yang kalo nyampe sekolah siang bgt",
      note: "Selalu semangat yaa cantikk",
    },
    {
      from: "Lia",
      to: "Anak 24 semuanya",
      note: "Selamat belajar di 24",
    },
    {
      from: "yy",
      to: "alfina",
      note: "ya lov u",
    },
    {
      from: "dede",
      to: "dede",
      note: "haiii dede",
    },
    {
      from: "fans barca",
      to: "kaka pj kuliner 2",
      note: "kaka keren banget pas saman kak, lope u HAHAHAHA",
    },
    {
      from: "seseorang",
      to: "orang spesial",
      note: "Itu kelas XII TBS 3 yg namanya nisaa cantikk bangett sie kak",
    },
    {
      from: "-",
      to: "Kak yasmine dan kak bianca",
      note: "Semangat terus kak, makasii udah membimbing kita para kuliner 1"
    }, 
    {
      from: "?", 
      to: "ivan fatthurrahman kelas 10 kuliner 1", 
      Note: "jika lu suka sama seseorang, jangan liat dari penampilan nya, tapi liat dari sifatnya"
    }, 
    {
      from: "-", 
      to: "Aisyah Luna XI BSN 1", 
      note: "Kurangin toxic dan gengsi plisss"
    }
  ];

  const breakpointColumns = {
    default: 4,
    1024: 3,
    640: 2,
  };

  return (
    <div className="w-full min-h-[100vh] mx-auto p-4 bg-gray-800 text-white">
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
