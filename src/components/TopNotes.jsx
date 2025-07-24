import Slider from "react-infinite-logo-slider";
import { Card, CardContent } from "./Card";

export default function TopNotes({ notes, darkMode = true }) {
  return (
    <Slider
      width="250px"
      duration={40}
      pauseOnHover={true}
      toRight={false}
    >
      {notes.slice(-10).map((note, index) => (
        <Slider.Slide key={index}>
          <Card className={`break-words p-4 shadow-md rounded-lg mb-4 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${
            darkMode 
              ? 'bg-gradient-to-br from-gray-600 to-gray-700 text-white' 
              : 'bg-gradient-to-br from-white to-pink-50 text-gray-800'
          }`}>
            <CardContent>
              <p className={`font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>From: {note.from}</p>
              <p className={`font-bold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>To: {note.to}</p>
              <div className={`pt-2 border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                <p className="whitespace-pre-wrap">{note.note}</p>
              </div>
            </CardContent>
          </Card>
        </Slider.Slide>
      ))}
    </Slider>
  );
}
