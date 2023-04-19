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
                                <form action="../../index3.html" method="post">

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="First Name">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Last Name">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Email">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Password">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Designation">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Department">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Address">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Specialist">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Mobile Number">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control"
                                                    placeholder="Short Biography">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Date of birth">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Blood Group">
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <input type="radio" name="gender" value="Male"> Male
                                                <input type="radio" name="gender" value="Female"> Female
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
export default {
    name: 'PatientAdd'
}
</script>

<style>

</style>