import Arrow from "./arrow.svg";
import Window from "./window.svg";
import Rotating from "./rotating.svg";

const darkColor = "rgba(255,255,255,0.5)";

function App() {
  return (
    <div
      className="flex flex-col justify-between p-10"
      style={{
        height: "100vh",
      }}
    >
      <div className="text-white">
        <div>Suleiman Zakari Mohammed</div>
        <div>
          I’m currently experimenting with calendars at{" "}
          <a
            className="underline"
            href="https://www.daybridge.com/"
            target="_blank"
            rel="noreferrer"
          >
            Daybridge
          </a>
        </div>
        <div>
          <span
            className=""
            style={{
              color: darkColor,
            }}
          >
            Based in
          </span>{" "}
          Birmingham, United Kingdom.
        </div>
      </div>
      <div className="text-white">
        <div className="">
          <div
            className="flex items-center"
            style={{
              color: darkColor,
            }}
          >
            <span className="rotating mx-2"></span>
            <span className="" style={{ marginLeft: "0.4rem" }}>
              Listening to
            </span>
          </div>
          <a
            className="flex items-center"
            href="http://google.com"
            target="_blank"
            rel="noreferrer"
          >
            <span>No Halo by Brockhampton</span>{" "}
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
