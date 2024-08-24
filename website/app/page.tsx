import { getAllSolutionMeta } from '@/lib/solutions'

export default function Home() {
  const allSolutions = getAllSolutionMeta()
  return (
    <>
      <header className="h-80 bg-gradient-to-r from-pink-500 to-yellow-500 flex justify-center items-center text-6xl font-bold">
        Problems ({allSolutions.length})
      </header>
      <main className="max-w-7xl mx-auto mt-10">
        <TableWithTabs></TableWithTabs>
      </main>
    </>
  )
}

export function TableWithTabs() {
  return (
    <>
      <div role="tablist" className="tabs tabs-lifted w-[210px] ml-4">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" defaultChecked />

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />

        <div className="col-start-1 row-start-2"></div>
      </div>
      <div className="bg-base-100 border-base-300 rounded-box p-6 block border mt-[-1px]">
        <Filter></Filter>
        <Table></Table>
      </div>
    </>
  )
}

export function Filter() {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1">
      <div className="px-3.5 py-1 rounded-xl bg-slate-300">字符串: 12</div>
      <div className="px-3.5 py-1 rounded-xl bg-slate-300">字符串</div>
      <div className="px-3.5 py-1 rounded-xl bg-slate-300">字符串: 12</div>
      <div className="px-3.5 py-1 rounded-xl bg-slate-300">字符串</div>
      <div className="px-3.5 py-1 rounded-xl bg-slate-300">字符串: 12</div>
      <div className="px-3.5 py-1 rounded-xl bg-slate-300">字符串</div>
      <div className="px-3.5 py-1 rounded-xl bg-slate-300">字符串: 12</div>
      <div className="px-3.5 py-1 rounded-xl bg-slate-300">字符串</div>
      <div className="px-3.5 py-1 rounded-xl bg-slate-300">字符串: 12</div>
      <div className="px-3.5 py-1 rounded-xl bg-slate-300">字符串</div>
      <div className="px-3.5 py-1 rounded-xl bg-slate-300">字符串: 12</div>
      <div className="px-3.5 py-1 rounded-xl bg-slate-300">字符串</div>
      <div className="px-3.5 py-1 rounded-xl bg-slate-300">字符串: 12</div>
      <div className="px-3.5 py-1 rounded-xl bg-slate-300">字符串</div>
      <div className="px-3.5 py-1 rounded-xl bg-slate-300">字符串</div>
    </div>
  )
}

export function Table() {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>difficulty</th>
            <th>solution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
