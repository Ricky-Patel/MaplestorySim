import EquipmentSlot from './components/EquipmentWindow/EquipmentSlot'

const testCape = {
  id: 1102140,
  name: "Arcane Umbra Knight Cape",
}

function App() {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <div className="flex gap-2">
        <EquipmentSlot slot="cape" item={testCape} />
        <EquipmentSlot slot="hat" item={null} />
        <EquipmentSlot slot="weapon" item={null} />
      </div>
    </div>
  )
}

export default App