import { ReactMediaRecorder } from "react-media-recorder";
import RecordIcon from "./RecordIcon";

type Props = {
  handleStop: any;
};

function RecordMessage({ handleStop }: Props) {
  return (
    <ReactMediaRecorder
      audio
      onStop={handleStop}
      render={({ status, startRecording, stopRecording }) => (
        // <div className="mt-2"><button>hello</button></div>
        <div className="mt-1">
          <button
            onPointerDown={startRecording}
            onPointerUp={stopRecording}
            onTouchStart={startRecording}
            onTouchEnd={stopRecording}
            // onMouseDown={startRecording}
            // onMouseUp={stopRecording}
            className="bg-white p-5 rounded-full"
          >
            <RecordIcon
              classText={
                status == "recording"
                  ? "animate-pulse text-red-500"
                  : " text-sky-500 animate-pulse"
              }
            />
          </button>
          <p className="mt-2 text-white font-light ">{status}</p>
        </div>
      )}
    />
  );
}

export default RecordMessage;
