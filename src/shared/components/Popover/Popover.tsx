import tw from 'twin.macro'

import { Portal, usePortal } from '@/shared/components/Portal'
import { useElementRect } from '@/shared/hooks/useElementRect'
import { useWindowSize } from '@/shared/hooks/useWindowSize'

type Placement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

interface PopoverProps {
  children: React.ReactNode
  triggerElement: HTMLElement | null
  isOpen: boolean
  closePopover: () => void
  placement?: Placement
  gap?: number
}

export const Popover = ({
  children,
  triggerElement,
  isOpen,
  closePopover,
  placement = 'bottomLeft',
  gap = 8,
}: PopoverProps) => {
  const { container, contentRef } = usePortal({
    type: 'popover',
    isOpen,
    closePortal: closePopover,
    triggerElement,
  })
  const { elementRect } = useElementRect(triggerElement)

  return (
    <Portal container={container}>
      <div ref={contentRef} css={popoverStyle({ placement, elementRect, gap })}>
        {children}
      </div>
    </Portal>
  )
}

interface StyledPopoverProps {
  placement: Placement
  elementRect: DOMRect | null
  gap: number
}

const popoverStyle = ({ placement, elementRect, gap }: StyledPopoverProps) => [
  tw`absolute bg-white border border-gray-100 shadow-sm rounded-2xl`,
  () => {
    const { windowWidth, windowHeight } = useWindowSize()
    if (!elementRect) return null

    const { top, bottom, left, right } = elementRect

    const placementStyle = {
      bottomLeft: {
        top: bottom + gap,
        left,
      },
      bottomRight: {
        top: bottom + gap,
        right: windowWidth - right,
      },
      topLeft: {
        bottom: windowHeight - top + gap,
        left,
      },
      topRight: {
        bottom: windowHeight - top + gap,
        right: windowWidth - right,
      },
    }

    return placementStyle[placement]
  },
]
