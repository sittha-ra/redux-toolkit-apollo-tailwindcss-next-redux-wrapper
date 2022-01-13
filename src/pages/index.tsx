import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "@hook/redux";

import type { NextPage } from "next";
import { Response } from "@components/Response";
import { UsersSlice } from "@redux/users";
import { UsersState } from "@models";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  // const [cookies, setCookie, removeCookie] = useCookies(["name", "lastName"]);
  const user = useSelector((s) => s.users);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsersState>({ defaultValues: user });

  const onSubmit: SubmitHandler<UsersState> = (data) => {
    dispatch(UsersSlice.actions.set(data));

    router.push("/response");
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form className="mt-8 space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <div>
                <p>Email Address is required.</p>
              </div>
            )}
            <div>
              <label htmlFor="email-address" className="sr-only">
                First Name
              </label>
              <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
                {...register("firstName")}
              />
            </div>
            <div>{errors.firstName && <p>Name is required.</p>}</div>
          </div>

          {/* <div className="flex items-center justify-between"></div> */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              บันทึก
            </button>
          </div>
          <div>
            <button
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                dispatch(UsersSlice.actions.reset());
              }}
            >
              ลบ
            </button>
          </div>
        </form>
      </div>
      {user && <Response />}
    </div>
  );
};

export default Home;
