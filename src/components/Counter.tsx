import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center gap-4 rounded-xl border border-blue-200 bg-blue-50 p-8 shadow-lg'>
      <h2 className='text-2xl font-bold text-blue-900'>React Counter</h2>
      <p className='font-medium text-blue-700'>
        Current count:{' '}
        <span className='font-mono text-3xl font-black'>{count}</span>
      </p>
      <div className='flex gap-2'>
        <button
          onClick={() => setCount(count - 1)}
          className='rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md transition-colors hover:bg-blue-600 active:scale-95'
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className='rounded-lg bg-blue-700 px-4 py-2 text-white shadow-md transition-colors hover:bg-blue-800 active:scale-95'
        >
          Increment
        </button>
      </div>
    </div>
  );
}
