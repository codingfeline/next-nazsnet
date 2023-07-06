'use client'
// prettier-ignore
import { useState, Right, Left, Dot } from '@components'

const page = () => {
  const slides = [
    { url: '/1.jpg', desc: 'one' },
    { url: '/2.jpg', desc: 'two' },
    { url: '/3.jpg', desc: 'three' },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <Left onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <Right onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            {currentIndex === slideIndex ? (
              <>
                {/* <Dot className="text-blue-400" /> */}
                <div
                  style={{ backgroundImage: `url(${slides[slideIndex].url})` }}
                  className="w-[70px] h-[75px] mx-1 bg-cover delay-500"
                ></div>
              </>
            ) : (
              <>
                {/* <Dot className="hover:text-blue-400" /> */}
                <div
                  style={{ backgroundImage: `url(${slides[slideIndex].url})` }}
                  className="w-[70px] h-[70px] mx-1 bg-cover delay-500"
                ></div>
              </>
            )}
          </div>
        ))}
      </div>
      <p className="text-center">{slides[currentIndex].desc}</p>
    </div>
  )
}

export default page
