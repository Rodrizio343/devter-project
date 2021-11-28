import { useState } from "react";
import AppLayout from "components/AppLayout";
import Button from "components/Button";

const ComposeDevit = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <AppLayout>
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={handleChange}
            placeholder="¿Qué está pasando?"
          ></textarea>
          <div>
            <Button disabled={!message.length}>Devitear</Button>
          </div>
        </form>
      </AppLayout>
      <style jsx>{`
        div {
          padding: 15px;
        }
        textarea {
          border: 0;
          font-size: 21px;
          min-height: 200px;
          outline: none;
          padding: 15px;
          resize: none;
          width: 100%;
        }
      `}</style>
    </>
  );
};
export default ComposeDevit;
