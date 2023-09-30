'use client'

function error ({
  reset
}: {
  reset: () => void
}) {
  return (
    <div className='w-full h-full flex flex-col gap-5 items-center justify-center'>
      <h2 className='text-2xl font-bold'>Upss! Something went wrong!</h2>
      <button
        className='bg-pink-500 py-2 px-5 text-white rounded-full hover:bg-pink-700 duration-200'
        onClick={
          () => { reset() }
        }
      >
        Try again
      </button>
    </div>
  )
}

export default error
