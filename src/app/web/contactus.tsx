import React from 'react'


function Contactus() {
  return (
      <div className="h-[88%] bg-white/20 w-full mt-11  text-center overflow-auto rounded-sm scrollbar-custom">
        

                      <div className="m-[20px] realtive">
        <div className="p-[3px] backdrop-blur-md w-full  rounded-xl shadow-xl flex flex-row justify-between relative gap-1 animated-bg">
          <div className="bg-black p-[10px] backdrop-blur-md w-full  rounded-xl shadow-xl flex flex-row justify-between relative gap-1">
            <div className="w-[100%] bg-white/10 p-[10px] backdrop-blur-md rounded-sm p-[30px" > 
                          <section className="bg-black/20 backdrop-blur-md py-12 px-6 mt-3">
  <div className="max-w-4xl mx-auto">
    <div className="text-center ">
      <h2 className="text-3xl text-white font-bold">Send Us A Message</h2>
      <p className="text-gray-600 text-lg text-white">Quick Contact</p>
    </div>

    <form className="flex flex-col md:flex-row gap-6">
      {/* Left Inputs */}
      <div className="flex-1 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border text-white border-white px-4 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border text-white border-white px-4 py-2 rounded"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border text-white border-white px-4 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full border text-white border-white px-4 py-2 rounded"
        />
      </div>

      {/* Right Description */}
      <div className="flex-1 space-y-4">
        <textarea
          placeholder="Description"
          rows={8}
          className="w-full border border-white text-white px-4 py-2 rounded resize-none"
        />
        <input
          type="submit"
          value="Send Message"
          className="bg-white text-black px-6 py-2 rounded cursor-pointer hover:bg-black hover:text-white transition"
        />
      </div>
    </form>
  </div>
</section>
            <div className=" flex flex-row justify-center text-white gap-2 p-4">
              <div className="w-[100%] bg-white/10 p-[10px] backdrop-blur-md rounded-sm p-[30px flex flex-col justify-center ">
              <div className=" flex flex-col justify-center items-center gap-2">
                <p className='text-center text-4xl font-bold '>info</p>
                <div className='flex flex-col items-start gap-2'>
              <a href="">FRANCHISEE OPPORTUNITY</a>
              <a href="">ABOUT US</a>
              <a href="">PRIVACY POLICY & TERM & CONDITIONS </a>
                </div>
              </div>
              </div>
              <div className="w-[100%] bg-white/10 p-[10px] backdrop-blur-md rounded-sm p-[30px flex flex-col justify-center">
              <div className="text-4xl text-center font-bold">conatct us</div>
              <a href=""></a>
              <a href=""></a>
              
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
                   
                
                   </div>

  )
}

export default Contactus
