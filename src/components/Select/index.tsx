type SelectOption = {
  label: string
  value: string | number
}

type SelectProps = {
  options: SelectOption[]
  onChange: (newOption: SelectOption) => void
}

function Select({ onChange, options }: SelectProps) {
  return (
    <select className="bg-primary p-1 text-editor-primary rounded-md outline-none cursor-pointer border-1 border-tertiary pr-3">
      {options.map(({ label, value }, i) => (
        <option
          className="text-editor-primary"
          key={`${value}-${i}`}
          onClick={() => onChange({ label, value })}
        >
          {label}
        </option>
      ))}
    </select>
  )
}

export default Select
