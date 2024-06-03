import { NextRequest, NextResponse } from 'next/server';
import { getUserById } from '@/data/user';
import { currentUser } from '@/lib/auth';

export async function GET(req: NextRequest) {
const user = await currentUser();

if (!user) {
  return { error: "Unauthorized" };
}
const dbUser = await getUserById(user.id)

  if (!dbUser) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(dbUser);
}
