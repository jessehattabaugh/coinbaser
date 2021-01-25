# coinbaser

an app for automating coinbase trades

## Problem

As a CoinBase user, I have a diversified holding of up to 44 crypto coins. Whenever the market starts to free fall, I must then excute up to 44 trades of those coins into stablecoins in order to lock in my gains. This is cumbersome to do with the CoinBase apps. Furthermore, when the market starts to rebound I need to be able to rediverisfy my holdings by spreading my balance over the various coins in ammounts proportional to their market-cap, and performance. This is again, cumbersome, and the sunk cost of doing it manually discourages me.

## Discovery

CoinBase offers two APIs with a lot of overlapping and exclusive features. 

### Basic API

- Allows OAuth authentication which allows the app to request the permissions it needs instead of forcing he user to create an API key and assign appropriate permissions manually.
- Provides access to users' Basic CoinBase profile which is what users are more likely to have.

### Pro API

- Allows trading ALL coins, not just BTC, BCH, LTC, and ETH.
- Provides sandbox environments which allow testing arbitrary balances and transfers without transfering real funds.
