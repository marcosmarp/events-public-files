window.onload = () => {
    const form = document.getElementById("form");
    const inputs = document.getElementsByTagName("input");

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === "attributes") {
                // log all the inputs values
                for (let inp of inputs) {
                    console.log(inp.value);
                }
            }
        });
    });

    //  @ts-ignore
    observer.observe(form, {
        attributes: true,
    });
};
