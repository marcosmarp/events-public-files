window.onload = () => {
    const nameInput = document.querySelector(
        '[placeholder="Nombre y apellido"]'
    );

    const submitButton = document.querySelector('[data-role="submit"]');

    console.log(nameInput);
    console.log(submitButton);

    // when the user clicks the submit button
    submitButton?.addEventListener("click", () => {
        // @ts-ignore
        if (!nameInput?.value) return;
        // @ts-ignore
        console.log(`Desde github: ${nameInput.value}`);
    });
};
