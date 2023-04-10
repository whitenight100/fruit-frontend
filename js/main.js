$(document).ready(function () {
    fetchData();
});
function fetchData(page = 1) {
    $.ajax({
        url: "http://localhost:8080/?r=fruit&page=" + page,
        method: "GET",
        success: function (data, status, request) {
            var total = request.getResponseHeader('X-Pagination-Total-Count');
            var NumberOfPages = request.getResponseHeader('X-Pagination-Page-Count');
            var current = request.getResponseHeader('X-Pagination-Current-Page');
            var fruits = '';
            for (i = 0; i < data.length; i++) {
                fruits += '<tr>';
                fruits += '<td>' + data[i]['id'] + '</td>';
                fruits += '<td>' + data[i]['name'] + '</td>';
                fruits += '<td>' + data[i]['family'] + '</td>';
                fruits += '<td>' + data[i]['order'] + '</td>';
                fruits += '<td>' + 'carbohydrates:' + data[i]['carbohydrates'] + ', protein:' + data[i]['protein'] + ', fat:' + data[i]['fat'] +
                 ', calories:' + data[i]['calories'] + ', sugar:' + data[i]['sugar'] + '</td>';
                fruits += '<td>' + "<button class='btn btn-primary' onclick='addToFavorite("+data[i]['id']+")'>Add</button>" + '</td>';
                fruits += '</tr>';
            }
            $('#fruits').html(fruits);
            var pages = '';
            for (i = 0; i< NumberOfPages; i++) {
                if ((i + 1) == current)
                    pages += '<li class="page-item active" onClick = "fetchData(' + (i+1) + ')"><a class="page-link" href="#">'+(i+1)+'</a></li>';
                else 
                    pages += '<li class="page-item" onClick = "fetchData(' + (i+1) + ')"><a class="page-link" href="#">'+(i+1)+'</a></li>';
            }
            $('.pagination').html(pages);
        }
    })
}

$()

function namefilter() {
    var nameinput = document.getElementById('nameSearch').value;
    var name = nameinput.toUpperCase();
    var table = document.getElementById("mytable");
    var tr = table.getElementsByTagName("tr");
    var i, td;
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
          var txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(name) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
    }

}

function familyfilter() {
    var familyinput = document.getElementById('familySearch').value;
    var family = familyinput.toUpperCase();
    var table = document.getElementById("mytable");
    var tr = table.getElementsByTagName("tr");
    var i, td;
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
          var txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(family) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
    }
}

function addToFavorite(id) {
    // $.ajax({
    //     url: "http://localhost:8080/?r=fruit/id/edit",
    //     method: "POST",
    //     data: {id:, name:,favorite:},
    //     dataType: "json",
    //     success: function(data) {
    //         console.log(data);
    //     }
    // })
}

function goFavorite() {
    // $.ajax({
    //     url: "http://localhost:8080/?r=fruit&page=" + page,
    //     method: "GET",
    //     success: function (data, status, request) {
    //         var fruits = '';
    //         for (i = 0; i < data.length; i++) {
    //             fruits += '<tr>';
    //             fruits += '<td>' + data[i]['id'] + '</td>';
    //             fruits += '<td>' + data[i]['name'] + '</td>';
    //             fruits += '<td>' + data[i]['family'] + '</td>';
    //             fruits += '<td>' + data[i]['order'] + '</td>';
    //             fruits += '<td>' + 'carbohydrates:' + data[i]['carbohydrates'] + ', protein:' + data[i]['protein'] + ', fat:' + data[i]['fat'] +
    //              ', calories:' + data[i]['calories'] + ', sugar:' + data[i]['sugar'] + '</td>';
    //             fruits += '<td>' + "<button class='btn btn-primary' onclick='" + addToFavorite(data[i]['id']) + "'>Add</button>" + '</td>';
    //             fruits += '</tr>';
    //         }
    //         $('#fruits').html(fruits);
    //         var pages = '';
    //         $('.pagination').html(pages);
    //     }
    // })
}