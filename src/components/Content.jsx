import React from 'react'
import iphone from '../images/iphone_red.png'; 
import mobile from '../images/mobile.png'; 
import android_mobile from '../images/samsung_mobile.jpg'; 
import men_clothes from '../images/men_clothes.png'; 

const Content = () => {
  return (
    <>
    <div className="mx-auto max-w-screen-lg">
  <main className="cursor-pointer grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
    
    {/* card1 */}

    <article className="relative">
      <div className="aspect-square overflow-hidden transition-all duration-700 hover:scale-110 ">
        <img
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
          src={iphone}
          alt=""
        />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div className="">
          <h3 className="text-xs font-semibold sm:text-sm md:text-base">
            <a href="" title="" className="">
              IPhone 14
              <span className="absolute" aria-hidden="true" />
            </a>
          </h3>
          <div className="mt-2 flex items-center">

          </div>
        </div>
        <div className="text-right">
          <p className="text-xs font-normal sm:text-sm md:text-base">&#8377;62,800</p>
        </div>
      </div>
    </article>

    {/* card2 */}

    <article className="relative">
      <div className="aspect-square overflow-hidden transition-all duration-700 hover:scale-110 ">
        <img
          className="h-full w-full object-cover  transition-all duration-300 group-hover:scale-125"
          src={android_mobile}
          alt=""
        />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div className="">
          <h3 className="text-xs font-semibold sm:text-sm md:text-base">
            <a href="" title="" className="">
               galaxy S 24
              <span className="absolute" aria-hidden="true" />
            </a>
          </h3>
          <div className="mt-2 flex items-center">
            
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs font-normal sm:text-sm md:text-base">&#8377;1,59,999</p>
        </div>
      </div>
    </article>

    {/* card3 */}

    <article className="relative">
      <div className="aspect-square overflow-hidden transition-all duration-700 hover:scale-110 ">
        <img
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
          src={mobile}
          alt=""
        />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div className="">
          <h3 className="text-xs font-semibold sm:text-sm md:text-base">
            <a href="" title="" className="">
              Nokia 8210
              <span className="absolute" aria-hidden="true" />
            </a>
          </h3>
          <div className="mt-2 flex items-center">
            
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs font-normal sm:text-sm md:text-base">&#8377;3,799</p>
        </div>
      </div>
    </article>

    {/* card4 */}

    <article className="relative">
      <div className="aspect-square overflow-hidden transition-all duration-700 hover:scale-110">
        <img
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
          src={men_clothes}
          alt=""
        />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div className="">
          <h3 className="text-xs font-semibold sm:text-sm md:text-base">
            <a href="" title="" className="">
              Mens Kurta
              <span className="absolute" aria-hidden="true" />
            </a>
          </h3>
          <div className="mt-2 flex items-center">
            
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs font-normal sm:text-sm md:text-base">&#8377;999</p>
        </div>
      </div>
    </article>

  </main>
</div>
    </>
  )
}

export default Content
