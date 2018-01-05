<?php
header("Content-Type: application/json; charset=UTF-8");
require('lib.php');
$xmr = cryptobot("monero");
$dec_xmr = json_decode($xmr, true);
$json_array = array(
        // =====================================================
        // /////////////////////////////////////////////////////
        // =====================================================
            // =====================================================
            // =====================================================
            "RANK" => "{$dec_xmr['0']['rank']}",
            "NAME" => "{$dec_xmr['0']['name']}",
            "SYMBOL" => "{$dec_xmr['0']['symbol']}",
            "PRICE_USD" => "{$dec_xmr['0']['price_usd']}",
            "PRICE_EUR" => "{$dec_xmr['0']['price_eur']}",
            "PRICE_BTC" => "{$dec_xmr['0']['price_btc']}",
            "CH1H" => "{$dec_xmr['0']['percent_change_1h']}"
            // =====================================================
            // =====================================================
        // =====================================================
        // /////////////////////////////////////////////////////
        // =====================================================
);
$prices = json_encode($json_array);
echo $prices;
?>
