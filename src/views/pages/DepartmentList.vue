<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Department List</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active">Department List</li>
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
                                <!-- <h3 class="pull-left card-title">DataTable with minimal features & hover style</h3> -->
                                <span class="">
                                    <router-link :to="{ name: 'DepartmentAdd' }" class="pull-right btn btn-primary">ADD
                                        Department</router-link>
                                </span>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <table id="example2" class="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="department in department_list">
                                            <td>{{ department . name }}</td>
                                            <td>{{ department . description }}</td>
                                            <td>{{ department . status == 1 ? 'Active' : 'Inactive' }}</td>

                                            <td>
                                                <!-- <a @click="edit(department)">
                                                    Edit
                                                </a> |  -->
                                                <!-- <router-link :to="{ path: '/department/edit/'+ department.id}">Edit</router-link> -->
                                                <!-- <router-link ">Delete</router-link> -->
                                                <!-- <button
                                                    @click="$router.push({ name: 'DepartmentEdit', id: department.id })">Edit</button> -->
                                                <button class="btn btn-primary btn-sm" @click="edit(department.id)">Edit</button>
                                                <button class="btn btn-danger btn-sm" @click="remove(department.id)">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
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
    // import { bus } from '../main'
    export default {
        name: "DepartmentList",
        props: ['department'],
        data() {
            return {
                department_id: null,
                department_list: [],
                department: {},
            }
        },
        async mounted() {
            this.$forceUpdate();
            let result = await axios.get("v1/department/list");
            console.log(result);
            if (result.data.status) {
                this.department_list = result.data.data;
            }
        },
        methods: {
            edit(id) {
                // this.department = department
                this.$router.push( {name: 'DepartmentEdit', params:{'id' : id}});
            },
            remove(id){
                axios.delete("v1/department/remove/" + id);
                this.$router.push( {name: 'DepartmentList'});
            }
        },
    }
</script>

<style>

</style>
