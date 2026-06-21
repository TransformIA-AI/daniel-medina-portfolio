import { redirect } from "next/navigation";

type CaseRedirectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CaseRedirectPage({ params }: CaseRedirectPageProps) {
  const { slug } = await params;
  redirect(`/es/case/${slug}`);
}
