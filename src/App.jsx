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
    },
    {
      from: "orang ganteng xii rpl 2",
      to: "Barcin XI PH 3",
      note: "Oi maen lagi"
    },
    {
      from: "lynnn",
      to: "-",
      note: "aku cewe taehyung, mwehehe💐"
    },
    {
      from: "NK - Strawberry Wine",
      to: "The Lust Of Tides (L.O.T) - VOWS",
      note: "🍓🍓🍓🍓🍓🍓🍓💌💌💌💌💌💌💌"
    },
    {
      from: "Jennie blekping",
      to: "Kaka yg jaga stand pik r",
      note: "hawa ghibli nya keluar bgt ka"
    },
    {
      from: "X busana 1",
      to: "Ka luna & ka suci",
      note: "sehat selalu Kaka Kaka imut🥺❤️ muah💋"
    },
    {
      from: "siapaa yakkk",
      to: "semua anak 24",
      note: "semngt"
    },
    {
      from: "pacar jaemin (orang cantik) ",
      to: "kaka' osis & kaka' panitia semua",
      note: "THANKS KAK UNTUK MPLS YANG KEREN INI KAK🥰👍🏻👏🏻"
    },
    {
      from: "people people",
      to: "hamba allah",
      note: "semangat smoga semangat"
    },
    {
      from: ":3",
      to: "ka satria 12 rpl 2",
      note: "i'm so glad u were born u so that I could know u."
    },
      {
      from: "=)",
      to: "kak azhar XII RPL 2",
      note: "OMGGG GANTENGGG BGTTTT, semangatt selalu kaaak <3 "
    },
    {
      from: "X busana 1",
      to: "ka luna & ka suci ",
      note: "ka suci&luna pendamping is the best pokoknya🤍🙌🏻"
    },
    {
      from: "pecinta seblak",
      to: "kakak OSIS yang ganteng nan manis inisial D",
      note: "kak jangan ganteng ganteng dong"
    },
    {
      from: "somebody",
      to: "anybody",
      note: "need someone to talk"
    },
    {
      from: "adik tabus 2 ヾ(〃^∇^)ﾉ iloiiiyy",
      to: "KA DAVA (yang jadi instruktur senam) ",
      note: "kaka LUCU banget ka, ayo temenan sm adik^-^"
    },
    {
      from: "(⁠^⁠^⁠)",
      to: "bang dokum insial s",
      note: "gatau keren banget gilakkkk, semangat yaaa bang s"
    },
    {
      from: ":b",
      to: "ka satria 12rpl2",
      note: "please dengerin lagunya Daniel Caesar - Blessed."
    },
    {
      from: "siapa yach",
      to: "kak dhika XII rpl 2",
      note: "Aduhhhh kakak cakeppp bgt sihhhh bikin cenat cenut"
    },
    {
      from: "matchalover",
      to: "kakak pmr yang demos pake tongkat sama peci item",
      note: "KAKAK LUCUU BGTT, JANGAN PUNYA GANDENGAN DULU PLIS"
    },
    {
      from: "liplip jodoh jeno",
      to: "untuk semua orang yang mau kerja keras buat MPLS ",
      note: "smgt terus kelas 11 dan gws buat kelas 12"
    },
    {
      from: "ucup flower",
      to: "people",
      note: "be my dilan?"
    },
    {
      from: "11 pH 3",
      to: "Rizki 11 ph 3",
      note: "You are special for me"
    },
    {
      from: "🐻",
      to: "kelas 10",
      note: "betah betah yaa di dupatt❗❗"
    },
    {
      from: "sekolah sebelah king rpl",
      to: "XI kul 2 absen 24",
      note: "HAII"
    },
    {
      from: "from : pemuja rahasia (?)",
      to: "to : ka dava",
      note: "ka, km lucu banget pas senam smgt gt.."
    },
    {
      from: "sekolah sebelah",
      to: "xi kul 2 absen 24",
      note: "cantiknya kelewatan sumpah, CANTIK BANGET GILAK"
    },
    {
      from: "secret",
      to: "p",
      note: "'i just wanna be yours' Arctic Monkeys"
    }, 
    {
      from: "sebelah lu",
      to: "raffa naura ayu",
      note: "jangan kemana mana ya nong, w syg lu"
    },
    {
      from: "2-21-25-21-14-7",
      to: "kaka pmr yang pake kumis kumisan pas demos",
      note: "kak, kakak keren banget jadi kakek kakek"
    },
    {
      from: "perempuan iblis",
      to: "chairmate",
      note: "hi pinky girl"
    },
    {
      from: "yang pasti cewe",
      to: "x kuliner 2 (cwo yg maju krn slh suara hewan)",
      note: "haii masak yang enak yaa n semangattt"
    }
  ];

  const breakpointColumns = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1,
  };

  const [darkMode, setDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotes = notes.filter(note => 
    note.from.toLowerCase().includes(searchTerm.toLowerCase()) || 
    note.to.toLowerCase().includes(searchTerm.toLowerCase()) || 
    note.note.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`w-full min-h-[100vh] transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-pink-50 to-blue-50'}`}>
      <header className={`sticky top-0 z-10 backdrop-blur-md ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} shadow-md px-4 py-3`}>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-3 md:mb-0">
            <div className={`text-4xl font-bold mr-2 ${darkMode ? 'text-pink-500' : 'text-pink-600'}`}>❤</div>
            <div>
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Adudung</h1>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Titip rasa lewat kata</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                placeholder="Cari pesan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-full focus:outline-none ${
                  darkMode 
                    ? 'bg-gray-800 text-white border border-gray-700 focus:border-pink-500' 
                    : 'bg-white text-gray-800 border border-gray-200 focus:border-pink-400'
                }`}
              />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 absolute left-3 top-2.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto p-4">
        <div className={`rounded-xl overflow-hidden mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-pink-50'}`}>
            <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ✨ Pesan Terbaru
            </h2>
          </div>
          <div className="p-4">
            <TopNotes notes={[...notes].reverse()} darkMode={darkMode} />
          </div>
        </div>

        <div className="mb-6">
          <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Semua Pesan ({filteredNotes.length})
          </h2>
        </div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {filteredNotes.map((note, index) => (
            <Card
              key={index}
              className={`break-words p-4 shadow-md rounded-lg mb-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-700 to-gray-800 text-white hover:from-gray-600 hover:to-gray-700' 
                  : 'bg-white text-gray-800 hover:bg-pink-50'
              }`}
            >
              <CardContent className="p-2">
                <div className="flex justify-between items-start mb-2">
                  <p className={`font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                    From: {note.from}
                  </p>
                  <div className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                    #{index + 1}
                  </div>
                </div>
                <p className={`font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                  To: {note.to}
                </p>
                <div className={`pt-2 border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  <p className="whitespace-pre-wrap">{note.note}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </Masonry>

        <footer className={`mt-12 py-6 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>❤ Adudung - Titip rasa lewat kata</p>
        </footer>
      </div>
    </div>
  );
}
