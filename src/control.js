import axios from 'axios';

export const backend = 'http://localhost:1337/api'
export const ProvinceAPI = 'https://provinces.open-api.vn/api'

export const loadItem = async (category, Id, loadCommand)=>
{
  if (Id===0) return
  else
  {
    await axios.get(`${backend}/${category}/${Id}`)
    .then(({ data }) => loadCommand(data.data))
  }
}
export const addNewItem = async (m, category, data) => {
  await axios.post(`${backend}/${category}`, data)
};
export const updateItem = async (category, Id, data) => {
  await axios.put(`${backend}/${category}/${Id}`, data)
};
export const deleteItem = async (category, Id) => {
  await axios.delete(`${backend}/${category}/${Id}`)
};
export const loadLocation = async (type,loadCommand,Id,typename) =>
{
  console.log(`${ProvinceAPI}/${type}/${Id}${(Id=='') ? '' : '?depth=2'}`)
  axios.get(`${ProvinceAPI}/${type}/${Id}${(Id=='') ? '' : '?depth=2'}`)
  .then(({ data }) => {if (typename==null) loadCommand(data); else loadCommand(data[typename])})
}

