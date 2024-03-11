import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_rgFZf0aR2GqiwTrWT8tXuPa1jTtS2VmBkoW3kV0Y');


convertCurrency("INR" , "USD" , 3);

   
async function convertCurrency(fromCurrency, toCurrency , units){
        const res = await freecurrencyapi.latest({
                    base_currency:fromCurrency,
                    currencies:toCurrency
        });
        const multiplier  = res.data[toCurrency];
        console.log(multiplier);
}
