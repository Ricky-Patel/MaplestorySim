import EquipmentSlot from './EquipmentSlot'

function EquipmentGrid({ equipment }) {
  return (
    <div className="grid gap-1" style={{
      gridTemplateColumns: 'repeat(7, 48px)',
      gridTemplateRows: 'repeat(6, 48px)',
    }}>
      {/* Column 1 - Rings, Belt, Pocket */}
      <EquipmentSlot slot="ring1"    item={equipment.ring1}    style={{ gridColumn: 1, gridRow: 1 }} />
      <EquipmentSlot slot="ring2"    item={equipment.ring2}    style={{ gridColumn: 1, gridRow: 2 }} />
      <EquipmentSlot slot="ring3"    item={equipment.ring3}    style={{ gridColumn: 1, gridRow: 3 }} />
      <EquipmentSlot slot="ring4"    item={equipment.ring4}    style={{ gridColumn: 1, gridRow: 4 }} />
      <EquipmentSlot slot="belt"     item={equipment.belt}     style={{ gridColumn: 1, gridRow: 5 }} />
      <EquipmentSlot slot="pocket"   item={equipment.pocket}   style={{ gridColumn: 1, gridRow: 6 }} />

      {/* Column 2 - Face, Eye, Earring, Pendants */}
      <EquipmentSlot slot="face"     item={equipment.face}     style={{ gridColumn: 2, gridRow: 1 }} />
      <EquipmentSlot slot="eye"      item={equipment.eye}      style={{ gridColumn: 2, gridRow: 2 }} />
      <EquipmentSlot slot="earring"  item={equipment.earring}  style={{ gridColumn: 2, gridRow: 3 }} />
      <EquipmentSlot slot="pendant1" item={equipment.pendant1} style={{ gridColumn: 2, gridRow: 4 }} />
      <EquipmentSlot slot="pendant2" item={equipment.pendant2} style={{ gridColumn: 2, gridRow: 5 }} />

      {/* Columns 3-5, Rows 1-4 - Character Preview */}
      <div style={{
        gridColumn: '3 / 6',
        gridRow: '1 / 5',
      }} className="bg-gray-800 border border-gray-600 flex items-center justify-center">
        <span className="text-gray-500 text-xs">Character Preview</span>
      </div>

      {/* Column 3-5, Row 5 - Weapon, Secondary, Emblem */}
      <EquipmentSlot slot="weapon"    item={equipment.weapon}    style={{ gridColumn: 3, gridRow: 5 }} />
      <EquipmentSlot slot="secondary" item={equipment.secondary} style={{ gridColumn: 4, gridRow: 5 }} />
      <EquipmentSlot slot="emblem"    item={equipment.emblem}    style={{ gridColumn: 5, gridRow: 5 }} />

      {/* Column 6 - Hat, Top, Bottom, Shoulder, Android */}
      <EquipmentSlot slot="hat"      item={equipment.hat}      style={{ gridColumn: 6, gridRow: 1 }} />
      <EquipmentSlot slot="top"      item={equipment.top}      style={{ gridColumn: 6, gridRow: 2 }} />
      <EquipmentSlot slot="bottom"   item={equipment.bottom}   style={{ gridColumn: 6, gridRow: 3 }} />
      <EquipmentSlot slot="shoulder" item={equipment.shoulder} style={{ gridColumn: 6, gridRow: 4 }} />
      <EquipmentSlot slot="android"  item={equipment.android}  style={{ gridColumn: 6, gridRow: 5 }} />

      {/* Column 7 - Cape, Gloves, Shoes, Medal, Heart, Badge */}
      <EquipmentSlot slot="cape"   item={equipment.cape}   style={{ gridColumn: 7, gridRow: 1 }} />
      <EquipmentSlot slot="gloves" item={equipment.gloves} style={{ gridColumn: 7, gridRow: 2 }} />
      <EquipmentSlot slot="shoes"  item={equipment.shoes}  style={{ gridColumn: 7, gridRow: 3 }} />
      <EquipmentSlot slot="medal"  item={equipment.medal}  style={{ gridColumn: 7, gridRow: 4 }} />
      <EquipmentSlot slot="heart"  item={equipment.heart}  style={{ gridColumn: 7, gridRow: 5 }} />
      <EquipmentSlot slot="badge"  item={equipment.badge}  style={{ gridColumn: 7, gridRow: 6 }} />
    </div>
  )
}

export default EquipmentGrid