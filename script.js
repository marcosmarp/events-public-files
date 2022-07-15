window.onload = () => {
    const form = document.getElementById("form");
    const inputs = document.getElementsByTagName("input");
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("eventId");

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(async (mutation) => {
            if (
                mutation.type === "attributes" &&
                mutation.attributeName === "data-submission-phase"
            ) {
                var fullName;
                var email;
                var phone;
                var company;
                var city;
                var country;
                for (let inp of inputs) {
                    switch (inp.placeholder) {
                        case "Nombre y apellido":
                            fullName = inp.value;
                            break;
                        case "E-mail":
                            email = inp.value;
                            break;
                        case "Teléfono":
                            phone = inp.value;
                            break;
                        case "Empresa":
                            company = inp.value;
                            break;
                        case "Ciudad":
                            city = inp.value;
                            break;
                        case "País":
                            country = inp.value;
                            break;
                    }
                }
                await registerUserInEvent(
                    eventId,
                    fullName,
                    email,
                    phone,
                    company,
                    city,
                    country
                );
            }
        });
    });

    //  @ts-ignore
    observer.observe(form, {
        attributes: true,
    });
};

const registerUserInEvent = async (
    eventId,
    fullName,
    email,
    phone,
    company,
    city,
    country
) => {
    const url = `https://mm-events.vercel.app/registered?eventId=${eventId}&fullName=${fullName}&email=${email}&phone=${phone}&company=${company}&city=${city}&country=${country}`;
    window.location.href = url;
};
