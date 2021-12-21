$(document).ready(function () {
    //Datatable
    $('#articlesTable').DataTable({
        language: {
            "sDecimal": ",",
            "sEmptyTable": "Tabloda herhangi bir veri mevcut değil",
            "sInfo": "_TOTAL_ kayıttan _START_ - _END_ arasındaki kayıtlar gösteriliyor",
            "sInfoEmpty": "Kayıt yok",
            "sInfoFiltered": "(_MAX_ kayıt içerisinden bulunan)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "Sayfada _MENU_ kayıt göster",
            "sLoadingRecords": "Yükleniyor...",
            "sProcessing": "İşleniyor...",
            "sSearch": "Ara:",
            "sZeroRecords": "Eşleşen kayıt bulunamadı",
            "oPaginate": {
                "sFirst": "İlk",
                "sLast": "Son",
                "sNext": "Sonraki",
                "sPrevious": "Önceki"
            },
            "oAria": {
                "sSortAscending": ": artan sütun sıralamasını aktifleştir",
                "sSortDescending": ": azalan sütun sıralamasını aktifleştir"
            },
            "select": {
                "rows": {
                    "_": "%d kayıt seçildi",
                    "0": "",
                    "1": "1 kayıt seçildi"
                }
            }
        },
        "order":[[4,"desc"]]
    });
    //Datatable

    //Chart.js
    $.get('/Admin/Article/GetAllByViewCount/?isAscending=false&takeSize=10', function (data) {
        const articleResult = jQuery.parseJSON(data);

        let viewCountContext = $('#viewCountChart');

        let viewCountChart = new Chart(viewCountContext,
            {
                type: 'bar',
                data: {
                    labels: articleResult.$values.map(article => article.Title),
                    datasets: [
                        {
                            label: 'Okunma Sayısı',
                            data: articleResult.$values.map(article => article.ViewCount),
                            backgroundColor: '#fb3640',
                            hoverBorderWidth: 2,
                            hoverBorderColor: 'black'
                        },
                        {
                            label: 'Yorum Sayısı',
                            data: articleResult.$values.map(article => article.CommentsCount),
                            backgroundColor: '#fdca40',
                            hoverBorderWidth: 2,
                            hoverBorderColor: 'black'
                        }]
                    //},
                    //options: {
                    //    plugins:{
                    //        legend: {
                    //            labels: {
                    //                font: {
                    //                    size: 16
                    //                    }
                    //                }
                    //            }
                    //    }
                }
            });
    });
    //Chart.js
});