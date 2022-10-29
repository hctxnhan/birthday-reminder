import { useState } from 'react';
import List from './components/list/List';
import data from './data';

export default function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className='min-h-screen min-w-screen flex flex-col justify-center items-center bg-gradient-to-b from-red-100 to-red-300'>
      <div className='w-[350px] py-8 px-6  shadow-xl rounded-lg bg-white'>
        <h1 className='mb-6 text-xl text-slate-600'>
          {people.length} birthdays today
        </h1>
        <List list={people} />
        <button
          onClick={() => setPeople([])}
          className='w-full bg-red-600 font-semibold mt-6 py-3 px-4 text-white rounded-lg hover:bg-red-500 transform hover:-translate-y-1 active:bg-red-600 focus:ring-4 focus:ring-red-200 transition shadow-lg'
        >
          Clear all
        </button>
      </div>
    </div>
  );
}
