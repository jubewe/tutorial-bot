const { oberknechtClient } = require("oberknecht-client");

const client = new oberknechtClient({
    token: ""
});

client.connect();

client.onReady(() => {
    console.log("Client Ready");

    client.join("jubewe");
});

client.onPRIVMSG(message => {
    console.log(`${message.channelName} ${message.senderUserName}: ${message.messageText}`);

    let command = message.messageText.split(" ")[0].split("!")[1];

    if (command) {
        switch (command) {
            
        };
    };
});

client.onError(e => {
    console.error(e);
});