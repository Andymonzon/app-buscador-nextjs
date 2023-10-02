function Skeleton () {
  return (
    <div className='h-full bg-zinc-100 p-3 rounded drop-shadow-md w-[20rem] flex flex-col flex-wrap items-center justify-center gap-5 animate-pulse'>
      <header className='flex gap-5 items-center'>
        <div className='w-[200px] h-[200px] bg-zinc-600 rounded-full' />
        <div className='flex flex-col gap-5'>
          <div className='w-[50px] h-[50px] bg-zinc-600 rounded-full'></div>
          <div className='w-[50px] h-[50px] bg-zinc-600 rounded-full'></div>
          <div className='w-[50px] h-[50px] bg-zinc-600 rounded-full'></div>
        </div>
      </header>
      <main className='w-full flex flex-col gap-8 items-center'>
        <div className='w-full flex flex-col gap-2 items-center'>
          <div className='w-full h-[20px] bg-zinc-600'></div>
          <div className='flex justify-evenly items-center w-full'>
            <div className='flex flex-col items-center gap-2'>
              <p className='w-10 h-[15px] bg-zinc-600'></p>
              <p className='w-20 h-[15px] bg-zinc-600'></p>
            </div>
            <div className='w-16 h-[15px] bg-zinc-600'></div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col gap-2">
          <div className='w-full h-[15px] bg-zinc-600'></div>
          <div className='w-full h-[15px] bg-zinc-600'></div>
        </div>
      </main>
      <div className='p-3 rounded-full h-[50px] w-full bg-zinc-600'></div>
    </div>
  )
}

export default Skeleton
