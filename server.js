import express from "express";

const app = express();
app.use(express.json());

const FULL_NAME = "vansh_sharma"; 
const DOB = "16032005";       
const EMAIL = "vansh.sharma2022@vitstudent.ac.in"; 
const ROLL_NUMBER = "22BCE3075"; 

function isNumeric(str) {
  return /^\d+$/.test(str);
}

function alternatingCaps(str) {
  let result = "";
  let upper = true;
  for (let ch of str) {
    result += upper ? ch.toUpperCase() : ch.toLowerCase();
    upper = !upper;
  }
  return result;
}

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        user_id: `${FULL_NAME}_${DOB}`,
        email: EMAIL,
        roll_number: ROLL_NUMBER,
        message: "Invalid input. 'data' must be an array."
      });
    }

    if (!data.every(item => typeof item === "string")) {
      return res.status(400).json({
        is_success: false,
        user_id: `${FULL_NAME}_${DOB}`,
        email: EMAIL,
        roll_number: ROLL_NUMBER,
        message: "Invalid input format. All elements in 'data' must be strings."
      });
    }

    let odd_numbers = [];
    let even_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;

    data.forEach(item => {
      if (isNumeric(item)) {
        let num = parseInt(item, 10);
        if (num % 2 === 0) {
          even_numbers.push(item);
        } else {
          odd_numbers.push(item);
        }
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        special_characters.push(item);
      }
    });

    const concat_input = alphabets.join("");
    const concat_string = alternatingCaps(concat_input.split("").reverse().join(""));

    const response = {
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string
    };

    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      is_success: false,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      message: err.message
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

