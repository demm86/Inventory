

var PanelProductDetails;

$(document).ready(function () {

  PanelProductDetails = document.querySelector("#PanelProductDetails");

  vrMainTable = $('#dataTableProducts').DataTable({
    mark: true,
    ajax: {
      url: "api/productList.php", dataSrc: ""
    },
    dom: 'Bfrtip',
    buttons: [
      {
        extend: 'pdf',
        footer: true,
        exportOptions: {
          columns: [1, 2, 3]
        }
      },
      {
        extend: 'csv',
        footer: false,
        exportOptions: {
          columns: [1, 2, 3]
        }
      },
      {
        extend: 'excel',
        footer: false,
        exportOptions: {
          columns: [1, 2, 3]
        }
      }
    ],
    columns: [
      {
        data: "ProductId",
        name: "ProductId",
        render: function (data, type, row) {
          return '<p>' + row.ProductId + '</p> ';
        },
        visible: false
      },
      {
        data: "ProductCode",
        name: "ProductCode",
        render: function (data, type, row) {
          return '<p>' + row.ProductCode + '</p> ';
        },
        visible: true
      }, {
        data: "lastTransaction",
        name: "lastTransaction",
        render: function (data, type, row) {
          return '<p>' + row.LastTransaction.date + '</p> ';
        },
        visible: true
      }, {
        data: "Quantity",
        name: "Quantity",
        render: function (data, type, row) {
          return '<p style="text-align:right;"><a class="table-link-documents-data">' + row.Quantity + '</a></p>';
        },
        visible: true
      }




    ]

  });


  $('#dataTableProducts tbody').on('click', '.table-link-documents-data', function () {
    var row = vrMainTable.row($(this).parents('tr')).data();
    $("#transactions-by-box-panel").hide()
    LoadProductDeails(row["ProductId"]);
  });



});


function LoadProductDeails(ProductId) {
  
  PanelProductDetailsTmp = new fabric['Panel'](PanelProductDetails);
  $("#transactions-by-box-panel").hide();
  vrMainTableProductDetails = $('#dataTableProductListDetails').DataTable({
    mark: true,
    destroy: true,
    ajax: {
      url: "api/productListDetails.php?ProductId=" + ProductId,
      dataSrc: ""
    },
    dom: 'Bfrtip',
    buttons: [
      {
        extend: 'pdf',
        footer: true,
        exportOptions: {
          columns: [0, 1, 2]
        }
      },
      {
        extend: 'csv',
        footer: false,
        exportOptions: {
          columns: [0, 1, 2]
        }
      },
      {
        extend: 'excel',
        footer: false,
        exportOptions: {
          columns: [0, 1, 2]
        }
      }
    ],
    columns: [

      {
        data: "BoxCode",
        name: "BoxCode",
        render: function (data, type, row) {
          return '<p>' + row.BoxCode + '</p> ';
        },
        visible: true
      },

      {
        data: "LastTransaction",
        name: "LastTransaction",
        render: function (data, type, row) {
          return '<p>' + moment(row.LastTransaction.date).format('YYYY-MM-DD HH:MM:SS') + '</p> ';
        },
        visible: true
      }
      , {
        data: "Quantity",
        name: "Quantity",
        render: function (data, type, row) {
          return '<p class="quantity-text table-link-documents-data">' + row.Quantity + '</p>';
        },
        visible: true
      }, {
        "className": 'details-control',
        "orderable": false,
        "data": null,
        "defaultContent": ''
      }
    ]

  });


  $('#dataTableProductListDetails tbody').on('click', 'td.details-control', function () {

    var tr = $(this).closest('tr');
    var row = vrMainTableProductDetails.row(tr);

    console.log(row.data()["BoxId"]+'-'+row.data()["ProductId"]);
    LoadBoxDeails(row.data()["BoxId"],row.data()["ProductId"])

  });



}


function LoadBoxDeails(BoxId, ProductId) {
  
  $("#transactions-by-box-panel").show()
  vrMainTableDetails = $('#dataTableBoxListDetails').DataTable({
    mark: true,
    destroy: true,
    ajax: {
      url: "api/boxListDetails.php?BoxId=" + BoxId + "&ProductId=" + ProductId,
      dataSrc: ""
    },
    dom: 'Bfrtip',
    buttons: [
      {
        extend: 'pdf',
        footer: true,
        exportOptions: {
          columns: [1, 3, 4, 5]
        }
      },
      {
        extend: 'csv',
        footer: false,
        exportOptions: {
          columns: [1, 3, 4, 5]
        }
      },
      {
        extend: 'excel',
        footer: false,
        exportOptions: {
          columns: [1, 3, 4, 5]
        }
      }
    ],
    columns: [


      {
        data: "ProductId",
        name: "ProductId",
        render: function (data, type, row) {
          return '<p>' + row.ProductId + '</p> ';
        },
        visible: false
      },
      {
        data: "ProductCode",
        name: "ProductCode",
        render: function (data, type, row) {
          return '<p>' + row.ProductCode + '</p> ';
        },
        visible: true
      }
      , {
        data: "lastTransaction",
        name: "lastTransaction",
        render: function (data, type, row) {
          return '<p>' + moment(row.TransactionDate.date).format('YYYY-MM-DD HH:MM:SS') + '</p> ';
        },
        visible: true
      }
      , {
        data: "Quantity",
        name: "Quantity",
        render: function (data, type, row) {
          return '<p class="quantity-text"><a class="table-link-documents-data">' + row.Quantity +' ('+( row.InOut ==1 || row.InOut ==true  ? "+":"-") +')</a></p>';
        },
        visible: true
      },
      {
        data: "TransactionDescription",
        name: "TransactionDescription",
        render: function (data, type, row) {
          return '<p>' + row.TransactionDescription + '</p>';
        },
        visible: true
      }

    ]

  });




}





