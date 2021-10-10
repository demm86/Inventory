<?php

include("main/top.php");

?>




<!-- Begin Page Content -->
<div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800"></h1>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Product List</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTableProducts" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>ProductId</th>
                            <th>ProductCode</th>
                            <th>Last Transaction</th>
                            <th class="quantity-text">Quantity</th>

                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>ProductId</th>
                            <th>ProductCode</th>
                            <th>Last Transaction</th>
                            <th class="quantity-text">Quantity</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>

</div>



<?php

include("main/bottom.php");

?>

<!-- Page level custom scripts -->
<script src="js/datatables-productList.js"></script>
<!-- /.container-fluid -->