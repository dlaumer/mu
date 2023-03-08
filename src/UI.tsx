import { subclass } from "@arcgis/core/core/accessorSupport/decorators";

import { property } from "@arcgis/core/core/accessorSupport/decorators";
import { tsx } from "@arcgis/core/widgets/support/widget";
import Header from "./Header";
import { Widget } from "./Widget";


type ConstructProperties = Pick<UI, "text">;

@subclass("mu.UI")
class UI extends Widget<ConstructProperties> {

    @property({ constructOnly: true })
    text: string | undefined;

    render() {
        return <div>
            <Header
                text=""
            />
            <div id="map">
                <div id="toolsContainer" class="panel"></div>
                <div id="viewDiv"></div>
                <div id="layersContainer" class="panel"></div>
            </div>
            <div id="footer"></div>
        </div>;
    }
}

export default UI;
