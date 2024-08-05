ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([6550712.545916, 7677996.236089, 6564569.726646, 7688033.907246]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_plot210d_1 = new ol.format.GeoJSON();
var features_plot210d_1 = format_plot210d_1.readFeatures(json_plot210d_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plot210d_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plot210d_1.addFeatures(features_plot210d_1);
var lyr_plot210d_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plot210d_1, 
                style: style_plot210d_1,
                popuplayertitle: "plot210d",
                interactive: true,
                title: '<img src="styles/legend/plot210d_1.png" /> plot210d'
            });
var format_plot209d_2 = new ol.format.GeoJSON();
var features_plot209d_2 = format_plot209d_2.readFeatures(json_plot209d_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plot209d_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plot209d_2.addFeatures(features_plot209d_2);
var lyr_plot209d_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plot209d_2, 
                style: style_plot209d_2,
                popuplayertitle: "plot209d",
                interactive: true,
                title: '<img src="styles/legend/plot209d_2.png" /> plot209d'
            });
var format_plot198d_3 = new ol.format.GeoJSON();
var features_plot198d_3 = format_plot198d_3.readFeatures(json_plot198d_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plot198d_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plot198d_3.addFeatures(features_plot198d_3);
var lyr_plot198d_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plot198d_3, 
                style: style_plot198d_3,
                popuplayertitle: "plot198d",
                interactive: true,
                title: '<img src="styles/legend/plot198d_3.png" /> plot198d'
            });
var format_plot197d_4 = new ol.format.GeoJSON();
var features_plot197d_4 = format_plot197d_4.readFeatures(json_plot197d_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plot197d_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plot197d_4.addFeatures(features_plot197d_4);
var lyr_plot197d_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plot197d_4, 
                style: style_plot197d_4,
                popuplayertitle: "plot197d",
                interactive: true,
                title: '<img src="styles/legend/plot197d_4.png" /> plot197d'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_plot210d_1.setVisible(true);lyr_plot209d_2.setVisible(true);lyr_plot198d_3.setVisible(true);lyr_plot197d_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_plot210d_1,lyr_plot209d_2,lyr_plot198d_3,lyr_plot197d_4];
lyr_plot210d_1.set('fieldAliases', {'id': 'id', });
lyr_plot209d_2.set('fieldAliases', {'id': 'id', });
lyr_plot198d_3.set('fieldAliases', {'id': 'id', });
lyr_plot197d_4.set('fieldAliases', {'id': 'id', });
lyr_plot210d_1.set('fieldImages', {'id': '', });
lyr_plot209d_2.set('fieldImages', {'id': '', });
lyr_plot198d_3.set('fieldImages', {'id': '', });
lyr_plot197d_4.set('fieldImages', {'id': '', });
lyr_plot210d_1.set('fieldLabels', {'id': 'no label', });
lyr_plot209d_2.set('fieldLabels', {'id': 'no label', });
lyr_plot198d_3.set('fieldLabels', {'id': 'no label', });
lyr_plot197d_4.set('fieldLabels', {'id': 'no label', });
lyr_plot197d_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});