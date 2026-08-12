import { ProductDetail } from "@/components/ProductDetail";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;

  return (
    <main className="min-h-screen bg-white">
      <ProductDetail slug={resolvedParams.slug} />
    </main>
  );
}
