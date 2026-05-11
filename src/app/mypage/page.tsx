// src/app/mypage/page.tsx

"use client";

import { useEffect, useState } from "react";

export default function MyPage() {
  const [user, setUser] = useState<{
    id: number;
    email: string;
    name: string;
  } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
        {
          credentials: "include", // 쿠키 포함
        },
      );

      if (!response.ok) {
        throw new Error("사용자 정보 조회 실패");
      }
      const data = await response.json();
      console.log({ data });
      setUser(data);
    };
    fetchUser();
  }, []);
  return (
    <div>
      <h1>마이페이지</h1>
      <p>아이디: {user?.id}</p>
      <p>이메일: {user?.email}</p>
      <p>이름: {user?.name}</p>
    </div>
  );
}
