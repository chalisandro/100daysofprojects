google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var channelPagesPercentage = getRandomPercentage();
    var directUnknownPercentage = getRandomPercentage();
    var searchPercentage = getRandomPercentage();
    var externalPercentage = getRandomPercentage();

    var data = google.visualization.arrayToDataTable([
        ['', ''],
        ['', channelPagesPercentage],
        ['', directUnknownPercentage],
        ['', searchPercentage],
        ['', externalPercentage]
    ]);

    var options = {
        pieHole: 0.8,
        width: 300,
        height: 300,
        legend: 'none',
        pieSliceText: 'label',
        pieSliceTextStyle: {
            color: 'black',
            fontSize: 14
        },
        tooltip: {textStyle: {color: '#333'}, showColorCode: true},
        colors: ['#1A52E1', '#4473EA', '#6792FF', '#96B3FF'] // Celeste y tonos más bajos
    };
    

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);

    // Actualizar los elementos HTML con los porcentajes generados
    document.getElementById('channel-pages').textContent = channelPagesPercentage + '%';
    document.getElementById('direct-unknown').textContent = directUnknownPercentage + '%';
    document.getElementById('search').textContent = searchPercentage + '%';
    document.getElementById('external').textContent = externalPercentage + '%';

    // Definir colores para las barras de acuerdo con los colores del gráfico de pastel
    var barColors = ['#1A52E1', '#4473EA', '#6792FF', '#96B3FF'];

    // Asignar colores a las barras de porcentaje
    document.getElementById('channel-pages-bar').style.backgroundColor = barColors[0];
    document.getElementById('direct-unknown-bar').style.backgroundColor = barColors[1];
    document.getElementById('search-bar').style.backgroundColor = barColors[2];
    document.getElementById('external-bar').style.backgroundColor = barColors[3];

    // Actualizar las barras de porcentaje
    document.getElementById('channel-pages-bar').style.width = channelPagesPercentage + '%';
    document.getElementById('direct-unknown-bar').style.width = directUnknownPercentage + '%';
    document.getElementById('search-bar').style.width = searchPercentage + '%';
    document.getElementById('external-bar').style.width = externalPercentage + '%';
}

function getRandomPercentage() {
    return Math.floor(Math.random() * (30 - 10 + 1)) + 10;
}

