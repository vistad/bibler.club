async function loadPartial(file, elementId) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const content = await response.text();

        const container = document.getElementById(elementId);
        if (container) {
            container.innerHTML = content;

            // Re-initialize your specific Tree Menu script
            if (elementId === 'menu-container' && typeof ddtreemenu !== 'undefined') {
                ddtreemenu.createTree("treemenu1", true);
            }
        }
    } catch (e) {
        console.error(`Error loading ${file}:`, e);
    }
}

// This is the "trigger" - it runs for every page that links this script
document.addEventListener("DOMContentLoaded", () => {
    loadPartial('menu.html', 'menu-container');
    loadPartial('rightbar.html', 'rightbar-container');
});
