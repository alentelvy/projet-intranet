import instance from "../services/instance";

//Get data
export const getData = async (param) => {
  const res = await instance.get(param);
  return res.data;
};

//Put data
export const putData = async (param, values) => {
  const res = await instance.put(param, values);
  console.log(res)
  return res.data;
};

//Post data
export const postData = async (param, values) => {
    const res = await instance.post(param, values)
    console.log(res)
    return res.data;
};

//Delete data
export const deleteData = async (param) => {
  console.log(param)
  const res = await instance.delete(param)
  console.log(res)
  return res.data;
};