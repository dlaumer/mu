import Maps from "./main";
import State from "./State";
import StringsApp from "./StringsApp";
import UI from "./UI";


let urlParameters = getJsonFromUrl();

if (!("lang" in urlParameters)) {
    updateAttributes("lang", "en")
    urlParameters["lang"] = "en"
}
let strings = new StringsApp(urlParameters["lang"]);

Promise.all(strings.init()).then(() => {
    let state = new State(strings, urlParameters["lang"]);

    let maps = new Maps();


    let ui = new UI({
        container: "app", state: state
    });



    ui.when(() => {

        maps.addMap();
    })

})



function getJsonFromUrl() {
    var query = location.search.substr(1);
    var result = {};
    query.split("&").forEach(function (part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
}
function updateAttributes(key: string, value: string) {
    // Construct URLSearchParams object instance from current URL querystring.
    var queryParams = new URLSearchParams(window.location.search);

    // Set new or modify existing parameter value. 
    queryParams.set(key, value);

    // Replace current querystring with the new one.
    history.replaceState(null, "", "?" + queryParams.toString());
}

function removeAttributes(key: string) {
    // Construct URLSearchParams object instance from current URL querystring.
    var queryParams = new URLSearchParams(window.location.search);

    // Set new or modify existing parameter value. 
    queryParams.delete(key);

    // Replace current querystring with the new one.
    history.replaceState(null, "", "?" + queryParams.toString());
}
