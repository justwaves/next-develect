import { motion, useAnimation, PanInfo } from 'framer-motion'
import { PropsWithChildren, useEffect, useRef } from 'react'

import { Portal, usePortal } from '../Portal'

interface BottomSheetProps extends PropsWithChildren {
  isOpen: boolean
  onClose: () => void
  title: string
}

export const BottomSheet = ({
  title,
  children,
  isOpen,
  onClose,
}: BottomSheetProps) => {
  const prevIsOpen = usePrevious(isOpen)
  const controls = useAnimation()

  const onDragEnd = (
    _event: MouseEvent | PointerEvent | TouchEvent,
    info: PanInfo
  ) => {
    if (info.velocity.y > 20) {
      controls.start('hidden').then(onClose)
    } else {
      controls.start('visible')
    }
  }

  useEffect(() => {
    if (isOpen) {
      controls.start('visible')
    } else {
      controls.start('hidden').then(onClose)
    }
  }, [controls, isOpen, onClose, prevIsOpen])

  const { container } = usePortal({
    type: 'modal',
    isOpen,
  })

  // TODO: scroll lock

  return (
    <Portal container={container}>
      <div className="relative h-0">
        <motion.div
          drag="y"
          onDragEnd={onDragEnd}
          animate={controls}
          transition={{
            type: 'spring',
            damping: 50,
            stiffness: 500,
          }}
          variants={{
            visible: { y: '-100%' },
            hidden: { y: 0 },
          }}
          dragElastic={0.2}
          className="relative z-50 w-full rounded-t-lg bg-white"
        >
          <header className="flex items-center justify-center  pb-5 pt-2">
            <div className="h-1 w-9 rounded-sm bg-[#E9EBEE]" />
          </header>
          <main className="px-6 pb-6">
            <h1 className="pb-6 text-[22px] font-bold leading-[32px] text-[#28323C]">
              {title}
            </h1>
            <div>{children}</div>
          </main>
        </motion.div>
        <motion.div
          animate={controls}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          onClick={() => {
            controls.start('hidden').then(onClose)
          }}
          className="fixed bottom-0 left-0 right-0 top-0 z-30 overflow-hidden bg-[rgba(22,29,36,0.5)]"
        />
      </div>
    </Portal>
  )
}

function usePrevious(value: boolean) {
  const previousValueRef = useRef<boolean>()

  useEffect(() => {
    previousValueRef.current = value
  }, [value])

  return previousValueRef.current
}
