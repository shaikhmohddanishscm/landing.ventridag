import React from 'react'
import { MacbookScroll } from './ui/MacbookScroll'

const DashboardShowcase = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-8 sm:py-12 md:py-16">
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
