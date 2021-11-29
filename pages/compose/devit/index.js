import { useState } from "react";
import AppLayout from "components/AppLayout";
import Button from "components/Button";
import useUser from "hooks/useUser";
import { addDevit } from "../../../firebase/client";

const ComposeDevit = () => {
  const user = useUser();
  const [message, setMessage] = useState("");
  console.log(user);
  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDevit({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username,
    });
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
