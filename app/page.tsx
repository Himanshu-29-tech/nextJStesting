import Image from "next/image";

const projects = [
  {
    title: "Netflix Clone",
    desc: "Built using HTML, CSS & JS. Focused on UI/UX and responsiveness.",
    link: "https://github.com/Himanshu-29-techject"
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with Next.js and Tailwind CSS.",
    link: "https://github.com/Himanshu-29-techject"
  },
  {
    title: "AI/ML Practice",
    desc: "Learning and implementing ML models using Python & Pandas.",
    link: "https://github.com/Himanshu-29-techject"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

      {/* Hero Section */}
      <section className="text-center">
        <img
          src="https://pbs.twimg.com/profile_images/2038948217904357376/T63SyuAc.jpg"
          alt="Himanshu Yadav"
          className="w-32 h-32 rounded-full mx-auto border-4 border-gray-700"
        />

        <h1 className="text-5xl font-bold mt-4">Himanshu Yadav 🌱</h1>
        <p className="text-gray-400 mt-2">@himanshu_ji_y</p>

        <p className="mt-4 text-lg text-gray-300">
          Full Stack Developer • AI/ML Learner 🚀
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://x.com/himanshu_ji_y"
            target="_blank"
            className="bg-blue-500 px-5 py-2 rounded hover:bg-blue-600"
          >
            Twitter
          </a>

          <a
            href="https://github.com/Himanshu-29-techject"
            target="_blank"
            className="bg-gray-800 px-5 py-2 rounded hover:bg-gray-700"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* About */}
      <section className="mt-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I’m a CSE'29 student passionate about full stack development and AI/ML.
          I focus on building real-world projects, improving daily, and turning ideas into impactful solutions.
          <br /><br />
          Currently exploring React, Next.js, and Python while sharpening problem-solving skills.
          I believe consistency + learning = growth 🚀
        </p>
      </section>

      {/* Skills */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["HTML","CSS","JavaScript","React","Next.js","Python","AI/ML"].map(skill => (
            <span key={skill} className="bg-gray-900 px-4 py-2 rounded hover:bg-gray-700 transition">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-gray-900 p-5 rounded-xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-gray-400 mt-2">{p.desc}</p>

              <a
                href={p.link}
                target="_blank"
                className="inline-block mt-4 text-blue-400 hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Audience</h2>
        <div className="bg-gray-900 inline-block px-6 py-4 rounded-lg">
          <p className="text-lg">Followers: <b>225</b></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500">
        <p>© 2026 Himanshu Yadav • Keep Pushing 🚀</p>
      </footer>

    </main>
  );
}
