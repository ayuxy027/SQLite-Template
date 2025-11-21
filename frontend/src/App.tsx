import { useCounter } from './hooks/useCounter'

const App = () => {
  const { count, loading, saving, error, increment, decrement, reset } = useCounter()

  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-stone-100">
      <header className="border-b border-stone-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-900 text-white shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-base font-semibold tracking-tight text-stone-900">SQLite Template</span>
          </div>
          <nav className="flex gap-8 text-sm md:text-base font-medium text-stone-500">
            <a href="#" className="hover:text-stone-900 transition-colors">Docs</a>
            <a href="#" className="hover:text-stone-900 transition-colors">GitHub</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-8 py-24">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <section className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-4 py-1.5 text-sm font-medium text-stone-600">
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-500"></span>
              v0.1 Starter
            </div>

            <h1 className="text-6xl font-bold tracking-tight text-stone-900 leading-[1.05]">
              Full-Stack SQLite Apps, <span className="text-stone-400 underline decoration-dotted font-thin">Simplified.</span>
            </h1>

            <p className="text-xl text-stone-600 leading-relaxed max-w-xl">
              A minimal, opinionated starter kit for shipping hackathon projects fast.
            </p>

            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-base text-stone-500 font-mono bg-stone-50 px-4 py-3 rounded-lg border border-stone-100 w-fit">
                <span className="text-stone-400">$</span>
                <span>./dev.sh</span>
              </div>
              <p className="text-xs text-stone-400">
                Runs frontend :5173 and backend :4000
              </p>
            </div>
          </section>

          <section className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-stone-100 to-stone-50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-white rounded-xl border border-stone-200 shadow-sm p-10">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-lg font-semibold text-stone-900">Counter Demo</h3>
                  <p className="text-base text-stone-500">Persisted in backend/data.sqlite</p>
                </div>
                <div className="h-12 px-5 flex items-center justify-center rounded-md bg-stone-50 border border-stone-200 text-2xl font-bold tabular-nums text-stone-900 min-w-[96px]">
                  {loading ? '...' : count}
                </div>
              </div>

              {error && (
                <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-100 text-xs text-red-600 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {error}
                </div>
              )}

              <div className="grid grid-cols-3 gap-4">
                <button
                  disabled={loading || saving}
                  onClick={decrement}
                  className="flex items-center justify-center h-11 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 hover:border-stone-300 text-stone-600 font-medium text-base transition-all active:scale-[0.98]"
                >
                  Decrease
                </button>
                <button
                  disabled={loading || saving}
                  onClick={reset}
                  className="flex items-center justify-center h-11 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 hover:border-stone-300 text-stone-600 font-medium text-base transition-all active:scale-[0.98]"
                >
                  Reset
                </button>
                <button
                  disabled={loading || saving}
                  onClick={increment}
                  className="flex items-center justify-center h-11 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-medium text-base shadow-sm transition-all active:scale-[0.98]"
                >
                  Increase
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex justify-between items-center text-[11px] md:text-xs text-stone-400 uppercase tracking-wider font-medium">
                <span>Latency: &lt;10ms</span>
                <span>SQLite 3</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App