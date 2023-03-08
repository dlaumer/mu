import StringsApp from "./StringsApp";

class State {
    strings: StringsApp
    language: string
    actions: any

    constructor(strings: StringsApp, language: string) {
        this.strings = strings;
        this.language = language
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
export default State
