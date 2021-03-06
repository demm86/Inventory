

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
        title: 'Product Details',
        exportOptions: {
          columns: [1, 2, 3]
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
        data: "LastTransaction",
        name: "LastTransaction",
        render: function (data, type, row) {
          return '<p>' + row.LastTransaction + '</p> ';
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
    $("#ProductCodeTitle").html(row["ProductCode"]);
    LoadProductDeailsPanel(row["ProductId"], row["ProductCode"]);
  });



});



