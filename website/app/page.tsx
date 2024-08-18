import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen max-w-7xl mx-auto">
      <Filter></Filter>
    </main>
  )
}

export function Filter() {
  return (
    <>
      <div role="tablist" className="tabs tabs-lifted w-[210px] ml-4">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
        {/*<div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">*/}
        {/*  Tab content 2*/}
        {/*</div>*/}
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" defaultChecked />

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />

        <div className="col-start-1 row-start-2"></div>
      </div>
      <div className="bg-base-100 border-base-300 rounded-box p-6 block border mt-[-1px]">
        <Table></Table>
      </div>
    </>
  )
}

export function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
