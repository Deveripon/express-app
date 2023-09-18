import axios from "axios";
export const sendOtp = (req, res) => {
    axios
        .get(
            `http://bulksmsbd.net/api/smsapi?api_key=rcvhoqrAmkxEWrfyYIKQ&type=text&number=${req.body.cell}&senderid=8809617612985&message=Hi this is a test message`
        )
        .then((res) => {
            console.log("OTP sent");
        })
        .catch((err) => {
            console.log(err);
        });
};
