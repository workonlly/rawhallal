import React from 'react'

function page() {
  return (
    <div className='h-full w-full relative flex flex-row gap-1 bg-white'>
        {/* left side */}
      <div className="bg-black h-screen w-[30%] flex flex-col">
        <div>  </div>
      </div>
      {/* left side end */}
      {/* right side */}
      <div className="bg-black h-screen w-[70%] flex flex-col items-center m-2 gap-3"> 


          <div className='text-white bg-red-500 text-center w-[20%]  '>generate a new block +</div>
        <div className='flex flex-row gap-2 ' id='id'>
         <input type="text" />
         <button className='bg-white rounded-sm p-2 text-black hover:scale-105'>summit</button>
        </div>
        <div className='flex flex-row gap-2 ' id='imageurl'>
         <input type="text" />
         <button className='bg-white rounded-sm p-2 text-black hover:scale-105'>summit</button>
        </div>
        <div className='flex flex-row gap-2 ' id='text'>
         <input type="text" />
         <button className='bg-white rounded-sm p-2 text-black hover:scale-105'>summit</button>
        </div>
        <div className='flex flex-row gap-2 ' id='price'>
         <input type="text" />
         <button className='bg-white rounded-sm p-2 text-black hover:scale-105'>summit</button>
        </div>
        <div className='flex flex-row gap-2 ' id='productcode'>
         <input type="text" />
         <button>summit</button>
        </div>
        <div className='flex flex-row gap-2 ' id='title'>
         <input type="text" />
         <button className='bg-white rounded-sm p-2 text-black hover:scale-105'>summit</button>
        </div>
        <div className='flex flex-row gap-2 ' id='metadescrip'>
         <input type="text" />
         <button className='bg-white rounded-sm p-2 text-black hover:scale-105'>summit</button>
        </div>
        <div className='flex flex-row gap-2 ' id='metakey'>
         <input type="text" />
         <button className='bg-white rounded-sm p-2 text-black hover:scale-105'>summit</button>
        </div>
      </div>
      {/* right side end */}
    </div>
  )
}

export default page
