$(function() {

    var $happyPer = $(' #happyPer');

    $('#sendBtn').on('click', function() {
        var text = $('#inputText').val();
        postMessage(text);
    });


    function postMessage(text) {

        $happyPer.fadeOut();

        $.post(
            'https://apiv2.indico.io/sentiment',
            JSON.stringify({
                'api_key': "ceeb5ced4e92f31ba9299ba9bd2f68d4",
                'data': text,
            })
        ).then(function(res) {
            var response = JSON.parse(res);
            var happyPer = Math.floor(response.results * 100);
            var imgNum = Math.floor(Math.random() * 10);
            $('#happyImg').attr('src', 'images/img0' + imgNum + '.jpg');

            setTimeout(function() {
                $happyPer.html('<span class="label">幸福度</span><p>' + happyPer + '<span>%</span></p>');
                $happyPer.fadeIn();
            }, 500);

        });
    }

});



// single example


// // batch example
// $.post(
//     'https://apiv2.indico.io/sentiment/batch',
//     JSON.stringify({
//         'api_key': "ceeb5ced4e92f31ba9299ba9bd2f68d4",
//         'data': [
//             "I love writing code!",
//             "Alexander and the Terrible, Horrible, No Good, Very Bad Day"
//         ]
//     })
// ).then(function(res) { console.log(res) });