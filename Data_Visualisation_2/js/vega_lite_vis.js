var vg_1 = "js/disease_choropleth.vg.json";
vegaEmbed("#choropleth_map", vg_1, {"actions": false}).then(function(result){
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "js/tuberculosis_bubble_chart.vg.json";
vegaEmbed("#bubble_chart", vg_2, {"actions": false}).then(function(result){
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "js/polio_country_line_chart.vg.json";
vegaEmbed("#line_chart", vg_3, {"actions": false}).then(function(result){
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "js/polio_multiple_choropleths.vg.json";
vegaEmbed("#multiple_choropleth", vg_4, {"actions": false}).then(function(result){
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);