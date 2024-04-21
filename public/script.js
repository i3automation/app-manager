$(document).ready(function() {
    $.getJSON("/config.json", function(config) {
        // Initially hide all rows
        $("tbody tr").hide();

        // Iterate over the applications in the config
        config.applications.forEach(function(app) {
            // Construct the row's ID and show it
            $("#row" + app).show();
        });
    });

    $('#stopA111').click(function () {
        $.get('/stop_a1111', function (data) {
            alert(data);
        });
    });

    $('#startA111').click(function () {
        $.get('/start_a1111', function (data) {
            alert(data);
        });
    });

    $('#stopAutomatic').click(function () {
        $.get('/stop_automatic', function (data) {
            alert(data);
        });
    });

    $('#startAutomatic').click(function () {
        $.get('/start_automatic', function (data) {
            alert(data);
        });
    });

    $('#stopKohya').click(function () {
        $.get('/stop_kohya', function (data) {
            alert(data);
        });
    });

    $('#startKohya').click(function () {
        $.get('/start_kohya', function (data) {
            alert(data);
        });
    });

    $('#stopComfyUI').click(function () {
        $.get('/stop_comfyui', function (data) {
            alert(data);
        });
    });

    $('#startComfyUI').click(function () {
        $.get('/start_comfyui', function (data) {
            alert(data);
        });
    });
});
