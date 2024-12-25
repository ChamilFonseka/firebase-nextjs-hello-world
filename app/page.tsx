export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center flex-col gap-5 bg-sky-200 text-sky-500">
      <h1 className="text-5xl font-black tracking-wide">{process.env.TITLE}</h1>
      <p className="text-lg italic underline">
        {process.env.SUBTITLE}
      </p>
    </main>
  );
}
