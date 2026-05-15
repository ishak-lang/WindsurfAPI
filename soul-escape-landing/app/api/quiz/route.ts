import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  const data = await request.json();
  const score = Number(data.burnout ?? 0) + Number(data.stress ?? 0) + Number(data.socialFatigue ?? 0);
  const recommendedTrack = score > 18 ? 'Deep Recovery Retreat' : 'Nature Reset Retreat';
  return NextResponse.json({ recommendedTrack, score });
}
