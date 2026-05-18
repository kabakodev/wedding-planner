import Image from "next/image";

export default function Gallery() {
  return (
    <section className="fade-bg py-32" id="galerie">
      <div className="container-custom section-padding">
        <div className="text-center">
            <p className="subtitle">Notre galerie</p>
          <h2 className="mt-5 text-5xl font-semibold">Quelques-unes de nos oeuvres</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-20">
          <div className="grid grid-cols-3 gap-2 h-[350px] mb-8 lg:mb-0">
            {/**Colonne de gauche */}
            <div className="col-span-2 flex flex-col gap-2">
              <div className="bg-pink-400 flex-1 rounded-4xl overflow-hidden">
                <Image
                  src="/images/gallery-1.jpg"
                  alt="Gallery Image 1"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-pink-600 flex-1 rounded-4xl overflow-hidden">
                <Image
                  src="/images/gallery-2.jpg"
                  alt="Gallery Image 2"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/**Colonne de droite */}
            <div className="col-span-1 bg-purple-500 rounded-4xl overflow-hidden">
              <Image
                src="/images/gallery-3.jpg"
                alt="Gallery Image 3"
                width={900}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 h-[350px]">
            {/**Colonne de gauche */}
            <div className="col-span-2 flex flex-col gap-2">
              <div className="bg-pink-400 flex-1 rounded-4xl overflow-hidden">
                <Image
                  src="/images/gallery-4.jpg"
                  alt="Gallery Image 4"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-pink-600 flex-1 rounded-4xl overflow-hidden">
                <Image
                  src="/images/gallery-5.jpg"
                  alt="Gallery Image 5"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/**Colonne de droite */}
            <div className="col-span-1 bg-purple-500 rounded-4xl overflow-hidden">
              <Image
                src="/images/gallery-6.jpg"
                alt="Gallery Image 6"
                width={900}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
