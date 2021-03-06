

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
        title: 'Box Details',
        footer: true,
        exportOptions: {
          columns: [1, 3, 4, 5]
        },
        customize: function (doc) {
          doc.pageMargins = [30, 30, 10, 20];
          doc.defaultStyle.fontSize = 11;
          doc.styles.tableHeader.fontSize = 11;
          doc.styles.tableFooter.fontSize = 11;
          doc.styles.title.fontSize = 13;
          // Remove spaces around page title
          doc.content[0].text = doc.content[0].text.trim();
          // Create a footer
          doc['footer'] = (function (page, pages) {
            return {
              columns: [
                "Print date: " + moment().format("YYYY-MM-DD HH:MM:SS"),
                {
                  // This is the right column
                  alignment: 'right',
                  text: ['page ', { text: page.toString() }, ' of ', { text: pages.toString() }]
                }
              ],
              margin: [10, 0]
            }
          });
          // Styling the table: create style object
          var objLayout = {};
          // Horizontal line thickness
          objLayout['hLineWidth'] = function (i) { return .5; };
          // Vertikal line thickness
          objLayout['vLineWidth'] = function (i) { return .5; };
          // Horizontal line color
          objLayout['hLineColor'] = function (i) { return '#aaa'; };
          // Vertical line color
          objLayout['vLineColor'] = function (i) { return '#aaa'; };
          // Left padding of the cell
          objLayout['paddingLeft'] = function (i) { return 4; };
          // Right padding of the cell
          objLayout['paddingRight'] = function (i) { return 4; };
          // Inject the object in the document
          doc.content[1].layout = objLayout;
        }



      },
      {
        extend: 'csv',
        title: 'Box Details',
        footer: false,
        exportOptions: {
          columns: [1, 3, 4, 5]
        }
      },
      {
        extend: 'excel',
        title: 'Box Details',
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
    $("#BoxCodeTitle").html(row["BoxCode"]);
    LoadBoxDeails(row["BoxId"], row["ProductId"],row["BoxCode"]);
  });


});


function LoadBoxDeails(BoxId, ProductId, BoxCode) {
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
        title: 'Product Transacions - Box Code('+BoxCode+')',
        exportOptions: {
          columns: [1, 2,3, 4]
        },
        
        customize: function (doc) {
          doc.pageMargins = [30, 30, 10, 20];
          doc.defaultStyle.fontSize = 11;
          doc.styles.tableHeader.fontSize = 11;
          doc.styles.tableFooter.fontSize = 11;
          doc.styles.title.fontSize = 13;
          // Remove spaces around page title
          doc.content[0].text = doc.content[0].text.trim();
          // Create a footer
          doc['footer'] = (function (page, pages) {
            return {
              columns: [
                "Print date: " + moment().format("YYYY-MM-DD HH:MM:SS"),
                {
                  // This is the right column
                  alignment: 'right',
                  text: ['page ', { text: page.toString() }, ' of ', { text: pages.toString() }]
                }
              ],
              margin: [10, 0]
            }
          });
          // Styling the table: create style object
          var objLayout = {};
          // Horizontal line thickness
          objLayout['hLineWidth'] = function (i) { return .5; };
          // Vertikal line thickness
          objLayout['vLineWidth'] = function (i) { return .5; };
          // Horizontal line color
          objLayout['hLineColor'] = function (i) { return '#aaa'; };
          // Vertical line color
          objLayout['vLineColor'] = function (i) { return '#aaa'; };
          // Left padding of the cell
          objLayout['paddingLeft'] = function (i) { return 4; };
          // Right padding of the cell
          objLayout['paddingRight'] = function (i) { return 4; };
          // Inject the object in the document
          doc.content[1].layout = objLayout;
        }
      },
      {
        extend: 'csv',
        footer: false,
        title: 'Product Transacions - Box Code('+BoxCode+')',
        exportOptions: {
          columns: [1, 2,3, 4]
        },
      },
      {
        extend: 'excel',
        footer: false,
        title: 'Product Transacions - Box Code('+BoxCode+')',
        exportOptions: {
          columns: [1, 2,3, 4]
        },
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
          return '<p class="quantity-text">' + row.Quantity + ' (' + (row.InOut == 1 || row.InOut == true ? "+" : "-") + ')</p>';
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







