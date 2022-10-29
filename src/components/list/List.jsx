import Item from '../item/Item';
export default function List({ list }) {
  return (
    <>
      <ul className='flex flex-col gap-4'>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <Item data={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
