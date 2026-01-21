var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GrmNovomestocenterbiotehnikeinturizma_1 = new ol.format.GeoJSON();
var features_GrmNovomestocenterbiotehnikeinturizma_1 = format_GrmNovomestocenterbiotehnikeinturizma_1.readFeatures(json_GrmNovomestocenterbiotehnikeinturizma_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrmNovomestocenterbiotehnikeinturizma_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrmNovomestocenterbiotehnikeinturizma_1.addFeatures(features_GrmNovomestocenterbiotehnikeinturizma_1);
var lyr_GrmNovomestocenterbiotehnikeinturizma_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrmNovomestocenterbiotehnikeinturizma_1, 
                style: style_GrmNovomestocenterbiotehnikeinturizma_1,
                popuplayertitle: 'Grm Novo mesto - center biotehnike in turizma',
                interactive: true,
                title: '<img src="styles/legend/GrmNovomestocenterbiotehnikeinturizma_1.png" /> Grm Novo mesto - center biotehnike in turizma'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GrmNovomestocenterbiotehnikeinturizma_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GrmNovomestocenterbiotehnikeinturizma_1];
lyr_GrmNovomestocenterbiotehnikeinturizma_1.set('fieldAliases', {'id': 'id', 'SLO Ime': 'SLO Ime', 'ENG Ime': 'ENG Ime', 'Številka': 'Številka', 'Label': 'Label', 'foto': 'foto', 'povezava': 'povezava', });
lyr_GrmNovomestocenterbiotehnikeinturizma_1.set('fieldImages', {'id': '', 'SLO Ime': '', 'ENG Ime': '', 'Številka': '', 'Label': '', 'foto': '', 'povezava': '', });
lyr_GrmNovomestocenterbiotehnikeinturizma_1.set('fieldLabels', {'id': 'no label', 'SLO Ime': 'no label', 'ENG Ime': 'no label', 'Številka': 'hidden field', 'Label': 'hidden field', 'foto': 'no label', 'povezava': 'no label', });
lyr_GrmNovomestocenterbiotehnikeinturizma_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});