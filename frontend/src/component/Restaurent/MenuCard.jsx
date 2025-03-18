import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { CheckBox } from '@mui/icons-material';

const demo=[
  {
    category:'Nuts & seeds',
    ingredients:['Cashews']
  },
  {
    category:'Protein',
    ingredients:['Ground beef','Bacon strips']
  }

]

const MenuCard = () => {
  const handleCheckBoxChange=(value)=>{
    console.log("value"+{value});
  }
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
    <form>
      <div className='flex gap-2 flex-wrap'>
        {
          demo.map((item)=>
            <div>
              <p>{item.category}</p>
              <FormGroup>
                {item.ingredients.map((ingredient, index) => (
                  <FormControlLabel
                    key={index} // Ensuring a unique key for each item
                    required
                    control={<Checkbox />} // Using Checkbox from '@mui/material'
                    label={ingredient} // Use 'ingredient' instead of 'item'
                    onChange={()=>handleCheckBoxChange(item)}
                  />
                ))}
              </FormGroup>

            </div>
          )
        }
      </div>
      <div className='pt-5'>
        <Button type='submit' variant='contained' disabled={false}>{true?"Add To Cart":"Out Of Stoke"}</Button>
      </div>
    </form>
  </AccordionDetails>
</Accordion>

    </div>
  )
}

export default MenuCard
