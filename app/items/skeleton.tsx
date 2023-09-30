function skeleton () {
  return (
    <>
      {
        [...Array(3)].map((_movie, index) => (
          <div key={index} className='flex gap-5 w-full bg-zinc-100 p-3 rounded drop-shadow-md'>
            <div className='bg-gray-600 rounded-full w-[150px] h-[150px] animate-pulse'></div>
            <div className='flex flex-col justify-between animate-pulse'>
              <h2 className='bg-gray-600 w-[100px] h-[15px] rounded-full'></h2>
              <p className='bg-gray-600 w-[250px] h-[15px] rounded-full'></p>
              <p className='bg-gray-600 w-[250px] h-[15px] rounded-full'></p>
              <p className='bg-gray-600 w-[250px] h-[15px] rounded-full'></p>

              <div className='flex justify-between'>
                <p className='bg-gray-600 w-[50px] h-[15px] rounded-full'></p>
                <p className='bg-gray-600 w-[30px] h-[15px] rounded-full'></p>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default skeleton
