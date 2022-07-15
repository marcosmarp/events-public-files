window.onload = () => {
    const form = document.getElementById("form");
    const inputs = document.getElementsByTagName("input");
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("eventId");

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (
                mutation.type === "attributes" &&
                mutation.attributeName === "data-submission-phase"
            ) {
                // log all the inputs values
                for (let inp of inputs) {
                    console.log(inp.value);
                    console.log(eventId);
                }
            }
        });
    });

    //  @ts-ignore
    observer.observe(form, {
        attributes: true,
    });
};
