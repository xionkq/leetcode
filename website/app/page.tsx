import { getAllSolutionMeta } from '@/lib/solutions'
import { TableWithTabs } from '@/app/(comp)/table'

export default function Home() {
  const solutionsList = getAllSolutionMeta()
  return (
    <>
      <header className="h-80 bg-gradient-to-r from-pink-500 to-yellow-500 flex justify-center items-center text-6xl font-bold text-white">
        Problems ({solutionsList.length})
      </header>
      <main className="max-w-7xl mx-auto my-10">
        <TableWithTabs solutions={solutionsList}></TableWithTabs>
      </main>
    </>
  )
}
