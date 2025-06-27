import Particle from "./Particle";

export const Test = () => {
  return (
    <div className="relative bg-black w-screen h-screen overflow-hidden">
      <Particle />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
        Particle Background Test
      </div>
    </div>
  );
};
