const router = require("express").Router();
const nodemailer = require("nodemailer");


router.post("/sendForm", async (req, res) => {
    try {
        const {
            name,
            occupation,
            address,
            phone,
            state,
            country,
            email,
            category,
            city,
            airport,
            dob,
            sex,
            maritalStatus,
            couponCode
        } = req.body;


        const body = `
<p>Name: ${name}</p>
<p>Occupation: ${occupation}</p>
<p>Address: ${address}</p>
<p>Phone: ${phone}</p>
<p>Email: ${email}</p>
<p>Country: ${country}</p>
<p>State: ${state}</p>
<p>City: ${city}</p>
<p>Airport: ${airport}</p>
<p>DOB: ${dob}</p>
<p>Sex: ${sex}</p>
<p>Marital Status: ${maritalStatus}</p>
<p>Category: ${category}</p>
<p>Coupon Code: ${couponCode}</p>
        `
        let transporter = nodemailer.createTransport({
            host: "smtp.zoho.com",
            secure: true,
            port: 465,
            auth: {
                user: process.env.mail,
                pass: process.env.mailPass,
            },
        });

        const mailOptions = {
            from: "admin@meetandgreetbooking.com", // sender address
            to: "info@meetandgreetbooking.com",
            subject: "FAN CARD REQUEST", // Subject line
            html: body, // plain text body
        };

        await transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
            }
        })

        return res.status(200).json({
            success: true,
            msg: "sent"
        })

    } catch (err) {
        console.log(err);
        return res.status(400).json({ msg: "internal server error" })
    }
});


module.exports = router;