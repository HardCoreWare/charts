class SingleChart{

    //
    constructor(type,size){

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
    setData(data){



    }

    //
    push(node){



    }

    //
    pop(){

        return null;

    }

}


let data = [{label:"one",values:[1,1.5]},{label:"two",values:[2,2.5]}];


const singleChart = new SingleChart('line',2);
singleChart.setData(data);
singleChart.begin("myChart");