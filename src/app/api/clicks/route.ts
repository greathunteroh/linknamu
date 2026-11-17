import { NextResponse } from "next/server";
import { DB_NAME, getMongoClient } from "@/lib/mongodb";
import { links } from "@/data/profile";

export const dynamic = "force-dynamic";

const validIds = new Set(links.map((link) => link.id));

// 링크 클릭 1회 기록. sendBeacon은 text/plain으로 보내므로 text로 받아서 파싱합니다.
export async function POST(request: Request) {
  let linkId: unknown;
  try {
    linkId = JSON.parse(await request.text()).linkId;
  } catch {
    return NextResponse.json({ error: "잘못된 요청" }, { status: 400 });
  }
  if (typeof linkId !== "string" || !validIds.has(linkId)) {
    return NextResponse.json({ error: "알 수 없는 링크" }, { status: 400 });
  }

  const clientPromise = getMongoClient();
  if (!clientPromise) {
    return NextResponse.json({ error: "MONGODB_URI 미설정" }, { status: 503 });
  }

  const client = await clientPromise;
  await client
    .db(DB_NAME)
    .collection("clicks")
    .updateOne({ linkId }, { $inc: { count: 1 } }, { upsert: true });

  return NextResponse.json({ ok: true });
}

// 링크별 클릭 수 조회
export async function GET() {
  const clientPromise = getMongoClient();
  if (!clientPromise) {
    return NextResponse.json({ error: "MONGODB_URI 미설정" }, { status: 503 });
  }

  const client = await clientPromise;
  const docs = await client
    .db(DB_NAME)
    .collection<{ linkId: string; count: number }>("clicks")
    .find({}, { projection: { _id: 0 } })
    .toArray();

  return NextResponse.json(
    Object.fromEntries(docs.map((doc) => [doc.linkId, doc.count]))
  );
}
