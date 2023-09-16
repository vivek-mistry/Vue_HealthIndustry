<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Patient List</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active">Patient List</li>
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
                                    <router-link :to="{ name: 'PatientAdd' }" class="pull-right btn btn-primary">ADD Patient</router-link>
                                </span>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <table id="example2" class="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Mobile Number</th>
                                            <th>Aadhar Card</th>
                                            <th>Date Of Birth</th>
                                            <th>Blood Group</th>
                                            <th>Gender</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="patient in patient_list">
                                            <td>{{ patient.first_name+ ' ' + patient.last_name }}</td>
                                            <td>{{ patient.mobile_number }}</td>
                                            <td>{{ patient.aadhar_card_number }}</td>
                                            <td>{{ patient.date_of_birth }}</td>
                                            <td>{{ patient.blood_group }}</td>
                                            <td>{{ patient.gender }}</td>
                                            <td>{{ patient.status == 1 ? "Active" : "Inactive"  }}</td>
                                            <td>Edit | Delete</td>
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
    import {PatientService} from '@/services/PatientService'
    export default {
        name: "PatientList",
        data()
        {
            return{
                patient_list : {}
            }
        },
        mounted() {
            PatientService.getAll().then(response => {
                this.patient_list = response;
            });
            console.log(this.patient_list);
        },
        methods: {
            
        },
    }
</script>

<style>

</style>
