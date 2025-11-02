import Timer from "../components/Timer";

export default function FocusMode() {
  return (
    <div className="px-4">
      <h2 className="text-3xl font-bold text-center mt-8 text-indigo-600">Focus Mode</h2>
      <Timer initialMinutes={25} />
    </div>
  );
}
