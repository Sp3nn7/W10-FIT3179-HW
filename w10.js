var vg_1 = "w10.vg.json";
var vg_2 = "w10-dchart.vg.json";


vegaEmbed('#vis3', vg_2, { "actions": false }).then(function (result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#vis4', vg_1, { "actions": false }).then(function (result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);