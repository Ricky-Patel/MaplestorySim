import EquipmentGrid from './components/EquipmentWindow/EquipmentGrid'

const mockEquipment = {
  ring1: null, ring2: null, ring3: null, ring4: null,
  belt: null, pocket: null,
  face: null, eye: null, earring: null,
  pendant1: null, pendant2: null,
  weapon: null, secondary: null, emblem: null,
  hat: null, top: null, bottom: null,
  shoulder: null, android: null,
  cape: { id: 1102140, name: "Arcane Umbra Knight Cape" },
  gloves: null, shoes: null, medal: null,
  heart: null, badge: null,
}

function App() {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <EquipmentGrid equipment={mockEquipment} />
    </div>
  )
}

export default App