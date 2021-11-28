import { useState, useEffect } from "react";
import AppLayout from "components/AppLayout";
import { Devit } from "components/Devit";

const HomePage = () => {
  const [timeline, setTimeline] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline);
  }, []);
  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ avatar, username, message, id }) => {
            return (
              <Devit
                key={id}
                avatar={avatar}
                username={username}
                message={message}
                id={id}
              />
            );
          })}
        </section>
        <nav></nav>
        <style jsx>{`
          header {
            align-items: center;
            border-bottom: 1px solid #ccc;
            display: flex;
            height: 49px;
            position: sticky;
            top: 0;
            width: 100%;
          }
          h2 {
            font-weight: 700;
            font-size: 21px;
          }
          section {
            padding-top: 49px;
          }
          nav {
            bottom: 0;
            border-top: 1px solid #ccc;
            height: 49px;
            position: fixed;
            width: 100%;
          }
        `}</style>
      </AppLayout>
    </>
  );
};

export default HomePage;
