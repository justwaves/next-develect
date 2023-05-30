import { NextPage } from 'next'
import { useState } from 'react'

import { BottomSheet } from '@/shared/components/BottomSheet'

const TestPage: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div id="bottom-sheet-default">
      <h1>Test Page</h1>
      <button
        type="button"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        open
      </button>
      <BottomSheet
        title="대여지역"
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      >
        <div>content</div>
      </BottomSheet>
    </div>
  )
}

export default TestPage
