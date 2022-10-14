window.onload = function() {
    if (location.search !== "?x") {
        location.search = "?x";
        throw new Error;
        // stop execution on this page
    }
}