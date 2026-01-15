"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-5xl mx-auto px-4 py-6">
        <header className="mb-6 ml-6">
          <h1 className="text-2xl font-bold">
            척척밥상 주문서
          </h1>
        </header>
        <ul className="space-y-4">
          <li className="bg-white h-32 rounded-lg shadow-s border-1 border-gray-200" />
          <li className="bg-white h-32 rounded-lg shadow-s border-1 border-gray-200" />
          <li className="bg-white h-32 rounded-lg shadow-s border-1 border-gray-200" />
          <li className="bg-white h-32 rounded-lg shadow-s border-1 border-gray-200" />
        </ul>
      </section>
    </main>
  );
}
