import type { Metadata } from "next";
import { getSellerInfo } from '@/utils/api';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: "Ms Right kw",
  description: "وسائل تعليمية تنمي تفكير وذكاء الأطفال",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let seller = null;
  try {
    seller = await getSellerInfo();
  } catch (e) {
    seller = null;
  }
  return (
    <html lang="ar" dir="rtl">
      <ClientLayout seller={seller}>{children}</ClientLayout>
    </html>
  );
}
