const eventKeys = require("./event-keys");

const OtherServiceHandler = (data) => {
    console.log("Got a new messge when new order is created", JSON.stringify(data, null, 2));
    // here we can write logic to do the business requirements and actions
}


const eventHandlers = {
    [eventKeys.Other_Service_name]: OtherServiceHandler,
};

// Handlers based on type(eventKey) with data
const kafkaHandler = (key, value) => {
    const data = value && JSON.parse(value.toString());
    const handler = eventHandlers[key];
    if (handler) handler(data);
}





module.exports = kafkaHandler;