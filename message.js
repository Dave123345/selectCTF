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