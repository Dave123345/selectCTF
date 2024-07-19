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