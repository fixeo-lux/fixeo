export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            FIXEO
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight">
            Trouvez rapidement un artisan de confiance au Luxembourg
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Déposez votre demande gratuitement et recevez les réponses des
            professionnels adaptés à votre besoin.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/request"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Déposer une demande
            </a>

            <a
              href="/register"
              className="border border-slate-300 px-6 py-3 rounded-lg"
            >
              Rejoindre FIXEO
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}