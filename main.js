let data = [{label:"one",values:[1,1.5]},{label:"two",values:[2,2.5]}];
let labels = ["dataset 1","ddos"];

const singleChart = new SingleChart('bar',2);
singleChart.setData(data,labels);
singleChart.begin("myChart");

document.getElementById("btnPush").onclick=function () {

    alert("cool");
    
}