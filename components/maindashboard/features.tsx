'use client';

const Features = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20 pb-20">
      <Feature title="💬 Real-time Chat" text="Instant messaging with no delays." />
      <Feature title="🔒 Secure" text="End-to-end encrypted conversations." />
      <Feature title="🌍 Anywhere" text="Chat on mobile, tablet, or desktop." />
    </section>
  );
};

const Feature = ({ title, text }: { title: string; text: string }) => (
  <div className="bg-[#020617] border border-slate-800 rounded-xl p-6 text-center hover:scale-105 transition">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-slate-400 mt-2">{text}</p>
  </div>
);

export default Features;
