import { useState, useEffect } from "react";

export default function Timer({ initialMinutes = 25 }) {
  const [seconds, setSeconds] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && seconds > 0) {
      interval = setInterval(() => setSeconds((s) => s - 1), 1000);
    } else if (seconds === 0) {
      alert("Focus session complete!");
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-5xl font-bold mb-6">{formatTime(seconds)}</h2>
      <div className="space-x-4">
        <button
          onClick={() => setIsActive(!isActive)}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => { setSeconds(initialMinutes * 60); setIsActive(false); }}
          className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
