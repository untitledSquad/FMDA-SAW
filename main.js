$(document).ready(function () {
    getAlternativ()
})

function getAlternativ() {
    let alternativ;
    let c1 = [];
    let c2 = [];
    let c3 = [];
    let c4 = [];
    let c5 = [];
    let c1Max, c2Max, c3Max, c4Max, c5Max;
    $.ajax({
        type: 'GET',
        url: 'alternativ.json',
        dataType: 'json',
        success: function (data) {
            for (let i = 0; i < data.length; i++) {
                alternativ += '<tr>' +
                    '<td>' + data[i].alternative + '</td>' +
                    '<td>' + data[i].c1 + '</td>' +
                    '<td>' + data[i].c2 + '</td>' +
                    '<td>' + data[i].c3 + '</td>' +
                    '<td>' + data[i].c4 + '</td>' +
                    '<td>' + data[i].c5 + '</td>' +
                    '</tr>';
                c1.push(data[i].c1)
                c2.push(data[i].c2)
                c3.push(data[i].c3)
                c4.push(data[i].c4)
                c5.push(data[i].c5)
            }
            $('#data').html(alternativ)
        }
    })
    console.log(c1)
}