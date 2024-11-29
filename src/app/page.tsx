import PersonSearch from './components/PersonSearch'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Person Search</h1>
      <PersonSearch />
    </main>
  )
}

