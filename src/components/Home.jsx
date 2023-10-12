import { React, useContext } from 'react';
import PieChart from './PieChart';
import TableSector from './TableSector';
import { InteractionsContext } from '../App';

export default function Home() {
  
  const interactions = useContext(InteractionsContext);

  return (
    
    <div className="landing">
      <h1 className='text-center text-3xl px-5  sm:text-5xl  pt-12'>Percentages of interactions for each sector</h1>
      <div className='graphs__container flex flex-row items-center justify-center w-full overflow-hidden'>
        <div className='table-graph flex items-center justify-center pb-72 pl-5'>
          <TableSector data={interactions} />
        </div>
        <div className='pie__chart flex items-center justify-center pt-10 pl-14 w-full'>
          <PieChart dataUser={interactions} />
        </div>
      </div>
    </div>
    
  )
}
