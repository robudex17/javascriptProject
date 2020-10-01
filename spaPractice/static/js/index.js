const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
const router = async () => {
    const routes = [
        { path: "/"},
        { path : "/posts"},
        {path: "/settings"}
    ];

    const potentialMatches = routes.map(route => {
        return {
            route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    })
    let match = potentialMatches.find(potentialMatch => {
        return potentialMatch.result !== null
    })
     console.log(match)
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

}
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};
document.addEventListener('DOMContentLoaded',() => {
    document.body.addEventListener('click', e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
        }
    });
    router();
})
window.addEventListener("popstate", router);