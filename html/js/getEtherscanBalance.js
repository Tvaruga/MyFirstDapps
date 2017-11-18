/**
 * Created by Иван on 18.11.2017.
 */
jQuery(
    function($){
    var $ethercanApiToken = 'NVIC5WQ6ZNNI3V26PCGCP7DM387ISZDYC7';
    var $addressWallet = "0x278fDeDC9f2FA45baC875BaA770DC55202c2C091";
    var $addressContractt = "0x52fe2e7955d1f2425ffcb1a105c0ba059ace469b";
    var $url = "https://ropsten.etherscan.io/api";
        $.ajax(
            {
                url: $url,
                type:'POST',
                data:{
                    module:"account",
                    action:"balance",
                    address:$addressWallet,
                    tag:"latest",
                    apikey: $ethercanApiToken
                },
                dataType: 'json',
                success: function($data){
                 var $balance = parseInt($data.result)*0.000000000000000001;
                    $('#accauntBalance').text($balance.toFixed(3));
                }

            }
        )

        $.ajax(
            {
                url: $url,//'https://api.etherscan.io/api',
                type:'POST',
                data:{
                    module:"stats",
                    action:"tokensupply",
                    contractaddress: $addressContractt,
                    apikey: $ethercanApiToken
                },
                dataType: 'json',
                success: function($data){
                var $balanceToken = $data.result;
                    $('#accauntTokenBalance').text($balanceToken.toString(10));
                    console.log($data.result);
                }

            }
        )
    }
);
