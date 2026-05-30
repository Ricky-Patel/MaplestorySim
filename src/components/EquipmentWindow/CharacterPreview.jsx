function CharacterPreview() {
  return (
    <div
      style={{ gridColumn: '3 / 6', gridRow: '1 / 5' }}
      className="bg-gray-800 border border-gray-600 flex items-center justify-center overflow-hidden"
    >
      <img
        src="https://cdn.maplebot.io/images/180/1809940_288312c7.png"
        alt="YamaRen"
        className="object-contain h-full"
      />
    </div>
  )
}

export default CharacterPreview