import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const MenuCard = () => {
  return (
    <div>
     <Accordion slotProps={{ heading: { component: 'h4' } }}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1-content"
    id="panel1-header"
  >
    <div className='lg:flex items-center justify-bitween'>
      <div className='lg:flex items-center lg:gap-5'>
        <img className='w-[7rem] h-[7rem] object-cover'
          src="https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_640.jpg" alt="" />
      </div>
      <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
        <p className='font-semibold text-xl'>Fish Deval</p>
        <p>Rs.590.00</p>
        <p className='text-gray-400'>Nice food </p>
      </div>

    </div>
  </AccordionSummary>
  <AccordionDetails>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
    lacus ex, sit amet blandit leo lobortis eget.
  </AccordionDetails>
</Accordion>

    </div>
  )
}

export default MenuCard
