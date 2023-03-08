import { subclass } from "@arcgis/core/core/accessorSupport/decorators";

import { property } from "@arcgis/core/core/accessorSupport/decorators";
import { tsx } from "@arcgis/core/widgets/support/widget";
import State from "./State";
import { Widget } from "./Widget";


type ConstructProperties = Pick<Button, "domId" | "state">;
@subclass("mu.Button")
class Button extends Widget<ConstructProperties> {

    @property()
    domId!: string;

    @property()
    state: State | undefined;

    @property()
    actions: any = {

    }

    render() {
        return <div id={this.domId} class="button"
            onclick={() => {
                switch (this.domId) {
                    case "tools":
                        document.getElementById("toolsContainer")?.classList.toggle("showPanel")
                        break;
                    case "layers":
                        document.getElementById("layersContainer")?.classList.toggle("showPanel")
                        break;
                    case "en":
                        this.updateAttributes("lang", "en")
                        window.open(window.location.href, "_self");

                        break;
                    case "ua":
                        this.updateAttributes("lang", "ua")
                        window.open(window.location.href, "_self");

                        break;
                    case "ru":
                        this.updateAttributes("lang", "ru")
                        window.open(window.location.href, "_self");

                        break;
                    case "cn":
                        this.updateAttributes("lang", "cn")
                        window.open(window.location.href, "_self");

                        break;
                }

            }}
        >{this.state?.strings.get(this.domId)}
        </div>;
    }
    updateAttributes(key: string, value: string) {
        // Construct URLSearchParams object instance from current URL querystring.
        var queryParams = new URLSearchParams(window.location.search);

        // Set new or modify existing parameter value. 
        queryParams.set(key, value);

        // Replace current querystring with the new one.
        history.replaceState(null, "", "?" + queryParams.toString());
    }
}

export default Button;
