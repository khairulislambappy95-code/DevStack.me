import { Suspense } from 'react'
import Techlonogies from './AllStacks'
import type { Itechnology } from '../types'

interface TechlogogyStackProps {
  TechlonogyStack: Promise<Itechnology[]>
}

export function Body({TechlonogyStack}:TechlogogyStackProps) {
  return (
    
    <main>
      <section>
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-4">Explore the <span className="bg-linear-to-r from-orange-400 via-pink-500 to-purple-800 inline-block text-transparent bg-clip-text">Technologies</span></h2>
          <p className="text-lg text-gray-600">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
      </section>
      <div>
        <Suspense fallback={<h2>Loading technologies...</h2>}>
          <Techlonogies TechlonogyStack={TechlonogyStack} />
        </Suspense>
      </div>
    </main>
  )
}
