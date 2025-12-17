const DocsPage = () => {
  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900">Docs</h1>
      <p className="text-sm text-stone-600">
        This template ships with a React + Vite frontend and a Node + PostgreSQL backend wired together.
        Use it as a starting point for small projects and hackathons.
      </p>
      <ul className="list-disc pl-5 text-sm text-stone-600 space-y-1">
        <li>
          Frontend entry: <code className="bg-stone-100 px-1 rounded">frontend/src/App.tsx</code>
        </li>
        <li>
          Auth API: <code className="bg-stone-100 px-1 rounded">backend/src/index.js</code>
        </li>
        <li>
          Database logic:{' '}
          <code className="bg-stone-100 px-1 rounded">
            backend/src/db.js
          </code>
        </li>
        <li>
          Prisma schema:{' '}
          <code className="bg-stone-100 px-1 rounded">
            backend/prisma/schema.prisma
          </code>
        </li>
      </ul>
      <p className="text-xs text-stone-400">
        For longer-form documentation, create markdown files under a{' '}
        <code className="bg-stone-100 px-1 rounded">docs/</code> directory and link them here.
      </p>
    </div>
  )
}

export default DocsPage


