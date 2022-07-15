window.onload = () => {
    const form = document.getElementById("form");
    // on form submit, get console.log all values
    form?.addEventListener("submit", (e) => {
        console.log(e);
        console.log(form);
    });
};
