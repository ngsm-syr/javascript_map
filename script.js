// JavaScript
import {LeafletMap, TileLayer, Marker, Icon} from 'leaflet';
const map = new LeafletMap('map').setView([33.67345752177457, 130.44140661378802], 15);

// タイルレイヤーを作成し、地図にセットする
// Open Street Map
new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//アイコン
// const whiteIcon = new Icon({
//   iconUrl: 'images/ico.png',
//   shadowUrl: 'images/ico_shadow.png',

// iconSize:     [40, 40], // size of the icon
// shadowSize:   [40, 40], // size of the shadow
// iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
// shadowAnchor: [20, 40],  // the same for the shadow
// popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
// });

// new Marker([33.67345752177457, 130.44140661378802], {icon: whiteIcon}).addTo(map).bindPopup('こんにちは！');

//複数アイコンをまとめて定義
class circleIcon extends Icon{
  static defaultOptions = {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  };
}

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
	pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' }),
	blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' });

new Marker([33.67345752177457, 130.44140661378802], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！');
new Marker([33.659767086361185, 130.4447579090926], { icon: pinkIcon }).addTo(map).bindPopup('こんにちは！');
new Marker([33.67005392011994, 130.4345440579688], { icon: blueIcon }).addTo(map).bindPopup('こんにちは！');
