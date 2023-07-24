  const doughnutOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display:false,
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Bar Chart',
          },
        },
      };

const doughnutdata = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5,],
      backgroundColor: ['#A7EFBD','#CCECF8','#FF9A9A','#FFE579'],
      borderColor: [
        '#A7EFBD','#CCECF8','#FF9A9A','#FFE579'
      ],
      borderWidth: 1,
    },
  ],
};

const barDataSet = [
    {
      label: 'Dataset 1',
      data: [30,20,40,70],
      backgroundColor: ['#A7EFBD','#CCECF8','#FF9A9A','#FFE579'],
    },
  ]

   const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales:{
            y:{
                position:'right',
                // max: 100,
                // min: 0,
                grid:{
                    color:'#E4E4E4',
                    drawTicks:false
                },
                ticks: {stepSize: 15},
                border:{
                    dash:[2,4]
                }
                // grid:{
                //     display:false
                // },
            },
            x:{
                grid:{
                    display:false
                },
                
            }
        },
        plugins: {
          legend: {
             display:false,
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Bar Chart',
          },
        },
      };
      
 const barLabels = ['January', 'February', 'March', 'April',];


 export {doughnutOptions,doughnutdata,barDataSet,barLabels,barOptions}