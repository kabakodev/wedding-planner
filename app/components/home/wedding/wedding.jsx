import Image from "next/image";

export default function Weddings() {
  const services = [
    {
      image: "/images/service-1.jpg",
      title: "Organisation complète",
      description:
        "Un accompagnement de la prémière idée jusqu'au dernier détail du jour J.",
    },
    {
      image: "/images/service-2.jpg",
      title: "Décoration sur mesure",
      description:
        "Une ambiance raffinée pensée pour réfleter votre histoire et votre style.",
    },
    {
      image: "/images/service-3.jpg",
      title: "Coordination du jour J",
      description:
        "Nous orchestrons chaque moment pour vous laisser vivre la célébration en toute tranquilité.",
    },
  ];

  return (
    <section className="fade-bg py-32" id="services">
      <div className="container-custom section-padding">
        
        <div className="text-center">
          <p className="subtitle">Nos Services</p>
          <h2 className="mt-5 text-5xl font-semibold">
            Ce que nous faisons
          </h2>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-[40px] border border-[#eadfce] bg-white/70 shadow-[0_20px_50px_rgba(144,115,72,0.08)]"
            >
              <div className="overflow-hidden">
                <Image
                  src={service.image}
                  width={1000}
                  height={1200}
                  alt={service.title}
                  className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="space-y-3 px-6 py-6 text-left">
                <h3 className="text-2xl font-semibold text-[var(--text)]">
                  {service.title}
                </h3>
                <p className="leading-7 text-zinc-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
