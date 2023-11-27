
document.addEventListener('DOMContentLoaded', function() {
    fetch("{% url 'obter_respostas_json' %}")
        .then(response => response.json())
        .then(data => {
            // Manipule os dados recebidos aqui
            console.log(data.respostas);

            const data = {
                mesesData: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                mediaPopBrasileiraAtividadeFisica: 100,
                pesoIdeal: 65,
                horasDormidasIdeal: 8,
                mediaAtividadeFisica: 150,
                mediaIdealAtividadeFisica: 200,
                mediaMesesAtividadeFisica: [100, 200, 100, 300, 250],
                peso: [60, 75, 70, 75, 65],
                nutrientes: [30, 50, 20],
                sal: { usuario: '5g', ideal: '6g' },
                agua: { usuario: '2L', ideal: '2.5L' },
                carneVermelha: { usuario: '200g', ideal: '150g' },    
            };

            // Iterar sobre as respostas e adicionar ao objeto 'data'
            for (var i = 0; i < data.respostas.length; i++) {
                var resposta = data.respostas[i];
                data.horasDormidas = resposta.horas_sono;
                // Adicione outros campos conforme necessário
            }

            // Agora 'data' terá as propriedades atualizadas com os valores das respostas
            console.log(data);
        })
        .catch(error => console.error('Erro ao obter dados:', error));
});

// Functions

function updateDisplay(number, target, numberElementId, targetElementId) {
  const bigNumberElement = document.getElementById(numberElementId);
  const parameterElement = document.getElementById(targetElementId);

  bigNumberElement.textContent = number;
  parameterElement.textContent = ` (Ideal: ${target})`;

  if (number > target) {
      bigNumberElement.style.color = 'green'; // Higher than target
  } else if (number < target) {
      bigNumberElement.style.color = 'red'; // Lower than target
  } else {
      bigNumberElement.style.color = 'blue'; // Equal to target
  }
};
function atualizarHabitosAlimentares() {
  document.getElementById('salUsuario').textContent = data.sal.usuario;
  document.getElementById('salIdeal').textContent = data.sal.ideal;
  document.getElementById('aguaUsuario').textContent = data.agua.usuario;
  document.getElementById('aguaIdeal').textContent = data.agua.ideal;
  document.getElementById('carneVermelhaUsuario').textContent = data.carneVermelha.usuario;
  document.getElementById('carneVermelhaIdeal').textContent = data.carneVermelha.ideal;
};

// Card para Hábitos Alimentares.
atualizarHabitosAlimentares();

// Big Number Cards.
updateDisplay(data.horasDormidas, data.horasDormidasIdeal, 'sonoUser','sonoIdeal'); 
updateDisplay(data.mediaAtividadeFisica, data.mediaIdealAtividadeFisica, 'atvFisicaUser','atvFisicaIdeal'); 

// Initialize the line chart
const MediaAtvFisicaCtx = document.getElementById('MediaAtvFisicaChart').getContext('2d');
const MediaAtvFisicaChart = new Chart(MediaAtvFisicaCtx, {
    type: 'line',
    data: {
        labels: data.mesesData,
        datasets: [{
            label: 'minutos',
            backgroundColor: 'rgba(255, 194, 94, 0.37)',
            borderColor: 'rgba(255, 194, 94, 1)',
            data: data.mediaMesesAtividadeFisica,
            fill: false,
        }] 
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },

        plugins: {
            annotation : {
                annotations: {
                    linhaMediaIdeal: {
                            type: 'line',
                            yMin: data.mediaIdealAtividadeFisica,
                            yMax: data.mediaIdealAtividadeFisica,
                            borderColor: 'green',
                            borderWidth: 1, 
                            label: {
                              content: `Média Ideal: ${data.mediaIdealAtividadeFisica}`,
                              enabled: true,
                              position: 'end',
                              color: 'green',
                              backgroundColor: 'transparent',
                              xAdjust: 0,
                              yAdjust: -15,
                              font: {
                                  size: 12
                              }
                          }
                        },
                    linhaMediaBrasil: {
                        type: 'line',
                        yMin: data.mediaPopBrasileiraAtividadeFisica,
                        yMax: data.mediaPopBrasileiraAtividadeFisica,
                        borderColor: 'blue',
                        borderWidth: 1, 
                        label: {
                          content: `Média Brasil: ${data.mediaPopBrasileiraAtividadeFisica}`,
                          enabled: true,
                          position: 'end',
                          color: 'blue',
                          backgroundColor: 'transparent',
                          xAdjust: 0,
                          yAdjust: -15,
                          font: {
                              size: 12
                          }
                      }
                    },
                    }
                }
            }
        }
});

// Initialize the bar chart
const pesoTempoCtx = document.getElementById('pesoTempoChart').getContext('2d');
const pesoTempoChart = new Chart(pesoTempoCtx, {
    type: 'bar',
    data: {
        labels: data.mesesData,
        datasets: [{
            label: 'Peso nos meses x ideal',
            data: data.peso,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },

        plugins: {
            annotation : {
                annotations: {
                    line1: {
                        type: 'line',
                        yMin: data.pesoIdeal,
                        yMax: data.pesoIdeal,
                        borderColor: 'green',
                        borderWidth: 1, 
                        label: {
                          content: `Meta: ${data.pesoIdeal}kg`, // cuidado com interpolacao!
                          enabled: true,
                          position: 'end',
                          color: 'black',
                          backgroundColor: '#BAFFC7',
                          borderColor: '#6FCA80', // Example: Black border
                          borderWidth: 2,
                          xAdjust: 0,
                          yAdjust: -20,
                          
                      }
                    }
                }
            }
        }
    } // definir aqui eixo, a linha fixa...
});

// Initialize Doughnut Chart
const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
const doughnutChart = new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Protein', 'Carbs', 'Fats'],
        datasets: [{
            label: 'MacroNutrientes',
            data: data.nutrientes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
    }
});
