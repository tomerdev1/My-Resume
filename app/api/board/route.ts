import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const GET = async (req: NextRequest) => {
  try {
    const res = await axios.get("https://www.boredapi.com/api/activity/");
    return NextResponse.json({ message: res.data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500 });
  }
};
