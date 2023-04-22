<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Department Update</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active">Department Update</li>
                        </ol>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header" @department_edit_data = "departmentEdit">
                                <h3 class="card-title">DataTable with minimal features & hover style</h3>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <form v-on:submit="updateDepartment" method="post">

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                
                                                <input type="text" class="form-control" v-model="department.name"  placeholder="Name">
                                            </div>

                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <textarea class="form-control" v-model="department.description" placeholder="Description"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="radio" name="gender" v-model="department.status" value="1"> Active
                                                <input type="radio" name="gender" v-model="department.status" value="0"> Inactive
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <!-- /.col -->
                                        
                                        <div class="col-4">
                                            <button type="submit" class="btn btn-primary btn-block">ADD</button>
                                        </div>
                                        <!-- /.col -->
                                    </div>
                                </form>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->


                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
import axios from "axios"; 

export default {
    name: "DepartmentEdit",
    data(){
        return{
            department:{
                name: null,
                description: null,
                status : null
            }
        }
    },
    async mounted() {
        console.log(console.log(this.$route.params.id))
        
         this.departmentEdit();
    },
    methods: {
        updateDepartment(e){
            e.preventDefault();
            
            let result = axios.put("v1/department/update/"+this.department.id, this.department);
            this.$router.push( {name: 'DepartmentList'});
        },
        async departmentEdit(){
            let response = await axios.get("v1/department/edit/"+this.$route.params.id);
            console.log("this.department", response);
            this.department = response.data.data;
        }
    },
}
</script>

<style>

</style>