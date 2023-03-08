import { subclass } from "@arcgis/core/core/accessorSupport/decorators";

import { property } from "@arcgis/core/core/accessorSupport/decorators";
import { tsx } from "@arcgis/core/widgets/support/widget";
import Header from "./Header";
import State from "./State";
import { Widget } from "./Widget";

type ConstructProperties = Pick<UI, "state">;

@subclass("mu.UI")
class UI extends Widget<ConstructProperties> {

    @property()
    state: State | undefined;

    render() {
        return <div>
            <Header
                text=""
                state={this.state}
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
