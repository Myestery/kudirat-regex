$(document).ready(function () {
    const elements = [{
            name: "#fullname",
            helper: "#helpfullname",
            rule: /^[a-zA-Z\s]{2,}$/
        },
        {
            name: "#email",
            helper: "#helpemail",
            rule: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        },
        {
            name: "#username",
            helper: "#helpusername",
            rule: /^[a-zA-Z0-9]+$/
        },
        {
            name: "#date",
            helper: "#helpdate",
            rule: /^[0-9]{2}-[0-9]{2}-[0-9]{4}$/
        },
        {
            name: "#website",
            helper: "#helpwebsite",
            rule: /(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
        },
        {
            name: "#address",
            helper: "#helpaddress",
            rule: /No \d, ?.+, ?.+, ?.+/
        },
    ];
    const loadDOM = () => {
        elements.forEach((element) => {
            $(element.name).keyup(function () {
                CheckValidity($(this).val(), element);
            });
        });
    };
    const CheckValidity = (value, element) => {
        if (element.rule.test(value)) {
            $(element.helper).html("Good input");
        } else {
            $(element.helper).html("Input failed the test");
        }
    };
    loadDOM();
});
// Johnpaul