export default function Item({ data }) {
  return (
    <div className='flex gap-2'>
      <div className=''>
        <img
          className='w-[60px] h-[60px] object-cover rounded-full'
          src={data.image}
          alt={data.name}
        />
      </div>
      <div className='flex flex-col justify-center gap-1'>
        <p className='text-slate-900 text-base font-bold'>{data.name}</p>
        <p className='text-slate-600 text-sm font-semibold'>{data.age} years</p>
      </div>
    </div>
  );
}
