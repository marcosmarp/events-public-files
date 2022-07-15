window.onload = () => {
    const form = document.getElementById("form");
    const inputs = document.getElementsByTagName("input");
    form?.addEventListener("submit", (e) => {
        console.log("submited");
        console.log(inputs);
    });
};
