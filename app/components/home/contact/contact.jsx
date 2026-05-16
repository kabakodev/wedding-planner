export default function Contact() {
  return (
    <section className="bg-white py-32" id="contact">
      <div className="container-custom section-padding">
        
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-5">
            
            <div className="overflow-hidden arch-left-img">
              <img
                src="https://picsum.photos/600/900?random=30"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="overflow-hidden arch-right-img">
              <img
                src="https://picsum.photos/600/900?random=31"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* FORM */}
          <div>
            <p className="subtitle">Get in touch</p>

            <h2 className="mt-5 text-5xl font-semibold">
              Contactez-nous
            </h2>

            <form className="mt-12 space-y-6">
              
              <div className="grid gap-6 md:grid-cols-2">
                
                <input
                  placeholder="Nom"
                  className="border border-[#e5dccd] bg-transparent px-5 py-4 outline-none"
                />

                <input
                  placeholder="Email"
                  className="border border-[#e5dccd] bg-transparent px-5 py-4 outline-none"
                />
              </div>

              <input
                placeholder="Sujet"
                className="w-full border border-[#e5dccd] bg-transparent px-5 py-4 outline-none"
              />

              <textarea
                rows={6}
                placeholder="Détails"
                className="w-full border border-[#e5dccd] bg-transparent px-5 py-4 outline-none"
              />

              <button className="gold-btn px-10 py-4">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
