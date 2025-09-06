export function formatSku(sku: Record<string, string>): string {
  return Object.values(sku).filter(Boolean).join("/");
}
