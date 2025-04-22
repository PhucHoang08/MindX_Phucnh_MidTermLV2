import React from 'react'

const Banner = ({ film }) => {
    return (
        <section className=' w-full bg-[#192026] px-20'>
            <h1 className='text-white text-[30px] font-bold'>Explore</h1>
            <h2 className='text-white mb-5'>What are you gonna watch today ?</h2>
            <div className='relative inset-0 '>
                <div class="rounded-[10px] absolute inset-0 bg-gradient-to-r from-black via-transparent via-80% to-transparent"></div>
                <img
                    className='object-fit w-full h-[400px] rounded-[10px] '
                    src={film.image}
                    alt="" />
                <div class="absolute inset-y-0 left-0 w-full flex flex-col justify-center pl-4 text-white">
                    <h1 className='text-white text-[50px] font-bold'>{film.movieName}</h1>
                    <p className='w-1/2 text-white'>{film.description}</p>
                </div>
            </div>
        </section>
    )
}

export default Banner
