// Axios in Backend (Node Js)

const axios = require("axios");

async function main (){

        const response = await axios.post(" https://httpdump.app/dumps/15e1b995-5cbb-454f-9d88-9eaf1e59ef1f",
        {
            username : "Faheem"
        },
        {
            headers: {
                auth: "123"
            },
        },
        );
        console.log(response.data);

    }
    main();