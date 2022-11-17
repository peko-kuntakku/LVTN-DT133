import { TextField, Typography, Autocomplete, createFilterOptions, Stack, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Box, { BoxProps } from '@mui/material/Box';

export function NumberField ({label, placeholder, required, disabled, value, 
                              setValue, pre, post, min, max, step, comment1}: any)
{
  if (step==null) step =1
  let error : boolean = false
  if (((value!='')&&(value!=undefined))&&(value<min||value>max||((value*1000)%(step*1000)!=0))) error = true
  else error = false
  const printError = () =>
  {
    if (disabled)
    {
      return comment1
    }
    else
    {
      if ((value!='')&&(value!=undefined))
      {
        if (value<min) return ("Giá trị phải lớn hơn " + min)
        else if (value>max) return ("Giá trị phải nhỏ hơn " + max)
        else if ((value*100)%(step*100)!=0) 
        {
          if (step==1) return ("Vui lòng nhập số nguyên")
          else return ("Giá trị phải chia hết cho "+step)
        }
        else
        {
          if (max==undefined) return ("Nhập số nguyên lớn hơn "+min)
          else return ("Nhập số nguyên từ "+min+" đến "+max)
        }
      }
      else 
      {
        if (step==1) 
        {
          if (max==undefined) return ("Nhập số nguyên lớn hơn "+min)
          else return ("Nhập số nguyên từ "+min+" đến "+max)
        }
        else 
        {
          if (max==undefined) return ("Nhập số nguyên lớn hơn "+min+" và là bội của "+step)
          else return ("Nhập số từ "+min+" đến "+max+" và là bội của "+step)
        }
      }
    }    
  }
  return(
    <TextField
      disabled={disabled}
      required={required}
      sx={{m: '25px 1.5%', width: '47%'}}
      label={label}
      placeholder={placeholder}
      inputProps={{ min, max, step}}
      error={error}
      type="number"
      InputLabelProps={{shrink: true}}
      helperText={printError()}
      value={value}
      onChange={(e: any) => 
      {
        if (e.target.value=='') setValue(e.target.value)
        else setValue(Number(e.target.value))
      }}
      InputProps={{
        startAdornment: <InputAdornment position="start">{pre}</InputAdornment>,
        endAdornment: <InputAdornment position="end">{post}</InputAdornment>,
      }}
    />
  )
}
export function NameField ({label, placeholder, required, value, setValue, min, max}: any)
{
  return(
    <TextField
      required={required}
      sx={{m: '25px 1.5%', width: '97%'}}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      inputProps={{ minLength: min, maxLength: max}}
    />
  )
}
export function Choice ({list, label, required, value, handleValue}: any)
{
  return(
    <FormControl sx={{m: '25px 1.5%', width: '47%'}}>
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        id={label}
        required={required}
        value={value}
        label={label}
        onChange={(e: any) => handleValue(e)}
      >
      {list.map(({text, value}: any) => <MenuItem value={value}>{text}</MenuItem>)}
      </Select>
    </FormControl>
  )
}
export function Dropdown ({label, required, list, value, handleValue, min, max}: any)
{
  const filterOptions = createFilterOptions({
    stringify: (option: any) => option.attributes.Building_Name,
  });
  return(
    <Autocomplete
      sx={{m: '25px 1.5%', width: '47%'}}
      options={list}
      getOptionLabel={(option: any) => '(' + (option.id) + ') ' + (option.attributes.Building_Name)}
      filterOptions={filterOptions}
      value={value}
      onChange={(e, val) => handleValue(val)}
      placeholder="Nhập văn bản"
      renderInput=
      {(params) => <TextField {...params} 
        label={label}
        placeholder={label}
        inputProps={{
          ...params.inputProps,
          autoComplete: 'new-password'
        }}/>
      }
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <Typography variant="body1" color="red">{option.id + ' : '}</Typography>
          <Typography variant="body1">{"   "+option.attributes.Building_Name}</Typography>
        </Box>
      )}
    />
  )
}
