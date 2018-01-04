var request = require('request');

class CryptoBot {
	constructor(options={}){
		this.API_URL = options.API_URL || "https://api.coinmarketcap.com/v1/ticker";
	}

	pars3JSON(url, callback){
		let opt = {
			url: this.API_URL+url,
			method: "GET",
			timeout: 360,
			agent: false,
			headers: {
				'User-Agent': 'Mozilla/6.9 (compatible; https://github.com/cryptom4n/crypto-bot)',
				'Content-type': 'application/x-www-form-urlencoded'
			}
		};
		request(opt, (error, response, body) => {
			if(error){ 
				callback(false);
				return this;
			}
			if(response && response.statusCode == 200){
				callback(JSON.parse(body))
			} else {
				callback(false);
				return this;
			}
		});
	}

	get(coin, callback){
		if(callback){
			this.pars3JSON(`/${coin}/`, (res) => {
			//this.pars3JSON(`/${coin}/?convert=${this.convert}`, (res) => {
				//if(res){callback(res[0]);}
				if(res){callback(res);}
			});
			return this;
		} else {
			return false;
		}
	}
}

module.exports = CryptoBot;
