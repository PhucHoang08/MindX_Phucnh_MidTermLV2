import React from 'react'

const NewRelease = ({ films, onSelect }) => {
    return (
        <section className='w-full px-10 bg-[#192026]'>
            <h1 className='text-white text-[35px] font-bold px-10 pt-2'>New Release</h1>
            <div className='w-full h-[350px] flex flex-row bg-[#192026] justify-evenly items-center'>
                {films.map((film) => {
                    return (
                        <div className=' relative w-[180px] h-[300px] flex flex-col items-center cursor-pointer rounded-[30px]'
                            onClick={() => onSelect(film)}
                            key={film.id}>
                            <img
                                src={film.image}
                                alt=""
                                className=' rounded-[15px] w-full h-full absolute inset-0 object-cover'
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent via-100% to-transparent "></div>
                            <div className=' gap-4 absolute bottom-3 w-full flex flex-col items-center'>
                                <p className='text-white text-[15px]'>Episode: {film.episode}</p>
                                <h1 className='text-white text-center text-[10px] font-bold'>{film.movieName}</h1>
                            </div>

                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default NewRelease
