import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-10">

      {/* Profile */}
      <div className="text-center">
        <img
          src="https://pbs.twimg.com/profile_images/2038948217904357376/T63SyuAc.jpg"
          alt="Himanshu Yadav"
          className="w-32 h-32 rounded-full mx-auto border-4 border-gray-700"
        />

        <h1 className="text-4xl font-bold mt-4">Himanshu Yadav 🌱</h1>
        <p className="text-gray-400">@himanshu_ji_y</p>
        <p className="text-gray-300 mt-2">
          CSE'29 | Full Stack + AI Developer
        </p>
      </div>

      {/* About Me */}
      <section className="mt-10 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am a Computer Science Engineering student (CSE'29) with a strong
          passion for building real-world applications using full stack
          development and exploring the power of AI/ML.  
          <br /><br />
          I believe in consistent growth, focusing on small daily improvements,
          and turning ideas into impactful projects. Currently, I am sharpening
          my skills in technologies like React, Next.js, and Python while also
          diving deeper into data and machine learning.  
          <br /><br />
          My goal is to become a skilled developer who not only writes clean and
          efficient code but also creates meaningful solutions that solve real
          problems. I enjoy learning, building, and sharing my journey along the
          way. 🚀
        </p>
      </section>

      {/* Audience */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-3">Audience</h2>
        <div className="bg-gray-900 px-6 py-4 rounded-lg">
          <p className="text-lg">
            Followers: <span className="font-bold">225</span>
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <span className="bg-gray-800 px-4 py-2 rounded">HTML</span>
          <span className="bg-gray-800 px-4 py-2 rounded">CSS</span>
          <span className="bg-gray-800 px-4 py-2 rounded">JavaScript</span>
          <span className="bg-gray-800 px-4 py-2 rounded">React</span>
          <span className="bg-gray-800 px-4 py-2 rounded">Next.js</span>
          <span className="bg-gray-800 px-4 py-2 rounded">Python</span>
          <span className="bg-gray-800 px-4 py-2 rounded">AI/ML</span>
        </div>
      </section>

      {/* Connect */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-3">Connect</h2>
        <a
          href="https://x.com/himanshu_ji_y"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          X / Twitter (225 followers)
        </a>
      </section>

    </main>
  );
}