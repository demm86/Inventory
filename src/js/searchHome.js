
$(document).ready(function () {



    $('#termsList1').fadeOut();
    $('#termsList').fadeOut();




    $('body').on('click', function (e) {


        if (e.target.offsetParent.classList.value != null) {

            if (!e.target.offsetParent.classList.value.indexOf("termsTxtDiv") > -1) {
                if (!e.target.offsetParent.classList.value.indexOf("Panel") > -1) {

                    if (!$('#PanelProductDetails').hasClass("is-open")) {

                        $('#termsList').fadeOut();

                        $('#termsList').hide();
                    }


                }
            }


        }




    });


    $('#SearchTextInput').keyup(function () {
        var query = $(this).val();


        if ((query != '') && (query.length > 3)) {

            $.ajax({
                url: "api/search.php?query=" + query,
                beforeSend: function () {
                    // $("#spinner-doc-rec").show();


                    if ($("#spinner-details").html() == undefined) {

                        $('#termsList').append(' <div id="spinner-details" >' +
                            ' <div class="col-md-12 col-lg-12">' +
                            ' <div class="container" style="display: inline-block; width:100%;">' +
                            '<div id="spinner-doc-details" class="ms-Spinner ms-Spinner--large">' +
                            '</div>' +
                            '</div>' +
                            '</div>');
                    }

                    var SpinnerElements = document.querySelectorAll(".ms-Spinner");
                    for (var i = 0; i < SpinnerElements.length; i++) {
                        new fabric['Spinner'](SpinnerElements[i]);
                    }
                },
                success: function (data) {
                    $('#termsList').fadeIn();
                    var tmp = "";

                    tmp = '<ul class="list-unstyled">';
                    var parsed = JSON.parse(data)
                    $(parsed).each(function () {


                        tmp += '<li data-id="' + this.id + '" data-code="' + this.code + '" data-type="' + this.type + '" class="pointer-link"><i class="fas fa-fw ' + (this.type == "product" ? " fa-shopping-bag " : " fa-archive ") + '"></i> ' + this.code + '</li>';

                    })
                    tmp += '</ul>';
                    $('#termsList').html(tmp);


                    if (data.length == 0) {
                        $('#termsList').fadeOut();
                    }

                }
            });
        } else {
            $('#termsList').fadeOut();
        }
    });



    $('#termsList').on('click', 'li', function () {
        $('#ProductCodeTitle').html("");

        if ($(this).attr("data-type") == "product") {
            LoadProductDeailsPanel($(this).attr("data-id"), $(this).attr("data-code"));
        }
        else {
            LoadBoxDeailsPanelHome($(this).attr("data-id"), $(this).attr("data-code"))
        }

    });

});