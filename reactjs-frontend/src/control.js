import axios from 'axios';

export const backend = 'http://localhost:1337/api'

export const loadItem = async (category, Id, loadCommand, relation)=>
{
  if (Id===0) return
  else
  {
    await axios.get(`${backend}/${category}/${Id}?populate=${relation}`)
    .then(({ data }) => loadCommand(data.data))
  }
}
export const addNewItem = async (category, data) => {
  await axios.post(`${backend}/${category}`, data)
};
export const updateItem = async (category, Id, data) => {
  await axios.put(`${backend}/${category}/${Id}`, data)
};
export const deleteItem = async (category, Id) => {
  await axios.delete(`${backend}/${category}/${Id}`)
};
export const loadLocation = async (type, id, loadCommand)=>{
  await axios.get(`https://provinces.open-api.vn/api/${type}/${id}`)
  .then(({ data }) => loadCommand(data.name))
}
