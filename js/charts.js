var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Sid', 'Wibble', 'Bossko'],
        datasets: [{
            label: 'Awesomeness',
            data: [100, 1, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    borderDash: [3]
                },
                ticks: {
                    font: {
                        family: 'Quicksand'
                    }
                }
            },
            x: {
                grid: {
                    borderDash: [3]
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: 'Quicksand'
                    }
                }
            }
        }
    }
});