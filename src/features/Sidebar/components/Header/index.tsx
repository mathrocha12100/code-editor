import { sidebarOption } from '@/atoms/sidebar'
import ButtonIcon from '@/components/ButtonIcon'
import { FileCode2, Search, ChevronLeft, Settings } from 'lucide-react'
import { useRecoilState } from 'recoil'

function Header() {
  const [option, setOption] = useRecoilState(sidebarOption)

  return (
    <div className="flex p-2">
      <ButtonIcon
        unselected={option !== 'explorer'}
        onClick={() => setOption('explorer')}
      >
        <FileCode2 className="h-7 w-7 text-red-primary" />
      </ButtonIcon>
      <ButtonIcon
        unselected={option !== 'search'}
        onClick={() => setOption('search')}
      >
        <Search className="h-7 w-7 text-red-primary" />
      </ButtonIcon>
      <ButtonIcon>
        <Settings className="h-7 w-7 text-red-primary" />
      </ButtonIcon>
      <ButtonIcon>
        <ChevronLeft className="h-7 w-7 text-red-primary" />
      </ButtonIcon>
    </div>
  )
}

export default Header
