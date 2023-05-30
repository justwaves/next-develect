import classNames from 'classnames'
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
  InputHTMLAttributes,
  useRef,
} from 'react'

interface SliderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  min?: number
  max?: number
}

export const Slider = ({ min = 10, max = 500 }: SliderProps) => {
  const [minValue, setMinValue] = useState(min)
  const [maxValue, setMaxValue] = useState(max)

  const handleMinChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const targetValue = Number(event.target.value)
      if (targetValue <= maxValue) {
        setMinValue(targetValue)
      }
    },
    [maxValue]
  )

  const handleMaxChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const targetValue = Number(event.target.value)
      if (targetValue >= minValue) {
        setMaxValue(targetValue)
      }
    },
    [minValue]
  )

  const fromSliderRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!fromSliderRef?.current) return

    const rangeDistance = max - min
    const fromPosition = minValue - min
    const toPosition = maxValue - min

    fromSliderRef.current.style.background = `
      linear-gradient(
        to right, 
        #E9EBEE 0%,
        #E9EBEE ${(fromPosition / rangeDistance) * 100}%,
        #00B0FF ${(fromPosition / rangeDistance) * 100}%,
        #00B0FF ${(toPosition / rangeDistance) * 100}%,
        #E9EBEE ${(toPosition / rangeDistance) * 100}%,
        #E9EBEE 100%
      )
    `
  }, [max, min, minValue, maxValue])

  return (
    <div className="relative">
      <label
        htmlFor="fromSlider"
        className="mb-[26px] block text-[18px] font-semibold leading-[24px] text-[#00B0FF]"
      >
        {minValue}만원 ~ {maxValue}만원
      </label>
      <input
        id="fromSlider"
        type="range"
        value={minValue}
        onChange={handleMinChange}
        min={min}
        max={max}
        step={10}
        className={classNames(
          'pointer-events-none absolute z-10 h-0 w-full cursor-pointer appearance-none',
          '[&::-webkit-slider-thumb]:appearance-none',
          '[&::-webkit-slider-thumb]:pointer-events-auto',
          '[&::-webkit-slider-thumb]:h-6',
          '[&::-webkit-slider-thumb]:w-6',
          '[&::-webkit-slider-thumb]:rounded-full',
          '[&::-webkit-slider-thumb]:shadow-[0px_2px_8px_rgba(40,50,60,0.1)]',
          '[&::-webkit-slider-thumb]:cursor-pointer',
          '[&::-webkit-slider-thumb]:border-[1px]',
          '[&::-webkit-slider-thumb]:border-[#e9ebee]',
          '[&::-webkit-slider-thumb]:border-solid',
          '[&::-webkit-slider-thumb]:bg-white',
          '[&::-webkit-slider-thumb]:translate-y-[2px]'
        )}
      />
      <input
        ref={fromSliderRef}
        id="toSlider"
        type="range"
        value={maxValue}
        onChange={handleMaxChange}
        min={min}
        max={max}
        step={10}
        className={classNames(
          'pointer-events-none absolute h-1 w-full cursor-pointer appearance-none',
          '[&::-webkit-slider-thumb]:appearance-none',
          '[&::-webkit-slider-thumb]:pointer-events-auto',
          '[&::-webkit-slider-thumb]:h-6',
          '[&::-webkit-slider-thumb]:w-6',
          '[&::-webkit-slider-thumb]:rounded-full',
          '[&::-webkit-slider-thumb]:shadow-[0px_2px_8px_rgba(40,50,60,0.1)]',
          '[&::-webkit-slider-thumb]:cursor-pointer',
          '[&::-webkit-slider-thumb]:border-[1px]',
          '[&::-webkit-slider-thumb]:border-[#e9ebee]',
          '[&::-webkit-slider-thumb]:border-solid',
          '[&::-webkit-slider-thumb]:bg-white'
        )}
      />
    </div>
  )
}
