import { useState } from "react";
import { Card, CardContent } from "./components/Card";
import Masonry from "react-masonry-css";
import TopNotes from "./components/TopNotes";

export default function NotesApp() {
  const notes = [
    {
      from: "ayam petokpetok 🐥🐥", 
      to: "Devita Dwi Lestari ( 11 Kuliner 1 ) 🍳", 
      note: "Hi besti👋🏻😗😗, km tau nggak ak siapa??🤭. APA?? TIDAK TAU??? jahat😠, pokoknya ak temanmu yg paling imut👉🏻👈🏻. Semangat terus ya besti❤‍🩹👩‍🍳, btw masakin aku donggg kan kamu calon juri di MasterChef 😛😛. Besti kapan kita main lagi😖, ak sudah siap menjelajahi dunia bersamamu besti🚀. Ah alay bgt ya teksnya, maaf ya kakak depi🍳 pokoknya km yang terbaik dari yang terbaik 🪄. Ak syg km, lovyu teman baikku 🤭😙 (yg mau deketin depi hrs lulus ujian dari aku dulu, ak penilai pokoknya 😠, jgn berani beraninya klian jahatin dia nnti aku kejar🔥). Oke segini aja, inti pesannya adalah depi itu anaknya baik sekali, cantik sekali (karna temannya aja cantik hehe iya akuu 😜), penolong sejatii, teman terbaik lah pokoknya 👏🏻👏🏻👏🏻. Depi kerenn, semangat terus ya klo cape istirahat aja gapapaa tapi jangan menyerah🦸🏻‍♀, jangan sering overthinking ya bestii🥺, sehat sehat terus telor ceplok kesayangan akuu lovyuuu🙆🏻‍♀💘💘."
    },
    {
      from: "anak ulw",
      to: "aaa yang baju merah yng derama",
      note: "hai kaka yang baju merah yang Derama tdi, aku crush on (banget sama kaka) :( Kamu keren banget kak!! bisa berhasil tampil Derama yang sangat bagus banget, semangat terus ya kak, semoga kak cita cita kaka tercapai amin, semangat terus yaa jangan pantang menyerahnya 😄,aku bakal selalu dukung kamu di mana pun kak berada dan kapanpun itu!!, aku ada 2 pantun buat kaka: Jalan-jalan ke kota tua, Melihat gedung dengan gaya. Kakak kelas, sungguhlah rupawan, Senyumnya bikin hati berbunga. satu lagi!! Bunga mawar indah merekah, Dipetik indah untuk ditaruh di meja. Kakak, senyummu sungguh mempesona, Bikin hati jadi berbunga-bunga. dah segitu aja terimakasih udah mau baca pesan dari aku!! Bye👋🏻😄🫰"
    },
    {
      from: "X - ULW", 
      to: "kak fharel pj rpl", 
      note: "hai kak fharel, i have crush on u (banget banget banget) :( kamu keren banget kak!! bisa berhasil ngedampingin anak anak rpl, bisa membimbing mereka dengan baik, dan bisa bertugas sebagai divisi dokumentasi dengan baik!! semangat terus yaa kak untuk pendidikan kamu😄, aku bakalan selalu ngedukung kamu dimanapun dan kapanpun itu!! doain aku ya kak, semoga aku bisa masuk osis kaya kamu. anw besok aku ulang tahun loh kak, tolong ucapin aku dalam hati kamu ya kak ╥﹏╥"
    },
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
      note: "jika lu suka sama seseorang, jangan liat dari penampilan nya, tapi liat dari sifatnya"
    }, 
    {
      from: "-", 
      to: "Aisyah Luna XI BSN 1", 
      note: "Kurangin toxic dan gengsi plisss"
    },
    {
      from: "X", 
      to: "Qindah", 
      note: "08 berapa kak?"
    },
    {
      from: "anomali pita merah ulw", 
      to: "Kak ihsan ( sesi dokum )", 
      note: "kak gambarnya sukaa gaaa??? Kalo suka pasang di SG kakkk, jangan lupa tag aku yg gambar itu ( @miukii_024 )"
    },
    {
      from: "Sesorang", 
      to: "Imam", 
      note: "Mam bilangin ke dika buat jangan maen cwe mulu"
    },
    {
      from: " qiteelae ", 
      to: "dia", 
      note: "diam seperti limbat, bergerak pengen disayang"
    },
    {
      from: "someone who adores you so much", 
      to: "melvern XI RPL 2", 
      note: "you never knew, how much i really liked you, cause i never even told you🥹 SEMANGAAT YAA semoga u always grow up to be a kind and more cuteness person in the whoooole world🤩🤩 love ya <3"
    },
    {
      from: "X RPL 2", 
      to: "kaka operator", 
      note: "aduh kak kok udah selesai aja ya mplsnya, kan masi mau dengerin lagu di audit. makasi banyak ya ka udah nyetel playlist yg relate sm ak"
    },
    {
      from: "You 2000 years ago", 
      to: "You 2000 years from now", 
      note: "In the end, this is just a very long story about love, which makes us realize that 'Human is a slave to the one they loves.' "
    },
    {
      from: "aku yang baik hati", 
      to: "kamu yang sangat sok cool abizz", 
      note: "DAN YAP MAMAM GUA UDAH MOVE ON"
    },
    {
      from: "X Kul 1", 
      to: "kakak pramuka yang cowo sendiri di barisan pas yel yel", 
      note: "kak lucu banget, km kls brp hehehe"
    },
    {
      from: " X K T", 
      to: "semua anak basket", 
      note: "demos nya keren banget kak, jadi mau masuk basket"
    },
    {
      from: "akuu", 
      to: "depii 🤍", 
      note: "ily ma chairmate ⭐"
    },
    {
      from: "penggemar jauh", 
      to: "kak wisnu XII rpl 2", 
      note: "semangatt ya kak codingnya, btw manis bangett hehe"
    },
    {
      from: "Someone", 
      to: "Yosua", 
      note: "Semangat sekolahnya Kakk!!"
    },
    {
      from: "alumni", 
      to: "dedek dedek gemas", 
      note: "Welcome to SMKN 24 semuaaaaa, Semangat menghadapi tugas tugas mu yang akan banyak ituuuuu"
    },
    {
      from: "kollak ubi", 
      to: "pina rosblok", 
      note: "ayo kita main rosblok, lawf yuw 💅😋🥺🥰🤗🫶🏻💐"
    },
    {
      from: "coklat dilan", 
      to: "rafidan orang baduy", 
      note: "bro.. why u so fine 😔 !?#)$(?!#@$!. hope u always feel happy yeayy 🫶"
    },
    {
      from: "kepo", 
      to: "Lebih dari kata spesial, sekar wulan X ULW", 
      note: "Semangat jangan pantang nyerah, km cantik, tp dingin banget itu yg spesial dari km, imut juga hehe thanks ya"
    },
    {
      from: "alumni", 
      to: "WARGAA DUPAT", 
      note: "kita bole join sekali gaaaaaaa🥺🥺🥺"
    },
    {
      from: "X-ULW", 
      to: "kaka' OSIS SMKN 24", 
      note: "kaka' kalian hebat! kalian keren!, terimakasih sudah membimbing kami selama 5 hari MPLS dan 1 hari pra MPLS yaa!!<3"
    },
    {
      from: "7280", 
      to: "OrBa", 
      note: "2 3 ayam lari, hai orang baik"
    },
      {
      from: "orang cantik x ulw", 
      to: "kak ecaaa", 
      note: "kakkk kamu lucu bangettt, sorry tapi kamu gemessss gakuatt bangett pengenn foto bareng tapi aku maluu😭😭"
    },
    {
      from: "anak ph 2", 
      to: "kakak osis ganteng", 
      note: "pliss jangan ganteng', jangan lulus dulu"
    },
    {
      from: "A", 
      to: "Devian tbs'3", 
      note: "aku kangen"
    },
    {
      from: "Ian nak lipan", 
      to: "Alip (XII TBS 3)", 
      note: "Semangatt yahhh jdi agit nyaa kakak"
    },
    {
      from: "anak ulw",
      to: "kaka Nadin & kak Unai",
      note: "hai kaka, makasih ya atas semuanya udah dampingin anak ulw dari awal sampai akhir, aku senang bisa bertemu dengan kaka Nadin & kaka unaii, ouh ya kaka nadin & kaka unaii mau keluar negeri yah, semoga selamat sampai tujuan amin 😄🫰🏻, ouh ya kaka semangat terus ya belajarnya 🙆🏻‍♀️, se youuu kaka unai & kaka nadin 🙆🏻‍♀️🫰🏻"
    },
    {
      from: "akuu",
      to: " kaka yang main hadroh (12 rpl 1) ",
      note: "kakaa keren bgtt sii. jgn punya gandengan dulu pliss.. hehe. btw kacamatanya kece bgtt, kaya orangnya"
    },
    {
      from: "-",
      to: "siapa aja yang mau",
      note: "kasih semangat dong"
    },
    {
      from: "smone",
      to: "all",
      note: "smngt"
    },
    {
      from: "f",
      to: "kakak XII RPL 1",
      note: "kak kamu cantik banget"
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
