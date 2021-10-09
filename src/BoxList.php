<?php

include("main/top.php");

?>


<div class="ms-PanelExample">
    <div class="ms-Panel ms-Panel--xl" id="PanelBoxDetails">
        <button class="ms-Panel-closeButton ms-PanelAction-close">
            <i class="ms-Panel-closeIcon ms-Icon ms-Icon--Cancel"></i>
        </button>
        <div class="ms-Panel-contentInner">
            <p class="ms-Panel-headerText">Extra large panel</p>
            <div class="ms-Panel-content">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTableBoxListDetails" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>ProductId</th>
                                <th>ProductCode</th>
                                <th>Last Transaction</th>
                                <th class="quantity-text">Quantity</th>
                                <th>Description</th>

                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>ProductId</th>
                                <th>ProductCode</th>
                                <th>Last Transaction</th>
                                <th class="quantity-text">Quantity</th>
                                <th>Description</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Begin Page Content -->
<div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800"></h1>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Boxes List</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTableBoxList" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>BoxId</th>
                            <th>BoxCode</th>
                            <th>ProductId</th>
                            <th>ProductCode</th>
                            <th>Last Transaction</th>
                            <th class="quantity-text">Quantity</th>

                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>BoxId</th>
                            <th>BoxCode</th>
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
<script src="js/datatables-BoxList.js"></script>
<!-- /.container-fluid -->