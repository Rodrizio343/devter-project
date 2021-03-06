import { useEffect } from "react";
import Head from "next/head";
import AppLayout from "components/AppLayout";
import Button from "components/Button";
import GitHub from "components/GitHub";
import { colors } from "styles/theme";
import { loginWithGitHub } from "../firebase/client";
import { Avatar } from "components/Avatar";
import { useRouter } from "next/router";
import useUser, { USER_STATES } from "hooks/useUser";

export default function Home() {
  const router = useRouter();
  const user = useUser();
  useEffect(() => {
    user && router.replace("/home");
  }, [user]);

  const handleClick = () => {
    loginWithGitHub().catch((err) => console.log(err));
  };

  return (
    <>
      <Head>
        <title>Devter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src="/logo.jpg" />
          <h1>Devter</h1>
          <h2>Talk about development with developers</h2>
          {user === USER_STATES.NOT_LOGGED && (
            <Button onClick={handleClick}>
              <GitHub fill="#fff" />
              Login with GitHub
            </Button>
          )}
          {user === USER_STATES.NOT_KNOWN && <p>Cargando...</p>}
          {user && user.avatar && (
            <Avatar
              src={user.avatar}
              alt={user.username}
              text={user.username}
              withText
            />
          )}
        </section>
      </AppLayout>
      <style jsx>{`
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }
        img {
          width: 120px;
        }
        h1 {
          color: ${colors.secondary};
          font-weight: 800;
          margin-bottom: 16px;
        }
        h2 {
          color: ${colors.primary};
          font-size: 21px;
          margin-bottom: 16px;
          margin-top: 0;
        }
      `}</style>
    </>
  );
}
