import type { Itechnology } from '../types'
import { use, useState } from 'react'
import { toast } from 'react-toastify'
import YourStack from './YourStacks'
interface TechlogogyStackProps {
  TechlonogyStack: Promise<Itechnology[]>
}

const categoryBadgeColor: Record<string, string> = {
  Frontend: 'badge-info',
  Backend: 'badge-success',
  Database: 'badge-secondary',
  Language: 'badge-warning',
  Styling: 'badge-accent',
  DevOps: 'badge-neutral',
  Tools: 'badge-primary',
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
              <div key={tech.id} className="bg-white rounded-2xl shadow-md p-5">
                <div className="flex items-start justify-between mb-4">
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
                  <span className={`badge badge-sm ${categoryBadgeColor[tech.category] ?? 'badge-secondary'}`}>
                    {tech.badge}
                  </span>
                </div>

                <h3 className="text-lg font-semibold">{tech.name}</h3>
                <p className="text-gray-600 text-sm mt-1 mb-4">{tech.description}</p>

                <div className="flex items-center justify-between text-sm mb-4">
                  <span className={`badge badge-sm badge-outline ${categoryBadgeColor[tech.category] ?? ''}`}>
                    {tech.category}
                  </span>
                  <span className="text-gray-500">{tech.difficulty}</span>
                  <span className="flex items-center gap-1 text-gray-700 font-medium">
                    <span className="text-yellow-400">★</span>
                    {tech.rating}
                  </span>
                </div>

                <button
                  className="btn w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white border-none disabled:bg-slate-200 disabled:text-slate-400"
                  disabled={isAdded}
                  onClick={() => handleAdd(tech)}
                >
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
