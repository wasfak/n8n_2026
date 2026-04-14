import SendForm from "@/components/SendForm";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

const AiPage = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="">
      <p>Welcome, {user?.firstName}</p>
      <SendForm />
    </div>
  );
};

export default AiPage;
