import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF6F2] text-[#241726]">
      {/*NAVBAR */}
      <div className="flex flex-wrap items-center justify-center gap-4 border-b border-[#241726]/10 bg-[#FFF6F2] px-6 py-4 font-mono text-sm">
        <a href="#about" className="text-[#6b5a6d] hover:text-[#B81F66]">about me</a>
        <a href="#skills" className="text-[#6b5a6d] hover:text-[#B81F66]">skills</a>
        <a href="#projects" className="text-[#6b5a6d] hover:text-[#B81F66]">my projects</a>
        <a href="#contact" className="text-[#6b5a6d] hover:text-[#B81F66]">contact</a>
      </div>

      {/*  HERO  */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Foto */}
          <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full bg-gradient-to-br from-[#E63888] to-[#7C1149] shadow-xl">
            <Image
              src="/images/kinan_photo.jpeg"
              alt="Foto Kinanti"
              fill
              sizes="256px"
              className="object-cover"
              priority
            />
          </div>

          {/* Teks */}
          <div>
            <p className="mb-2 font-mono text-sm text-[#B81F66]"> halo, perkenalkan</p>
            <h1 className="mb-2 text-5xl font-bold italic">
              Aku <span className="text-[#B81F66]">Kinanti</span>
            </h1>
            <p className="mb-4 font-mono text-lg text-[#6b5a6d]">
              Web Developer & Creative Designer
            </p>
            <p className="mb-6 max-w-md text-[#6b5a6d]">
              Pelajar SMK Telkom malang yang sedang belajar membuat profile 
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#about"
                className="rounded-full bg-[#241726] px-6 py-3 font-semibold text-white hover:bg-[#B81F66]"
              >
                Kenalan lebih jauh
              </a>
              <a
                href="#projects"
                className="rounded-full border border-[#241726]/20 px-6 py-3 font-semibold hover:border-[#B81F66] hover:text-[#B81F66]"
              >
                Lihat proyekku
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT  */}
      <section id="about" className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 font-mono text-sm text-[#B81F66]">tentang aku</p>
          <h2 className="mb-6 text-3xl font-bold">
            Sedikit cerita <span className="italic text-[#B81F66]">di balik layar</span>
          </h2>

          <div className="rounded-2xl border border-[#241726]/10 bg-white p-8">
            <p className="mb-4 text-[#6b5a6d]">
              Halo, aku Kinanti  Aku pelajar SMK yang tertarik dengan dunia
              programming, teknologi, dan desain. Aku senang membuat website
              yang tidak cuma jalan dengan baik, tapi juga nyaman dilihat dan
              menyenangkan dipakai.
            </p>
            <p className="text-[#6b5a6d]">
              Buat aku, coding dan desain itu dua sisi dari hal yang sama:
              keduanya soal menyelesaikan masalah dengan cara yang rapi.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS*/}
      <section id="skills" className="bg-[#FFEDE4] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 font-mono text-sm text-[#B81F66]"> yang aku kuasai</p>
          <h2 className="mb-6 text-3xl font-bold">
            Skill &amp; <span className="italic text-[#B81F66]">tools</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#241726]/10 bg-white p-6">
              <h3 className="mb-3 font-mono text-sm text-[#B81F66]">development</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Next.js", "Git & GitHub"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#241726]/10 bg-[#FFEDE4] px-3 py-1 font-mono text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#241726]/10 bg-white p-6">
              <h3 className="mb-3 font-mono text-sm text-[#B81F66]">design</h3>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Canva", "UI/UX Basics", "Typography"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#241726]/10 bg-[#FFEDE4] px-3 py-1 font-mono text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  PROJECTS  */}
      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 font-mono text-sm text-[#B81F66]">karya-karyaku</p>
          <h2 className="mb-6 text-3xl font-bold">
            Beberapa <span className="italic text-[#B81F66]">proyek</span>
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                file: "portfolio-site/",
                title: "Personal Portfolio",
                desc: "Website profil pribadi ini, dibangun dengan Next.js & Tailwind.",
                color: "from-[#E63888] to-[#7C1149]",
              },
              {
                file: "ui-redesign/",
                title: "UI Redesign Concept",
                desc: "Eksperimen mendesain ulang tampilan aplikasi sederhana di Figma.",
                color: "from-[#2E9C74] to-[#135C3E]",
              },
              {
                file: "mini-project/",
                title: "Latihan Interaktif",
                desc: "Proyek kecil untuk melatih logika JavaScript.",
                color: "from-[#E68A3C] to-[#B84F1F]",
              },
            ].map((project) => (
              <div
                key={project.file}
                className="overflow-hidden rounded-2xl border border-[#241726]/10 bg-white"
              >
                <div className={`h-28 bg-gradient-to-br ${project.color}`} />
                <div className="p-5">
                  <p className="mb-1 font-mono text-xs text-[#6b5a6d]">{project.file}</p>
                  <h3 className="mb-2 font-semibold">{project.title}</h3>
                  <p className="text-sm text-[#6b5a6d]">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  CONTACT  */}
      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-[#241726] p-10 text-[#F6E9EF]">
          <p className="mb-2 font-mono text-sm text-[#B9A9BC]">
            kinantinurani@gmail.com
          </p>
          <h2 className="mb-6 max-w-md text-2xl font-bold italic">
            Punya ide proyek atau sekadar mau ngobrol soal desain &amp; kode?
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:kinantinurani@gmail.com"
              className="rounded-lg border border-white/20 px-4 py-2 font-mono text-sm hover:bg-white/10"
            >
              email
            </a>
            <a
              href="https://www.instagram.com/kinn.ups/"
              className="rounded-lg border border-white/20 px-4 py-2 font-mono text-sm hover:bg-white/10"
            >
              instagram
            </a>
            <a
              href="https://github.com/kinantinurani"
              className="rounded-lg border border-white/20 px-4 py-2 font-mono text-sm hover:bg-white/10"
            >
              github
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 text-center font-mono text-xs text-[#6b5a6d]">
         Kinanti 
      </footer>
    </main>
  );
}