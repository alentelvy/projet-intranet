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