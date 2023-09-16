<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Patient Add</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active">Patient Add</li>
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
                                <form v-on:submit="createPatient" method="post">

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" v-model="patient.first_name" placeholder="First Name">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" v-model="patient.last_name" placeholder="Last Name">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" v-model="patient.mobile_number" placeholder="Mobile Number">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" v-model="patient.aadhar_card_number" placeholder="Aadhar Card Number">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" v-model="patient.profile_picture" placeholder="Profile Picture">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="date" class="form-control" v-model="patient.date_of_birth" placeholder="Aadhar Card Number">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <select class="form-control" v-model="patient.blood_group" placeholder="Select Blood Group">
                                                    <option value="" selected>Select Blood Group</option>
                                                    <option value="A+">A+</option>
                                                    <option value="B+">B+</option>
                                                    <option value="A-">A-</option>
                                                    <option value="B-">B-</option>
                                                </select>
                                            </div>

                                        </div>
                                        
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="radio" name="gender" v-model="patient.gender" value="Male"> Male
                                                <input type="radio" name="gender" v-model="patient.gender" value="Female"> Female
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" v-model="patient.address" placeholder="Address">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="radio" name="status" v-model="patient.status" value="0"> Inactive
                                                <input type="radio" name="status" v-model="patient.status" value="1"> Active
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <!-- /.col -->
                                        <div class="col-8"></div>
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
import { PatientService } from '../../services/PatientService';
export default {
    name: 'PatientAdd',
    data(){
        return{
            patient:{
                first_name: null,
                last_name: null,
                mobile_number : null,
                aadhar_card_number: null,
                profile_picture:null,
                date_of_birth: null,
                blood_group:null,
                gender : null,
                address: null,
                status: null
            }
        }
    },
    methods: {
        createPatient(e){
            e.preventDefault();
            PatientService.store(this.patient);
            // let result = axios.post("v1/department/store", this.department);
            this.$router.push( {name: 'PatientList'});
        }
    },
}
</script>

<style>

</style>