import Image from "next/image";

export default function Story() {
  return (
    <section className="bg-[#faf7f2] py-32" id="about">
      <div className="container-custom section-padding">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <h2 className="subtitle uppercase">à propos</h2>

            <p className="mt-10 leading-8 text-zinc-600">
             Nous créons des mariages élégants et sur mesure qui reflètent parfaitement
              votre histoire et votre personnalité
            </p>

            <p className="mt-6 leading-8 text-zinc-600">
             De la conception à la coordination du grand jour, chaque détail est pensé avec soin pour offrir une 
             expérience fluide et mémorable.
            </p>

            <p className="mt-6 leading-8 text-zinc-600">
             Notre mission est de transformer vos rêves en une célébration unique,
              empreinte d’émotion, de beauté et de raffinement.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="overflow-hidden rounded-[220px]">
              <Image
                width={800}
                height={1200}
                alt="about-1"
                src="/images/about-1.jpg"
                className="h-full w-full object-cover"
                quality={100}
                sizes="(max-width : 768px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-5">
              <div className="overflow-hidden rounded-[220px] h-[220px]">
                <Image
                  width={880}
                  height={1200}
                  alt="about-2"
                  src="/images/about-2.jpg"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[220px] h-[220px]">
                <Image
                  width={800}
                  height={1200}
                  alt="about-3"
                  src="/images/about-3.jpg"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
