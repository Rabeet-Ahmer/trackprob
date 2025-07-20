import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error, { status: 400 });

  try {
    const newIssue = await prisma.issue.create({
      data: {
        title: validation.data.title,
        description: validation.data.description,
      },
    });
    return NextResponse.json(newIssue, { status: 201 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to create issue" },
      { status: 500 }
    );
  }
};
