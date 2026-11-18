import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { islands } from '../../data/portfolio'

export function OceanMap() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(islands[2].id)
  const selectedIsland = islands.find((item) => item.id === selected) ?? islands[2]

  const visit = (id: string, route: string) => {
    setSelected(id)
    window.setTimeout(() => navigate(route), 280)
  }

  return (
    <div className="map-frame">
      <div className="map-toolbar"><span>Interactive chart · 7 destinations</span><span>Drag-free navigation</span></div>
      <div className="ocean-map" role="group" aria-label="Portfolio destinations">
        <div className="map-grid" />
        <div className="current current-a" /><div className="current current-b" /><div className="current current-c" />
        <div className="route-line" aria-hidden="true" />
        <div className="navigator" style={{ left: `${selectedIsland.position.x + 3}%`, top: `${selectedIsland.position.y + 11}%` }} aria-hidden="true">
          <span className="boat-sail">◢</span><span className="boat-body" />
        </div>
        {islands.map((island, index) => (
          <button
            key={island.id}
            className={`island island-${island.size} island-${index + 1} ${selected === island.id ? 'selected' : ''}`}
            style={{ left: `${island.position.x}%`, top: `${island.position.y}%` }}
            onClick={() => visit(island.id, island.route)}
            onFocus={() => setSelected(island.id)}
            aria-label={`Explore ${island.name}: ${island.subtitle}`}
          >
            <span className="island-shape"><span className="island-icon">{island.icon}</span><i /><b /></span>
            <span className="island-label"><strong>{island.name}</strong><small>{island.subtitle}</small></span>
          </button>
        ))}
        <div className="map-legend"><span>NW</span><i /><span>SE</span></div>
      </div>
    </div>
  )
}
