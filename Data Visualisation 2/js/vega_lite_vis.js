var vg_1 = "js/tuberculosis_bubble_chart.vg.json";
vegaEmbed("#bubble_chart", vg_1, {"actions": false}).then(function(result){
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "js/disease_choropleth.vg.json";
vegaEmbed("#choropleth_map", vg_2, {"actions": false}).then(function(result){
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);