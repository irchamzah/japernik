export default function NoResult({ object }: { object: string }) {
  return (
    <>
      <div className='flex h-52 items-center justify-center'>
        <div className='text-center'>
          <p className='text-2xl font-semibold'>{object} tidak ditemukan.</p>
        </div>
      </div>
    </>
  );
}
