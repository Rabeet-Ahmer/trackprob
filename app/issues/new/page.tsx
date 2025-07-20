"use client";
import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IssueForm>();
  const [error, setError] = useState<string>("");

  return (
    <div className="max-w-xl space-y-4 mx-auto my-10">
      {error && <Callout.Root color="red" role="alert" size={"1"}>
        <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
      <form
        className="space-y-4"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An unexpected error occured!");
          }
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
        <Button
          type="submit"
          variant="soft"
          size={"3"}
          color="jade"
          radius="full"
        >
          Submit New Issue
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
