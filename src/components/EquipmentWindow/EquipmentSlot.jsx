function EquipmentSlot({ slot, item }) {
  return (
    <div className="w-12 h-12 bg-gray-800 border border-gray-600 flex items-center justify-center cursor-pointer hover:border-yellow-400 transition-colors">
      {item ? (
        <img
          src={`https://maplestory.io/api/GMS/253/item/${item.id}/icon`}
          alt={item.name}
          className="w-10 h-10 object-contain"
        />
      ) : (
        <span className="text-gray-600 text-xs">{slot}</span>
      )}
    </div>
  )
}

export default EquipmentSlot