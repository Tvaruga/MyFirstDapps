/**
 * Created by Иван on 18.11.2017.
 */
$(document).ready(function() {
    $('#send').click(function(e2) {
        var $myInfureToken = 'duwNbB4ONSCoDfJxf5jn';
        var request = new XMLHttpRequest();

        request.open('POST', 'https://ropsten.infura.io/'+$myInfureToken);

        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Accept', 'application/json');

        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                //console.log('Status:', this.status);
                //console.log('Headers:', this.getAllResponseHeaders());
                console.log('Body:', this.responseText);

            var $res = this.responseText

            var $obj = JSON.parse(this.responseText);
            var $balance = parseInt($obj.result);
                $('#result').show();
                $('#count').html('<p>Address: ' + $('#address').val() + '<br/> balance: ' + $balance + ' wei .</p>');
            }
        };

        var body = {
            'jsonrpc': '2.0',
            'id': -29846618,
            'method': 'eth_getBalance',
            'params': [$("#address").val(), "latest"]
        };

        request.send(JSON.stringify(body));

    });

});