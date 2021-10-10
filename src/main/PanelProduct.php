<div class="ms-PanelExample">
    <div class="ms-Panel ms-Panel--xl" id="PanelProductDetails">
        <button class="ms-Panel-closeButton ms-PanelAction-close">
            <i class="ms-Panel-closeIcon ms-Icon ms-Icon--Cancel"></i>
        </button>
        <div class="ms-Panel-contentInner">
            <p class="ms-Panel-headerText">Stock by box - Product (<span id="ProductCodeTitle"></span>)</p>
            <div class="ms-Panel-content">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTableProductListDetails" width="100%" cellspacing="0">
                        <thead>
                            <tr>

                                <th>Box Code</th>
                                <th>Last Transaction</th>
                                <th class="quantity-text">Quantity</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tfoot>
                            <tr>

                                <th>Box Code</th>
                                <th>Last Transaction</th>
                                <th class="quantity-text">Quantity</th>
                                <th></th>

                            </tr>
                        </tfoot>
                    </table>
                </div>

                <hr>
                <div id="transactions-by-box-panel">
                    <p class="ms-Panel-headerText">Transactions by box (<span id="BoxCodeProductTitle"></span>)</p>
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTableBoxListDetailsPanel" width="100%" cellspacing="0">
                            <thead>
                                <tr>

                                    <th>Product Code</th>
                                    <th>Last Transaction</th>
                                    <th class="quantity-text">Quantity</th>
                                    <th>Description</th>

                                </tr>
                            </thead>
                            <tfoot>
                                <tr>

                                    <th>Product Code</th>
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
</div>