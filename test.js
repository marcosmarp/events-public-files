window.onload = () => {
    const form = document.getElementById("form");
    const inputs = document.getElementsByTagName("input");

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === "attributes") {
                console.log("submitted");
            }
        });
    });

    //  @ts-ignore
    observer.observe(form, {
        attributes: true,
    });
};
