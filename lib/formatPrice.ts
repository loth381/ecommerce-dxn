export function formatPrice(price: number): string {
  // Validar que el precio es un número válido
  if (isNaN(price) || price < 0) {
    throw new Error("Invalid price value");
  }

  // Crear un formateador para precios en soles peruanos
  const priceFormatter = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2, // Asegura que siempre haya dos decimales
    maximumFractionDigits: 2, // Limita a dos decimales
  });

  // Formatear el precio
  const formattedPrice = priceFormatter.format(price);

  return formattedPrice;
}
