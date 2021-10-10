
var PanelBoxDetailsHome;


$(document).ready(function () {
  PanelBoxDetailsHome = document.querySelector("#PanelBoxDetailsHome");
});


function LoadBoxDeailsPanelHome(BoxId, BoxCode) {
  PanelBoxtDetailsTmpHome = new fabric['Panel'](PanelBoxDetailsHome);
  $("#BoxCodeProductTitleHome").html(BoxCode);

  vrMainTableDetails = $('#dataTableBoxListDetailsPanelHome').DataTable({
    mark: true,
    destroy: true,
    ajax: {
      url: "api/boxListDetails.php?BoxId=" + BoxId + "&ProductId=-1",
      dataSrc: ""
    },
    dom: 'Bfrtip',
    buttons: [
      {
        extend: 'pdf',
        footer: true,
        title: 'Transactions by box  (' + BoxCode + ')',
        exportOptions: {
          columns: [0, 1, 2, 3]
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
        title: 'Transactions by box  (' + BoxCode + ')',
        exportOptions: {
          columns: [0, 1, 2, 3]
        },
      },
      {
        extend: 'excel',
        footer: false,
        title: 'Transactions by box  (' + BoxCode + ')',
        exportOptions: {
          columns: [0, 1, 2, 3]
        },
      }
    ],
    columns: [

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
          return '<p>' + moment(row.TransactionDate).format('YYYY-MM-DD HH:MM:SS') + '</p> ';
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



