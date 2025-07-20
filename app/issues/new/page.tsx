"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IssueForm>();

  return (
    <form
      className="max-w-xl space-y-4 mx-auto my-10"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}
    >
      <TextField.Root
        placeholder="Title"
        size={"3"}
        color="green"
        variant="soft"
        {...register("title")}
      />
      <TextArea
        className="h-80"
        size={"3"}
        placeholder="Description"
        variant="soft"
        color="yellow"
        {...register("description")}
      />
      <Button type="submit" variant="soft" size={"3"} color="jade" radius="full">
        Submit New Issue
      </Button>
    </form>
  );
};

export default NewIssuePage;
