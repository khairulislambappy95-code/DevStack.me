import type { Itechnology } from "../types";

interface YourStackProps {
  technologies: Itechnology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export default function YourStack({ technologies, onRemove, onRemoveAll }: YourStackProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-3xl font-bold mb-2">Your Stack</h2>
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-600">{technologies.length} Technology Selected</p>
        {technologies.length > 0 && (
          <button className="btn btn-sm btn-ghost" onClick={onRemoveAll}>
            Remove All
          </button>
        )}
      </div>

      {technologies.length === 0 ? (
        <p className="text-gray-500">Your stack is empty. Add technologies from the list to build it.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {technologies.map((tech) => (
            <li key={tech.id} className="flex items-center justify-between gap-3 border-b pb-2">
              <div className="flex items-center gap-3">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                <div>
                  <p className="font-semibold">{tech.name}</p>
                  <p className="text-sm text-gray-500">{tech.category}</p>
                </div>
              </div>
              <button
                className="text-gray-400 hover:text-red-500"
                aria-label={`Remove ${tech.name}`}
                onClick={() => onRemove(tech.id)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
