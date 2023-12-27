import React, { FC } from 'react'

type Props = {}

const MainContent:FC<Props> = (props) => {
  return (
    <div className='w-full 1000px:flex items-center'>
        <div className='absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[50vh] w-[50vh] hero_animation '>
            <div className='1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10'>
                <h1>Image will come here</h1>
            </div>
            <div className='1000px:w-[60%] felx flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]'>
                <h2 className='dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[600px]'>
                    Improve Your Online Learning Experience Better Instantly
                </h2>
                <br/>
                <p className='dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500: !w-[55%] 1100px:!w-[78%]'>
                    We have 40k+ online courses & 500k+ Online registered student, Find your desired courses from them.
                </p>
                <br/>
                <br/> 
            </div>
        </div>
    </div>
  )
}