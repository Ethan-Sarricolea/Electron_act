function establishVersion(idSelector, version){
    let element = document.getElementById(idSelector);

    if(element){
        element.innerText = version;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const components = ['Node', 'Chrome', 'Electron']

    for (const component of components) {
        establishVersion(`version${component}`,
            process.versions[component.toLowerCase()]);
    }
});