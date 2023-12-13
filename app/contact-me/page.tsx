"use client";

import ButtonCmp from "@/components/ButtonCmp/ButtonCmp";
import InputCmp from "@/components/InputCmp/InputCmp";
import Label from "@/components/Label/Label";
import { useState } from "react";

const ContactMePage: React.FC = () => {
  const [isLoading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };
    const { name, email, message } = data;
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      // reset the form
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }

  return (
    <div className="w-full  h-full flex justify-center">
      <div className="flex justify-evenly flex-col al w-80 ">
        <Label
          size="large"
          bold
          classnameAddition="self-center underline"
          variant="primary"
        >
          Contact Me
        </Label>
        <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-col">
            <Label variant="default" htmlFor="name">
              Name
            </Label>
            <InputCmp
              type="text"
              minLength={3}
              maxLength={150}
              required
              id="name"
            />
          </div>
          <div className="w-full flex flex-col my-4">
            <Label variant="default" htmlFor="email">
              Email
            </Label>
            <InputCmp
              type="email"
              minLength={5}
              maxLength={150}
              required
              id="email"
            />
          </div>
          <div>
            <Label variant="default" htmlFor="message">
              Message
            </Label>
            <textarea
              rows={4}
              required
              minLength={10}
              maxLength={500}
              name="message"
              className="w-full p-4 bg-gray-100 border border-gray-150 "
            />
          </div>
          <ButtonCmp
            type="submit"
            disabled={isLoading}
            additionalClassname="mt-4"
            variant="primary"
          >
            Send Message
          </ButtonCmp>
        </form>
      </div>
    </div>
  );
};

export default ContactMePage;
