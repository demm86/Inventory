

$(document).ready(function () {
  $('#dataTableProducts').DataTable({
    ajax: {
      url: "api/productList.php", dataSrc: ""
    },

    columns: [


      {
        data: "ProductId",
        name: "ProductId",
        render: function (data, type, row) {
          return '<p>' + row.ProductId + '</p> ';
        },
        visible: true
      },
      {
        data: "ProductCode",
        name: "ProductCode",
        render: function (data, type, row) {
          return '<p>' + row.ProductCode + '</p> ';
        },
        visible: true
      }, {
        data: "Quantity",
        name: "Quantity",
        render: function (data, type, row) {
          return '<p>' + row.Quantity + '</p> ';
        },
        visible: true
      }, {
        data: "lastTransaction",
        name: "lastTransaction",
        render: function (data, type, row) {
          return '<p>' + row.LastTransaction.date + '</p> ';
        },
        visible: true
      }




    ]

  });
});





