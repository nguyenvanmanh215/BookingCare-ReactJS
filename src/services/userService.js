import axios from '../axios'
const handleLoginApi = (userEmail, userPassword) => {
  return axios.post('/api/login', { email: userEmail, password: userPassword })
}
const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`)
}
const createNewUserService = (data) => {
  return axios.post('/api/create-new-user', data)
}
const deleteUserService = (userId) => {
  return axios.delete('/api/delete-user', { data: { id: userId } })
}
const editUserService = (inputData) => {
  return axios.put('/api/edit-user', inputData)
}
const getAllCodeService = (inputdata) => {
  return axios.get(`/api/allcode?type=${inputdata}`)
}
const getTopDoctorHomeService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`)
}
const getAllDoctors = () => {
  return axios.get('/api/get-all-doctors')
}
const saveDetailDoctorService = (data) => {
  return axios.post('/api/save-infor-doctors', data)
}
const getDetailInforDoctor = (inputId) => {
  return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`)
}
const saveBulkScheduleDoctor = (data) => {
  return axios.post('/api/bulk-create-schedule', data)
}
const getScheduleDoctorByDate = (doctorId, date) => {
  return axios.get(
    `/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`,
  )
}
const getExtraInforDoctorById = (doctorId) => {
  return axios.get(`/api/get-extra-infor-doctor-by-id?doctorId=${doctorId}`)
}

export {
  handleLoginApi,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
  getAllCodeService,
  getTopDoctorHomeService,
  getAllDoctors,
  saveDetailDoctorService,
  getDetailInforDoctor,
  saveBulkScheduleDoctor,
  getScheduleDoctorByDate,
  getExtraInforDoctorById,
}