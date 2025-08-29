# Full Stack REST API – VIT Task

## Objective
This project implements a **REST API** that takes an array input and returns a structured response containing:

1. Status of the operation
2. User ID
3. Email ID
4. College Roll Number
5. Array of even numbers
6. Array of odd numbers
7. Array of alphabets (converted to uppercase)
8. Array of special characters
9. Sum of numbers
10. Concatenation of all alphabetical characters in reverse order with alternating caps

---

## Tech Stack
- **Backend**: Node.js with Express.js
- **Hosting**: [Render](https://render.com) (can be replaced with Vercel, Railway, or any REST API hosting provider)

---

## Hosted API
**Base URL**:  
[https://bajajfinserv-32bn.onrender.com/bfhl](https://bajajfinserv-32bn.onrender.com/bfhl)

**Method**: POST  
**Route**: `/bfhl`  
**Expected status code for success**: `200`

### Example Request
```json
{
  "data": ["a","1","334","4","R","$"]
}
