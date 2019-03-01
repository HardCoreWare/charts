let data = [{label:"one",values:[1,1.5]},{label:"two",values:[2,2.5]}];
let labels = ["dataset 1","ddos"];


const singleChart = new SingleChart('bar',2);
singleChart.setData(data,labels);
singleChart.begin("myChart");

let node={

    label : "three",
    values : [3,3.5]

}

singleChart.push(node);
singleChart.push(node);
singleChart.push(node);
singleChart.push(node);
singleChart.push(node);
singleChart.push(node);

//console.log(singleChart.pop());
//singleChart.unshift(node);