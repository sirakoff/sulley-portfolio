import { useEffect, useState } from "react";
import Arrow from "./arrow.svg";
import Window from "./window.svg";

const darkColor = "rgba(255,255,255,0.5)";

function App() {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    fetch(
      `${
        process.env.NODE_ENV === "production"
          ? "https://sulley-porfolio-api.vercel.app"
          : "http://localhost:3005"
      }/api/currently-playing`
    )
      .then((res) => res.json())
      .then((data) => {
        setTrack(data);
      });
  }, []);

  return (
    <div
      className="flex flex-col justify-between p-10"
      style={{
        height: "100vh",
      }}
    >
      <div className="text-white">
        <p>Suleiman Zakari Mohammed</p>
        <p>
          I’m currently experimenting with the new internet at <a
            className="underline"
            href="https://www.lens.xyz/"
            target="_blank"
            rel="noreferrer"
          >
            Lens
          </a>. {" "} Previously:
          <a
            className="underline"
            href="https://www.daybridge.com/"
            target="_blank"
            rel="noreferrer"
          >
            Daybridge
          </a>
        </p>
        <p>
          <span
            className=""
            style={{
              color: darkColor,
            }}
          >
            Based in
          </span>{" "}
          Birmingham, United Kingdom.
        </p>
      </div>
      <div className="text-white">
        <div className="">
          <div
            className="flex items-center"
            style={{
              color: darkColor,
            }}
          >
            <span
              className={`${
                track?.isPlaying ? "rotating" : ""
              } playing-icon mx-2`}
            ></span>
            <span className="" style={{ marginLeft: "0.4rem" }}>
              Listening to
            </span>
          </div>
          <a
            className="flex items-center"
            href={track?.songUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              {track ? `${track?.title} by ${track?.artist}` : "Loading"}
            </span>{" "}
            <img src={Window} alt="window icon" className="w-3 mx-2" />
          </a>
        </div>
        <div
          className="flex items-center border-t pt-12 mt-12"
          style={{
            borderColor: "rgba(255,255,255,0.2)",
          }}
        >
          <div
            style={{
              color: darkColor,
            }}
          >
            Say Hi
          </div>
          <img src={Arrow} className="mx-4" />
          <a
            className="flex items-center mx-2"
            href="https://twitter.com/svlleyy"
            target="_blank"
            rel="noreferrer"
          >
            <span>Twitter</span>{" "}
            <img src={Window} alt="window icon" className="w-3 mx-2" />
          </a>
          <a
            className="flex items-center mx-2"
            href="mailto:hi@sulley.me"
            target="_blank"
            rel="noreferrer"
          >
            <span>Email</span>{" "}
            <img src={Window} alt="window icon" className="w-3 mx-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
