import type { Itechnology } from '../types'
import React, { use, useState } from 'react'
import { toast } from 'react-toastify'
import YourStack from './YourStacks'
interface TechlogogyStackProps {
  TechlonogyStack: Promise<Itechnology[]>
}

const Techlonogies = ({TechlonogyStack}:TechlogogyStackProps) => {
  const Techlonogies = use(TechlonogyStack);
  const [stack, setStack] = useState<Itechnology[]>([]);

  const handleAdd = (tech: Itechnology) => {
    if (stack.some((t) => t.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  const handleRemove = (id: string) => {
    const removed = stack.find((t) => t.id === id)
    setStack((prev) => prev.filter((t) => t.id !== id))
    if (removed) {
      toast.info(`${removed.name} removed from your stack.`)
    }
  }

  const handleRemoveAll = () => {
    setStack([])
    toast.info('All technologies removed from your stack.')
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {Techlonogies.map((tech) => {
            const isAdded = stack.some((t) => t.id === tech.id)
            return (
              <div key={tech.id} className="relative bg-white rounded-lg shadow-md p-4">
                <span className="badge badge-secondary absolute top-3 right-3">{tech.badge}</span>
                <img src={tech.icon} alt={tech.name} className="w-full h-32 object-contain mb-4" />
                <h3 className="text-lg font-semibold">{tech.name}</h3>
                <p className="text-gray-600 mb-3">{tech.description}</p>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="badge badge-outline">{tech.category}</span>
                  <span className="badge badge-ghost">{tech.difficulty}</span>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <span className="text-yellow-400">★</span>
                  <span className="text-gray-700 font-medium">{tech.rating}</span>
                </div>

                <button className="btn btn-neutral w-full" disabled={isAdded} onClick={() => handleAdd(tech)}>
                  {isAdded ? '✓ Added to Stack' : 'Add To Stack'}
                </button>
              </div>
            )
          })}
        </div>
        <div className="w-full lg:w-80 shrink-0">
          <YourStack technologies={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
        </div>
      </div>
    </div>
  )
}

export default Techlonogies
