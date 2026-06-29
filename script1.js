window.onload = function () {

    const main = document.querySelector("main");

    main.style.opacity = "0";
    main.style.transform = "translateY(30px)";

    setTimeout(() => {

        main.style.transition = "all 1s";

        main.style.opacity = "1";

        main.style.transform = "translateY(0)";

    }, 200);

};