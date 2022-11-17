import axios from 'axios';

export const backend = 'http://localhost:1337/api'

export async function loadItem (category : any, Id : any, loadCommand : any, relation: any)
{
  if (Id===0) return
  else
  {
    try {
      const a = await axios.get(`${backend}/${category}/${Id}?populate=${relation}`)
      loadCommand(a.data.data)
    }
    catch (err) {
      console.log(err);
    }
  }
}
export const addNewItem = async (category : any, data : any) => {
  await axios.post(`${backend}/${category}`, data)
};
export const updateItem = async (category : any, Id : any, data : any) => {
  await axios.put(`${backend}/${category}/${Id}`, data)
};
export const deleteItem = async (category : any, Id : any) => {
  await axios.delete(`${backend}/${category}/${Id}`)
};
export async function loadLocation (type: any, id: any, loadCommand: any)
{
  await axios.get(`https://provinces.open-api.vn/api/${type}/${id}`)
  .then(({ data }) => loadCommand(data.name))
}
