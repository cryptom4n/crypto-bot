<?php
header("Content-Type: application/json; charset=UTF-8");

function cryptobot($sym)
{
    $url="https://api.coinmarketcap.com/v1/ticker/$sym/?convert=EUR";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
}
$btc = cryptobot("bitcoin");


$dec_btc = json_decode($btc, true);


$json_array = array(
        // =====================================================
        // /////////////////////////////////////////////////////
        // =====================================================

            // =====================================================
            // =====================================================
            "BTC" => array(
                  "RANK" => "{$dec_btc['0']['rank']}",
                  "NAME" => "{$dec_btc['0']['name']}",
                  "SYMBOL" => "{$dec_btc['0']['symbol']}",
                  "PRICE_USD" => "{$dec_btc['0']['price_usd']}",
                  "PRICE_EUR" => "{$dec_btc['0']['price_eur']}",
                  "CH24" => "{$dec_btc['0']['percent_change_24h']}"
              ),
            // =====================================================
            // =====================================================

        // =====================================================
        // /////////////////////////////////////////////////////
        // =====================================================
);
$prices = json_encode($json_array);
echo $prices;
?>
