// DEPENDENCIES
const { app } = require('@azure/functions');
const { EmailClient } = require('@azure/communication-email');
require('dotenv').config();

const acs = process.env.ACS_CONNECTION_STRING;
const email = process.env.EMAIL;


app.http('submitForm', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function submitForm processed request for url "${request.url}"`);
        
        try {           
            const {name, email, message} = await request.json();
            
            context.log('this is the parsed to object using the const: ' + name, email, message);
            
            // Set up the Email Client for Azure Communication Services
             const emailClient = new EmailClient(acs);
            
            //build the message object
             const emailMessage = {
                senderAddress: 'DoNotReply@7bc1c799-0916-404a-b2e5-5b00a29f4b7b.azurecomm.net', // Replace with your verified sender domain
                content: {
                  subject: 'jakubsvoboda.net contact',
                  plainText: `You have received a new message from: \n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
                },
                recipients: {
                  to: [
                    {
                      address: 'jakubsvobodacz@gmail.com',
                      displayName: 'Jakub'
                    }
                  ]
                }
              };

            //send the email using the poller (it checks what is the state of the email being send using the ACS)
            const poller = await emailClient.beginSend(emailMessage);
            // poll until done
            const response = await poller.pollUntilDone();
            context.log('Poller result:', response);


            // Check if the email was successfully accepted
            if (response && response.status === 'Succeeded') {
                return {
                    status: 200,
                    body: 'Form submitted successfully'
                };
            } else {
                context.log('Response from ACS', response);
                throw new Error('Failed to send email. No messageId returned.');
            }

        } catch (error) {
            context.log(`Error handling form submission: ${error.message}`);
            context.log(`Stack trace: ${error.stack}`);
            return {
                status: 500,
                body: 'An error occurred. Please try again later.'
            };
        }
    }
});
