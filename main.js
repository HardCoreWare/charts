class SingleChart{

    //
    constructor(type,size){

        this.colors = [];

        this.type = type;
        this.size = size;
        this.chart = null;
        this.ctx = null;
        this.data = {

            labels: [],
            datasets: []
        }

    }

    //
    begin(divId){

        this.ctx = document.getElementById(divId).getContext('2d');
        this.chart = new Chart(this.ctx, {
            type: 'bar',
            data: this.data,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });

    }

    //
    end(){

        this.ctx.destroy();
        this.chart.destroy();

    }

    //
    setData(data,labels){

        //iteramos etiquetas en X
        data.forEach(node => {

            this.data.labels.push(node.label);
            
        });

        for (let i = 0; i < this.size; i++) {

            let dataset = {

                label: labels[i],
                data:[],
                backgroundColor:'rgba(255, 99, 132, 0.2)',
                borderColor:'rgba(255, 99, 132, 0.2)',
                borderWidth: 1


            };

            data.forEach(node=>{

                let value=node.values[i];

                dataset.data.push(value);

            });

            this.data.datasets.push(dataset);
    
        }

    }

    //
    push(node){

        //
        this.data.labels.push(node.label);

        //
        for (let i = 0; i < this.size; i++) {

            this.data.datasets[i].data.push(node.values[i]);
            
        }

        this.chart.update();

    }

    //
    pop(){

        let node={

            label:this.data.labels.pop(),

            values:[]

        }

        //
        for (let i = 0; i < this.size; i++) {

            node.values[i]=this.data.datasets[i].data.pop();
            
        }

        this.chart.update();

        return(node);

    }

}


let data = [{label:"one",values:[1,1.5]},{label:"two",values:[2,2.5]}];
let labels = ["dataset 1","ddos"];


const singleChart = new SingleChart('line',2);
singleChart.setData(data,labels);
singleChart.begin("myChart");


let node={

    label : "three",
    values : [3,3.5]

}

singleChart.push(node);

console.log(singleChart.pop());