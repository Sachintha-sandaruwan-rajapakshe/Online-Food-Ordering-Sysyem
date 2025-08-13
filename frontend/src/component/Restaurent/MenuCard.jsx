import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react'
import { CheckBox } from '@mui/icons-material';
import { categorizeIngredients } from '../Utility/CategorizeIngredients';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../State/Cart/Action';

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

const MenuCard = ({item}) => {

  const dispatch = useDispatch();
  const [selectedIngredients,setSelectedIngredients] = useState([]);

  const handleCheckBoxChange=(itemName)=>{
    console.log("value",{itemName});
    if(selectedIngredients.includes(itemName)){
      setSelectedIngredients(selectedIngredients.filter((item)=>item !== itemName));
    }else{
      setSelectedIngredients([...selectedIngredients,itemName])
    }
  }

  const handleAddItemToCart=(e)=>{
    e.preventDefault();
    const reqData ={
      token:localStorage.getItem('jwt'),
      cartItem:{
        foodId:item.id,
        quantity:1,
        ingredients:selectedIngredients.map(ing => ing.name)
      }
    }
    dispatch(addItemToCart(reqData));
    console.log('request Data :',reqData)
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
          src={item.images[0]} alt="" />
      </div>
      <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
        <p className='font-semibold text-xl'>{item.name}</p>
        <p>Rs.{item.price}</p>
        <p className='text-gray-400'>{item.description} </p>
      </div>

    </div>
  </AccordionSummary>
  <AccordionDetails>
    <form onSubmit={handleAddItemToCart}>
      <div className='flex gap-2 flex-wrap'>
        {
          Object.keys(categorizeIngredients(item.ingredients)).map((category)=>
            <div>
              <p>{category}</p>
              <FormGroup>
                {categorizeIngredients(item.ingredients)[category].map((item) => (
                  <FormControlLabel
                    key={item.name} 
                    required
                    control={<Checkbox />} 
                    label={item.name} 
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
