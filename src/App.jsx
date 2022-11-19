import { useState } from 'react'
import './App.css'
import { Box, Input, ServerStyleSheets, Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';

function App() {
  const [count, setCount] = useState([]);
  const [counts, setCounts] = useState("");
  const [checked, setChecked] = useState([0]);
  const [line, setline] = useState(false);
  
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
  

    setChecked(newChecked);
    console.log(currentIndex);
  };
  
  const changes=(e)=>{
    setCounts(e.target.value);
    console.log(e.target.value)
  }

  const change=()=>{
  setCount((count)=>[...count,counts])
  setCounts("")
}
console.log(count)
const deletedo=(id)=>{
  setCount((count)=>count.filter((val,index)=>{
    return index !== id
  }))
}


  return (
    <>
    <Box className='head'>
    <Typography  style={{fontSize:60}}>To Do List</Typography>
    </Box>
    <Box className='box'>
    <Box>
<Input style={{width: 300,fontSize:40}}  placeholder="Enter Task" value={counts} onChange={(e)=>changes(e)}/>
<Fab size="large" color="secondary" >
  <AddIcon onClick={change}/>
</Fab></Box>
<List className='list'>
    {count.map((value,index)=>{return (<>
    <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox 
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': value }}
              /></ListItemIcon>
      <ListItemText style={{textDecoration: line?"line-through":"none"}} primary={value} />
<DeleteIcon onClick={()=>(deletedo(index))}/>
   
</ListItem>
    </>)}
)}</List>
</Box>
</>
  )
}

export default App
