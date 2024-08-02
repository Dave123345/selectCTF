$(document).ready(function () {
    let correctFlag;

    // Load the modal content from modal.html
    $("#modalContainer").load("modal.html");

    // Fetch the correct flag from flag.json
    $.getJSON('flag.json', function (data) {
        correctFlag = data.correctFlag;
    });

    // Add event listener after loading the modal
    $(document).on('submit', '#flagForm', function (event) {
        event.preventDefault();
        console.log("Form submitted");
        const flagInput = $('#flagInput').val();
        console.log("Flag input:", flagInput);

        if (flagInput === correctFlag) {
            Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: 'You have entered the correct flag!',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'The flag you entered is incorrect.',
            });
        }
    });
});

// flag2
$(document).ready(function () {
    let correctFlag2;

    // Load the modal content from modal.html
    $("#modalContainer").load("modal.html");

    // Fetch the correct flag from flag.json
    $.getJSON('flag.json', function (data) {
        correctFlag2 = data.correctFlag2;
    });

    // Add event listener after loading the modal
    $(document).on('submit', '#flagForm2', function (event) {
        event.preventDefault();
        console.log("Form submitted");
        const flagInput = $('#flagInput2').val();
        console.log("Flag input:", flagInput);

        if (flagInput === correctFlag2) {
            Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: 'You have entered the correct flag!',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'The flag you entered is incorrect.',
            });
        }
    });
});

// flag3
$(document).ready(function () {
    let correctFlag3;

    // Load the modal content from modal.html
    $("#modalContainer").load("modal.html");

    // Fetch the correct flag from flag.json
    $.getJSON('flag.json', function (data) {
        correctFlag3 = data.correctFlag3;
    });

    // Add event listener after loading the modal
    $(document).on('submit', '#flagForm3', function (event) {
        event.preventDefault();
        console.log("Form submitted");
        const flagInput = $('#flagInput3').val();
        console.log("Flag input:", flagInput);

        if (flagInput === correctFlag3) {
            Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: 'You have entered the correct flag!',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'The flag you entered is incorrect.',
            });
        }
    });
});

// flag4
$(document).ready(function () {
    let correctFlag4;

    // Load the modal content from modal.html
    $("#modalContainer").load("modal.html");

    // Fetch the correct flag from flag.json
    $.getJSON('flag.json', function (data) {
        correctFlag4 = data.correctFlag4;
    });

    // Add event listener after loading the modal
    $(document).on('submit', '#flagForm4', function (event) {
        event.preventDefault();
        console.log("Form submitted");
        const flagInput = $('#flagInput4').val();
        console.log("Flag input:", flagInput);

        if (flagInput === correctFlag4) {
            Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: 'You have entered the correct flag!',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'The flag you entered is incorrect.',
            });
        }
    });
});

// flag5
$(document).ready(function () {
    let correctFlag5;

    // Load the modal content from modal.html
    $("#modalContainer").load("modal.html");

    // Fetch the correct flag from flag.json
    $.getJSON('flag.json', function (data) {
        correctFlag5 = data.correctFlag5;
    });

    // Add event listener after loading the modal
    $(document).on('submit', '#flagForm5', function (event) {
        event.preventDefault();
        console.log("Form submitted");
        const flagInput = $('#flagInput5').val();
        console.log("Flag input:", flagInput);

        if (flagInput === correctFlag5) {
            Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: 'You have entered the correct flag!',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'The flag you entered is incorrect.',
            });
        }
    });
});

// fla6
$(document).ready(function () {
    let correctFlag6;

    // Load the modal content from modal.html
    $("#modalContainer").load("modal.html");

    // Fetch the correct flag from flag.json
    $.getJSON('flag.json', function (data) {
        correctFlag6 = data.correctFlag6;
    });

    // Add event listener after loading the modal
    $(document).on('submit', '#flagForm6', function (event) {
        event.preventDefault();
        console.log("Form submitted");
        const flagInput = $('#flagInput6').val();
        console.log("Flag input:", flagInput);

        if (flagInput === correctFlag6) {
            Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: 'You have entered the correct flag!',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'The flag you entered is incorrect.',
            });
        }
    });
});

// fla7
$(document).ready(function () {
    let correctFlag7;

    // Load the modal content from modal.html
    $("#modalContainer").load("modal.html");

    // Fetch the correct flag from flag.json
    $.getJSON('flag.json', function (data) {
        correctFlag7 = data.correctFlag7;
    });

    // Add event listener after loading the modal
    $(document).on('submit', '#flagForm7', function (event) {
        event.preventDefault();
        console.log("Form submitted");
        const flagInput = $('#flagInput7').val();
        console.log("Flag input:", flagInput);

        if (flagInput === correctFlag7) {
            Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: 'You have entered the correct flag!',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'The flag you entered is incorrect.',
            });
        }
    });
});

// flag8
$(document).ready(function () {
    let correctFlag8;

    // Load the modal content from modal.html
    $("#modalContainer").load("modal.html");

    // Fetch the correct flag from flag.json
    $.getJSON('flag.json', function (data) {
        correctFlag8 = data.correctFlag8;
    });

    // Add event listener after loading the modal
    $(document).on('submit', '#flagForm8', function (event) {
        event.preventDefault();
        console.log("Form submitted");
        const flagInput = $('#flagInput8').val();
        console.log("Flag input:", flagInput);

        if (flagInput === correctFlag8) {
            Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: 'You have entered the correct flag!',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'The flag you entered is incorrect.',
            });
        }
    });
});

// flag8
$(document).ready(function () {
    let correctFlag9;

    // Load the modal content from modal.html
    $("#modalContainer").load("modal.html");

    // Fetch the correct flag from flag.json
    $.getJSON('flag.json', function (data) {
        correctFlag9 = data.correctFlag9;
    });

    // Add event listener after loading the modal
    $(document).on('submit', '#flagForm9', function (event) {
        event.preventDefault();
        console.log("Form submitted");
        const flagInput = $('#flagInput9').val();
        console.log("Flag input:", flagInput);

        if (flagInput === correctFlag9) {
            Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: 'You have entered the correct flag!',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'The flag you entered is incorrect.',
            });
        }
    });
});
