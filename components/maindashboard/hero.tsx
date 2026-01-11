'use client';

const Hero = () => {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
        Chat with anyone, <br />
        <span className="text-sky-400">anytime, anywhere</span>
      </h1>

      <p className="mt-4 text-slate-400 max-w-xl">
        A fast, secure, and modern chat platform built for real-time communication.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 rounded-xl bg-sky-500 text-black font-semibold hover:bg-sky-400 transition">
          Get Started
        </button>
        <button className="px-6 py-3 rounded-xl border border-slate-600 text-white hover:bg-slate-800 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
