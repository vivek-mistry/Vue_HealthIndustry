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
                                <form v-on:submit="createDepartment" method="post">

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                
                                                <input type="text" class="form-control"  placeholder="Name">
                                            </div>

                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <textarea class="form-control"  placeholder="Description"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="radio" name="gender"  value="1"> Active
                                                <input type="radio" name="gender"  value="0"> Inactive
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
    
    // props: ['department'],
    // props:{
    //     department: {}
    // },
    // setup(props) {
    //     console.log(props)
    // },  
    data(){
        return{
            department_edit:{
                name: null,
                description: null,
                status : null
            }
        }
    },mounted() {
        // console.log(this.$router.query)
        // this.$emitt('department', (data) => {
        //     this.department = data;
        // })
         
    },
    // computed: {
    // item() {
    //     console.log(JSON.parse(this.$route.params.department)) 
    // }
    // },
    methods: {
        createDepartment(e){
            e.preventDefault();
            
            let result = axios.post("v1/department/store", this.department);
            this.$router.push( {name: 'DepartmentList'});
        },
        departmentEdit(emit){
            console.log(emit);
            this.department_edit = emit;

        }
    },
}
</script>

<style>

</style>