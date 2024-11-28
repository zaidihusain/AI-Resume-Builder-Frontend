import axios from "axios";


const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient=axios.create({
    baseURL:import.meta.env.VITE_BASE_URL+"/api/",
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})

const CreateNewResume=(data)=>axiosClient.post('/user-resumes',data);
const GetUserResumes=(userEmail)=>axiosClient.get('/user-resumes?filters[userEmail][$eq]='+userEmail);
const UpdateResumeDetail = (id, data) => {
    console.log("Updating resume with ID:", id);
    console.log("Payload:", JSON.stringify(data, null, 2));
    return axiosClient.put('/user-resumes/' + id, data)
        .then(response => {
            console.log("Response:", response.data);
            return response;
        })
       
};
const GetResumeById=(id)=>axiosClient.get('/user-resumes/'+id+"?populate=*");
const DeleteResumeById=(id)=>axiosClient.delete('/user-resumes/'+id)

// const UpdateResumeDetail=(id,data)=>axiosClient.put('/user-resumes/'+id,data);
// const UpdateResumeDetail = (id, data) => {
//     console.log("Updating resume with ID:", id);
//     console.log("Payload:", JSON.stringify(data, null, 2));
//     return axiosClient.put('/user-resumes/' + id, data)
//         .then(response => {
//             console.log("Response:", response.data);
//             return response;
//         })
       
// };

export default{
    CreateNewResume,
    GetUserResumes,
    GetResumeById,
    UpdateResumeDetail,
    DeleteResumeById
}