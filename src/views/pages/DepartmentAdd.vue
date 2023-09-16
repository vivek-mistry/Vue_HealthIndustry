<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Department Add</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active">Department Add</li>
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
                            <div class="card-header">
                                <!-- <h3 class="card-title">DataTable with minimal features & hover style</h3> -->
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <form v-on:submit="createDepartment" method="post">

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" v-model="department.name" placeholder="Name">
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
import { DepartmentService } from '../../services/DepartmentService';
export default {
    name: "DepartmentAdd",
    data(){
        return{
            department:{
                name: null,
                description: null,
                status : null
            }
        }
    },
    methods: {
        createDepartment(e){
            e.preventDefault();
            DepartmentService.store(this.department);
            // let result = axios.post("v1/department/store", this.department);
            this.$router.push( {name: 'DepartmentList'});
        }
    },
}
</script>

<style>

</style>