import PersonIcon from './images/person-icon.svg'
import MasteryIcon from './images/mastery-icon.svg'

export const SideBarElements = [
  {
    icon: PersonIcon,
    label: 'Summoner Info',
    to: '/summoner/[summoner-name]/summoner-info',
  },
  {
    icon: MasteryIcon,
    label: 'Champions Mastery',
    to: '/summoner/[summoner-name]/champions-mastery',
  },
]
