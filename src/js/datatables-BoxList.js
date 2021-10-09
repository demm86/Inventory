

var PanelBoxDetails;

$(document).ready(function () {

  PanelBoxDetails = document.querySelector("#PanelBoxDetails");
  vrMainTable = $('#dataTableBoxList').DataTable({
    mark: true,
    ajax: {
      url: "api/boxList.php", dataSrc: ""
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
        data: "BoxId",
        name: "BoxId",
        render: function (data, type, row) {
          return '<p>' + row.BoxId + '</p> ';
        },
        visible: false
      },

      {
        data: "BoxCode",
        name: "BoxCode",
        render: function (data, type, row) {
          return '<p>' + row.BoxCode + '</p> ';
        },
        visible: true
      },
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
          return '<p>' + moment(row.LastTransaction.date).format('YYYY-MM-DD HH:MM:SS') + '</p> ';
        },
        visible: true
      }
      , {
        data: "Quantity",
        name: "Quantity",
        render: function (data, type, row) {
          return '<p style="text-align:right;"><a class="table-link-documents-data">' + row.Quantity + '</a></p>';
        },
        visible: true
      }




    ]

  });

  $('#dataTableBoxList tbody').on('click', '.table-link-documents-data', function () {
    var row = vrMainTable.row($(this).parents('tr')).data();
    LoadBoxDeails(row["BoxId"], row["ProductId"]);
  });


});


function LoadBoxDeails(BoxId, ProductId) {
  PanelBoxDetailsTmp = new fabric['Panel'](PanelBoxDetails);

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
          return '<p class="quantity-text"><a class="table-link-documents-data">' + row.Quantity +' ('+(row.InOut ? "+":"-") +')</a></p>';
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







