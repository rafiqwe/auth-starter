export function userProfile() {
  return `
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Image from "next/image";
import { SignOutButton } from "./SignOutButton";

export default async function UserProfile() {
  const session = await getServerSession(authOptions);
  if (!session) return null;
  return (
    <div className="flex items-center gap-3 bg-amber-50 rounded-xl p-2 text-black">
      {session.user?.image && (
        <Image
          src={session.user.image}
          alt="User Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      <div>
        <p className="font-medium">{session.user?.name}</p>
        <p className="text-sm opacity-70">{session.user?.email}</p>
      </div>
      <div>
        <SignOutButton />
      </div>
    </div>
  );
}
`;
}
