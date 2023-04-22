
import axios from "axios";
export class DepartmentService{
    static getAll()
    {
        return axios.get("v1/department/list").then(response => {
            // console.log("service", response.data);
            return response.data.data
        })
        // console.log(result);
    }

    static getById(id)
    {
        return axios.get("v1/department/edit/"+id).then(response => {
            return response.data.data;
        });
    }

    static store(data)
    {
        return axios.post("v1/department/store", data).then(response => {
            // console.log("service", response.data);
            return response.data.data
        })
    }

    static update(id, data)
    {
        return axios.put("v1/department/update/"+id, data).then(response => {
            // console.log("service", response.data);
            return response.data.data
        })
    }
}