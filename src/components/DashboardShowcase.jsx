import React from 'react'
import { MacbookScroll } from './ui/MacbookScroll'

const DashboardShowcase = () => {
  return (
    <div className="w-full overflow-hidden bg-black">
      <MacbookScroll
        src="/B.jpeg"
        showGradient={false}
        title={
          <span>
            Experience VentriDAG's powerful platform <br />
            <span className="text-primary-500">in real-time</span>
          </span>
        }
      />
    </div>
  )
}

export default DashboardShowcase
