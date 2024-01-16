import Select from '@/components/Select'
import {} from 'lucide-react'

function ConfigTheme() {
  return (
    <div>
      <Select
        onChange={() => 0}
        options={[
          { label: 'test1', value: '1' },
          { label: 'test2', value: '2' },
        ]}
      />
      <div>CURRENT THEME</div>
      <div>CONTENT</div>
    </div>
  )
}

export default ConfigTheme
