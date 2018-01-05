<?php
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
