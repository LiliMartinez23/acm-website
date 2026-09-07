const eventTabs = document.querySelectorAll(".event-tab");

const eventTitle = document.getElementById("event-title");
const eventImage = document.getElementById("event-image");
const eventDescription = document.getElementById("event-description");

function selectEvent(tab) {
    // reset all tabs
    eventTabs.forEach((eventTab) => {
        eventTab.classList.remove(
            "bg-blue-50",
            "border-blue-400",
            "text-blue-400"
        );

        const arrow = eventTab.querySelector(".event-arrow");
        if (arrow) {
            arrow.textContent = "+";
        }
    });

    // highlight selected tab
    tab.classList.add(
        "bg-blue-50",
        "border-blue-400",
        "text-blue-400"
    );

    const arrow = tab.querySelector(".event-arrow");
    if (arrow) {
        arrow.textContent = "-";
    }

    // get info from selected tab
    const title = tab.dataset.title;
    const image = tab.dataset.image;
    const description = tab.dataset.description;

    // update info
    eventTitle.textContent = title;
    eventImage.src = image;
    eventImage.alt = title;
    eventDescription.textContent = description;
}

eventTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        selectEvent(tab);
    });
});

// select JagHacks when the page loads
if (eventTabs.length > 0) {
    selectEvent(eventTabs[0]);
}