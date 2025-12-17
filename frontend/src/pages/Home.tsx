import { useHealth } from '../hooks/useHealth'
import AuthForm from '../components/AuthForm'
import Stats from '../components/Stats'

const HomePage = () => {
  const { data: health } = useHealth()

  return (
    <div className="grid md:grid-cols-2 gap-20 items-start">
      <section className="space-y-6">
        <div className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-4 py-1.5 text-sm font-medium text-stone-600">
          <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-500" />
          v0.1 Starter
        </div>

        <h1 className="text-6xl font-bold tracking-tight text-stone-900 leading-[1.05]">
          Full-Stack PostgreSQL Apps,{' '}
          <span className="text-stone-400 underline decoration-dotted font-thin">Simplified.</span>
        </h1>

        <p className="text-xl text-stone-600 leading-relaxed max-w-xl">
          A minimal, opinionated starter kit for shipping hackathon projects fast.
        </p>

        <div className="pt-4 flex flex-col gap-3">
          <div className="flex items-center gap-3 text-base text-stone-500 font-mono bg-stone-50 px-4 py-3 rounded-lg border border-stone-100 w-fit">
            <span className="text-stone-400">$</span>
            <span>./dev.sh</span>
          </div>
          <p className="text-xs text-stone-400">Runs frontend :5173 and backend :4000</p>
        </div>
      </section>

      <section className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-stone-100 to-stone-50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
        <div className="relative bg-white rounded-xl border border-stone-200 shadow-sm p-10">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-stone-900 mb-1">Authentication</h3>
            <p className="text-base text-stone-500">Sign up or login to PostgreSQL</p>
          </div>

          <AuthForm />

          <div className="mt-8 pt-6 border-t border-stone-100 flex justify-between items-center text-[11px] md:text-xs text-stone-400 uppercase tracking-wider font-medium">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    health?.systems.api.status === 'healthy' ? 'bg-green-500' : 'bg-red-400'
                  }`}
                />
                API
              </span>
              <span className="flex items-center gap-1.5">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    health?.systems.database.status === 'healthy' ? 'bg-green-500' : 'bg-red-400'
                  }`}
                />
                DB
              </span>
            </div>
            <span>PostgreSQL</span>
          </div>
        </div>
      </section>

      <section className="md:col-span-2">
        <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-10">
          <Stats />
        </div>
      </section>
    </div>
  )
}

export default HomePage


