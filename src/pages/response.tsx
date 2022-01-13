import type { GetServerSideProps, NextPage } from "next";

import { Response } from "@components/Response";
import { UsersSlice } from "@redux/users";
import { wrapper } from "@redux/core";

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    console.log("2. Page.getServerSideProps uses the store to dispatch things");
    store.dispatch(
      UsersSlice.actions.set({
        email: "sittha@mail.com",
        firstName: "sittha",
        lastName: "ragsasawat",
      })
    );

    return {
      props: {},
    };
  });

const Home: NextPage = () => {
  return (
    <div>
      <Response />
    </div>
  );
};

export default Home;
