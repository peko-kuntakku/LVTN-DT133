import axios from 'axios';

export const backend = 'http://localhost:1337/api'

export const loadList = async (category, loadCommand)=>
{
  await axios.get(`${backend}/${category}`)
  .then(({ data }) => loadCommand(data.data))
}

export const loadItem = async (category, Id, loadCommand)=>
{
  if (Id!=0)
  {
    await axios.get(`${backend}/${category}/${Id}`)
    .then(({ data }) => loadCommand(data.data))
  }
  else return
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