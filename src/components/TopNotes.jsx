import Slider from "react-infinite-logo-slider";
import { Card, CardContent } from "./Card";

export default function TopNotes({ notes }) {
  return (
    <Slider
      width="250px"
      duration={40}
      pauseOnHover={true}
      toRight={false}
    >
      {notes.slice(-10).reverse().map((note, index) => (
        <Slider.Slide key={index}>
          <Card className="break-words p-4 shadow-md rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <CardContent>
              <p className="font-bold">From: {note.from}</p>
              <p className="font-bold mb-2">To: {note.to}</p>
              <p>{note.note}</p>
            </CardContent>
          </Card>
        </Slider.Slide>
      ))}
    </Slider>
  );
}
