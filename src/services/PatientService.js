
import axios from "axios";
export class PatientService{
    static getAll()
    {
        return axios.get("v1/patient/list").then(response => {
            // console.log("service", response.data);
            return response.data.data
        })
        // console.log(result);
    }

    static getById(id)
    {
        return axios.get("v1/patient/edit/"+id).then(response => {
            return response.data.data;
        });
    }

    static store(data)
    {
        return axios.post("v1/patient/store", data).then(response => {
            // console.log("service", response.data);
            return response.data.data
        })
    }

    static update(id, data)
    {
        return axios.put("v1/patient/update/"+id, data).then(response => {
            // console.log("service", response.data);
            return response.data.data
        })
    }
}