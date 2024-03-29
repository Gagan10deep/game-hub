import {FaWindows, FaApple, FaXbox, FaPlaystation, FaAndroid, FaLinux} from 'react-icons/fa';
import { MdPhoneIphone} from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

import { Platform } from '../hooks/useGames'
import { HStack, Icon, Text, fadeConfig } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib';

interface Props {
    platforms: Platform[]
}

export const PlatformIcon = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
     pc: FaWindows, 
     playstation: FaPlaystation, 
     xbox: FaXbox,
     nintendo: SiNintendo, 
     mac: FaApple,
     linux: FaLinux, 
     ios: MdPhoneIphone, 
     web: BsGlobe, 
     android: FaAndroid
  }
  
  return (
    <HStack marginY={'10px'}>
       {platforms.map((platform) => 
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>)}
    </HStack>
  )
}

export default PlatformIcon;