'use client'

import { Difficulty, LabelData, SolutionMetaData } from '@/lib/type'
import { ChangeEvent, useState } from 'react'
import { getLabelsBySolution } from '@/lib/labels'

export function TableWithTabs({ solutions }: { solutions: SolutionMetaData[] }) {
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.ALL)
  const [selectedLabels, setSelectedLabels] = useState<Set<string>>(new Set([]))

  const handleTabChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedLabels(new Set([]))
    setDifficulty(e.target.value as Difficulty)
  }
  const handleLabelClick = (label: string) => {
    const s = new Set(selectedLabels)
    if (selectedLabels.has(label)) {
      s.delete(label)
    } else {
      s.add(label)
    }
    setSelectedLabels(s)
  }

  let list = solutions
  if (difficulty !== Difficulty.ALL) {
    list = solutions.filter((solution) => solution.difficulty === difficulty)
  }
  const labels = getLabelsBySolution(list)

  let currentList = list
  if (selectedLabels.size) {
    currentList = list.filter((solution) => solution.label.some((l) => selectedLabels.has(l)))
  }

  return (
    <>
      <div role="tablist" className="tabs tabs-lifted w-[310px] ml-4" onChange={handleTabChange}>
        <input type="radio" name="tab" className="tab" aria-label="所有" value={Difficulty.ALL} defaultChecked />
        <input type="radio" name="tab" className="tab" aria-label="简单" value={Difficulty.EASY} />
        <input type="radio" name="tab" className="tab" aria-label="中等" value={Difficulty.MEDIUM} />
        <input type="radio" name="tab" className="tab" aria-label="困难" value={Difficulty.HARD} />
        <div className="col-start-1 row-start-2"></div>
      </div>
      <div className="bg-base-100 border-base-300 rounded-box p-6 block border mt-[-1px]">
        <Filter labels={labels} selectedLabels={selectedLabels} handleClick={handleLabelClick}></Filter>
        <Table solutions={currentList}></Table>
      </div>
    </>
  )
}

// TODO: It would be better to replace div with checkboxes
export function Filter({
  labels,
  handleClick,
  selectedLabels,
}: {
  labels: LabelData[]
  handleClick: (l: string) => void
  selectedLabels: Set<string>
}) {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1">
      {labels.map((l) => {
        return (
          <div
            className={`px-3.5 py-1 rounded-xl border border-slate-300 ${selectedLabels.has(l.name) ? 'bg-slate-300' : ''}`}
            key={l.name}
            onClick={() => handleClick(l.name)}
          >
            {l.name}:{l.count}
          </div>
        )
      })}
    </div>
  )
}

export function Table({ solutions }: { solutions: SolutionMetaData[] }) {
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
          {solutions.map((solution) => {
            return (
              <tr key={solution.id}>
                <th>{solution.id}</th>
                <td>{solution.title}</td>
                <td>{solution.difficulty}</td>
                <td>{solution.slug}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
