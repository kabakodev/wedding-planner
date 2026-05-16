import { Play } from "lucide-react";

export default function Coverage() {
  return (
    <section className="bg-white py-32" id="cover">
      <div className="container-custom section-padding text-center">
        
        <p className="subtitle">Moments de Mariage</p>

        <h2 className="mt-5 text-5xl font-semibold">
          Notre Couverture d&apos;Événement
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-zinc-600">
          Des souvenirs élégants capturés magnifiquement et intemporellement.
        </p>

        <div className="relative mt-20 overflow-hidden rounded-[40px]">
          
          <img
            src="https://picsum.photos/1400/700?random=20"
            alt="cover"
            className="h-[200px] md:h-[500px] w-full object-cover"
          />

          <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#d6ab57] text-white">
            <Play />
          </button>
        </div>
      </div>
    </section>
  );
}
