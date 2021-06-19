# `RUACH - Backend` - Bible api using [API.bible](https://scripture.api.bible/)

* RUACH data massagers hits the [API.bible](https://scripture.api.bible/) apis and gets the data.
* This data is stored as Documents in Mongo DB which is then Consumed by the RUACH backend apis.
* The response from Ruach apis is kind of a trimmed down version of the actual data.

* These API's hosted initially in heroku will be consumed by the [RUACH - Frontend web (Angular)](https://github.com/ShinuMathew/ruach-FE) and [RUACH - Mobile Frontend (Flutter)](https://github.com/ShinuMathew/ruach-mobile_FE)