'use client'

import { Difficulty, SolutionMetaData } from '@/lib/type'
import { ChangeEvent, useState } from 'react'

export function TableWithTabs({ solutions }: { solutions: SolutionMetaData[] }) {
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.ALL)
  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setDifficulty(e.target.value as Difficulty)
  }

  let list = solutions
  if (difficulty !== Difficulty.ALL) {
    list = solutions.filter((solution) => solution.difficulty === difficulty)
  }
  return (
    <>
      <div role="tablist" className="tabs tabs-lifted w-[310px] ml-4" onChange={handleClick}>
        <input
          type="radio"
          name="tab"
          role="tab"
          className="tab"
          aria-label="所有"
          value={Difficulty.ALL}
          defaultChecked
        />
        <input type="radio" name="tab" role="tab" className="tab" aria-label="简单" value={Difficulty.EASY} />
        <input type="radio" name="tab" role="tab" className="tab" aria-label="中等" value={Difficulty.MEDIUM} />
        <input type="radio" name="tab" role="tab" className="tab" aria-label="困难" value={Difficulty.HARD} />
        <div className="col-start-1 row-start-2"></div>
      </div>
      <div className="bg-base-100 border-base-300 rounded-box p-6 block border mt-[-1px]">
        <Filter></Filter>
        <Table solutions={list}></Table>
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
