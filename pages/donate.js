import * as React from 'react';


export default function Donate() {

const [mounted, setMounted] = React.useState(false);
React.useEffect(() => setMounted(true), []);
React.useEffect(() => {
  const Script = document.createElement("script");
  //id should be same as given to form element
  const Form = document.getElementById("donateForm");
  Script.setAttribute(
    "src",
    "https://checkout.razorpay.com/v1/payment-button.js"
  );
  Script.setAttribute("data-payment_button_id", "pl_JuUWJtIxwu6KDb");
  if (Form) {
    Form.appendChild(Script);
  }
}, [mounted]);


return mounted ? <form id="donateForm"></form> : null}
