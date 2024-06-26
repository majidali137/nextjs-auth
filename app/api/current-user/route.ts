import { getUserById } from '@/data/user';
import { currentUser } from '@/lib/auth';

export async function GET(): Promise<Response> {
  const user = await currentUser();

  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
  }

  return new Response(JSON.stringify(dbUser), { status: 200 });
}
