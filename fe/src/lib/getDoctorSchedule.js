const getDoctorSchedule = async (doctorId) => {
  try {
    const response = await fetch(`https://mecharcovz-be.onrender.com/api/v1/schedule?medicId=${doctorId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${localStorage.getItem('token')}`,
    }      
  });
  const data = await response.json();
  const schedules = data.data?.schedulesFound;
  return schedules
} catch (error) {
  console.log(error);
}
}

export default getDoctorSchedule