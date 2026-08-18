import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF6F2] text-[#241726]">
      {/*NAVBAR */}
      <div className="flex flex-wrap items-center justify-center gap-4 border-b border-[#241726]/10 bg-[#FFF6F2] px-6 py-4 font-mono text-sm">
        <a className="text-[#6b5a6d] hover:text-[#B81F66]">
        <Link href="/aboutme" className="text-[#6b5a6d] hover:text-[#B81F66]">
        about me</Link></a>
        <a href="#skills" className="text-[#6b5a6d] hover:text-[#B81F66]">skills</a>
        <a href="#projects" className="text-[#6b5a6d] hover:text-[#B81F66]">my projects</a>
        <a href="#contact" className="text-[#6b5a6d] hover:text-[#B81F66]">contact</a>
      </div>

      {/*  HERO  */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Foto */}
          <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-fullbackground-image: linear-gradient(var(--tw-gradient-stops));
 from-[#E63888] to-[#7C1149] shadow-xl">
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

     </main>
  );
}