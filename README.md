<div align="center">
<img src="favicon.ico" width="42" height="42" alt="HeyGen Icon"/>

# Realtime Avatar Streaming Demo

[![](https://img.shields.io/badge/HeyGen-Realtime_Avatar_API-blue?logo=readme)](https://docs.heygen.com/docs/realtime-avatar-api) [![](https://img.shields.io/badge/MDN-WebRTC-111?logo=webrtc)](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)

</div>

This demo showcases the capabilities of HeyGen's Realtime Avatar API, allowing you to stream real-time avatars with ease.

Before getting started, please make sure you have the necessary prerequisites in place and follow the steps outlined below to run and explore this demo.

## Pre-Requisites

- Apply for access as a real-time avatar whitelist user.
- Node.js and npm installed on your system.
- API key from [HeyGen](https://app.heygen.com/settings).

## Getting Started

Follow these steps to run the demo:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/HeyGen-Official/RealtimeDemoV2.git
   ```

2. Open the `api.json` file put your **api key** and change your parameters. _You can also set the parameters from the web interface._

   ```json
   {
     "server_url": "https://api.heygen.com",
     "upload_url": "https://upload.heygen.com",
     "api_key": "<api_key>",
     "avatar": {
       "avatar_type": "<avatar_type>",
       "photar_id": "<photar_id>",
       "avatar_id": "<avatar_id>"
     },
     "voice": {
       "voice_id": "<voice_id>"
     },
     "silence_video_url": "<silence_video_url>"
   }
   ```

3. Open a terminal in the project folder and _install_ the necessary dependencies and _start_ the server:

   ```bash
   npm install express
   node server.js
   ```

You will see the message `App is listening on port 3000!` indicating that the server is running.

## Using the Demo

1. Open your web browser and navigate to [localhost:3000](http://localhost:3000/) to start the demo.
2. _(Optional)_ Select your talking photo image and click the "Upload" button to obtain the photar_id.
3. _(Optional)_ Click the "Generate Silent Video" button to get a silent video. The video will autoplay after generation is completed.
4. Click the "Connect" button to create a new session. The status updates will be displayed on the screen.
5. After the session is created successfully, type the text in the provided input field and click the "Talk" button to send a task to the avatar.
6. Once you are done, click the "Close" button to terminate the session.

Remember, this is a demo and should be modified according to your needs and preferences. Happy coding!

## Troubleshooting

In case you face any issues while running the demo or have any questions, feel free to raise an issue in this repository or contact our support team.

Please note, if you encounter a "Server Error", it could be due to the server being offline. In such cases, please contact the service provider.
