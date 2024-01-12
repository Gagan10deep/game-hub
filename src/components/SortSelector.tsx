import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarDown } from 'react-icons/bs'

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
     { value: '', label: 'Relevance' },
     { value: '-added', label: 'Data added' },
     { value: 'name', label: 'Name' },
     { value: '-released', label: 'Released Date' },
     { value: '-metacritic', label: 'Popularity' },
     { value: '-rating', label: 'Average Rating' },
  ];

  const currSortOrder = sortOrders.find(order => order.value === sortOrder )


  return (
    
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown/>} > 
            Order by: {currSortOrder?.label || 'Relevance'}
        </MenuButton>
        <MenuList>
            {sortOrders.map(order => 
            <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}
            </MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default SortSelector