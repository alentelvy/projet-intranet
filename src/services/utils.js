export const getAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  } 

export const formatDate = (birthdate) => {
    const birthDate = new Date(birthdate)
    return birthDate.toLocaleDateString('fr', { day: "numeric", month:"long"})
}


export const filterAll = (data, val) => {
    const result = data.filter(item => {
      return JSON.stringify(item).toLowerCase().includes(val.toLowerCase())
    })
    //console.log(result)
    return result
  }

 export  const filterByService = (data, val) => {
    const result = data.filter(item => {
      return item.service.toLowerCase().includes(val.toLowerCase()) 
    })
    return result
  }

  export  const filterByPlace = (data, val) => {
    const result = data.filter((item) => {           
      return item.city.toLowerCase().includes(val.toLowerCase()) || item.country.toLowerCase().includes(val.toLowerCase())
    })
    return result
  }