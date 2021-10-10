<?php

include("main/top.php");

?>
<!-- Begin Page Content -->
<div class="container-fluid">
    <!-- Content Row -->
    <div class="row">

        <div class="col-xl-12 col-lg-12">

            <!-- Bar Chart -->
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Product Stocks</h6>
                </div>
                <div class="card-body">
                    <div class="chart-bar">
                        <canvas id="myBarChart"></canvas>
                    </div>
                   
                </div>
            </div>

        </div>

    </div>


</div>



<?php

include("main/bottom.php");

?>

<script src="js/demo/chart-bar-demo.js"></script>