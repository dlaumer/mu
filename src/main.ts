import Color from "@arcgis/core/Color";
import { Point } from "@arcgis/core/geometry";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import Map from "@arcgis/core/Map";
import { SimpleRenderer } from "@arcgis/core/renderers";
import { FillSymbol3DLayer, PolygonSymbol3D } from "@arcgis/core/symbols";
import SceneView from "@arcgis/core/views/SceneView";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";
import Home from "@arcgis/core/widgets/Home";
import LayerList from "@arcgis/core/widgets/LayerList";
import Search from "@arcgis/core/widgets/Search";
import "@esri/calcite-components/dist/calcite/calcite.css";
import "@esri/calcite-components/dist/components/calcite-loader";

// setAssetPath("https://js.arcgis.com/calcite-components/1.0.0-beta.77/assets");

// const params = new URLSearchParams(document.location.search.slice(1));
// const someParam = params.has("someParam");

// IdentityManager.registerOAuthInfos([
//   new OAuthInfo({
//     appId: "",
//     popup: true,
//     popupCallbackUrl: `${document.location.origin}${document.location.pathname}oauth-callback-api.html`,
//   }),
// ]);

// (window as any).setOAuthResponseHash = (responseHash: string) => {
//   IdentityManager.setOAuthResponseHash(responseHash);
// };


let country = new FeatureLayer({
  url: "https://services-eu1.arcgis.com/iqyjb3bABMyiZGeU/arcgis/rest/services/Ukraine_AdministrativeBorders/FeatureServer/2",
  title: "Country",
  popupEnabled: false,
  renderer: new SimpleRenderer({
    symbol: new PolygonSymbol3D({
      symbolLayers: [new FillSymbol3DLayer({
        material: { color: "red" },
        outline: {
          color: "black",
          size: "1px",
        }
      })]
    })
  })
})

let level1 = new FeatureLayer({
  url: "https://services-eu1.arcgis.com/iqyjb3bABMyiZGeU/arcgis/rest/services/Ukraine_AdministrativeBorders/FeatureServer/1",
  title: "Level 1",
  visible: false,
  renderer: new SimpleRenderer({
    symbol: new PolygonSymbol3D({
      symbolLayers: [{
        type: "fill",  // autocasts as new FillSymbol3DLayer()
        material: { color: "red" },
        outline: {
          color: "black",
          size: "1px",
        }
      }]
    })
  })
})

let level2 = new FeatureLayer({
  url: "https://services-eu1.arcgis.com/iqyjb3bABMyiZGeU/arcgis/rest/services/Ukraine_AdministrativeBorders/FeatureServer/0",
  title: "Level 2",
  visible: false,
  renderer: new SimpleRenderer({
    symbol: new PolygonSymbol3D({
      symbolLayers: [{
        type: "fill",  // autocasts as new FillSymbol3DLayer()
        material: { color: "red" },
        outline: {
          color: "black",
          size: "0.5px",
        }
      }]
    })
  })
})

let Ukraine_AdministrativeBorders = new GroupLayer({
  title: "Administrative Borders",
  layers: [
    country,
    level1,
    level2
  ]
})

const map = new Map({
  basemap: "satellite",
  ground: "world-elevation",
  layers: [
    Ukraine_AdministrativeBorders
  ]
});

const view = new SceneView({
  container: "viewDiv",
  map,
  camera: {
    position: new Point({
      x: 35.13531112,
      y: 39.48777225,
      z: 2208722.42006
    }),
    heading: 2.86,
    tilt: 22.15
  },
  qualityProfile: "high",
  environment: {
    atmosphere: {
      quality: "high"
    }
  }
});

// Add widget to the top right corner of the view
view.ui.add(new Home({
  view: view
}),
  "top-left"
);

// Add widget to the top right corner of the view
view.ui.add(new Expand({
  view: view, content: new Search({
    view: view
  })
}), {
  position: "top-right"
});

// Add widget to the top right corner of the view
view.ui.add(new Expand({
  view: view, content: new BasemapGallery({
    view: view
  })
}), {
  position: "top-right"
});

// Add widget to the top right corner of the view
view.ui.add(new Expand({
  view: view, content: new LayerList({
    view: view
  })
}), {
  position: "top-right"
});
view.popup.defaultPopupTemplateEnabled = true;
view.when().then(() => {
  map.ground.surfaceColor = new Color([220, 220, 220]);
});

window["view"] = view;
