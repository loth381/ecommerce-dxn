"use client";

import { makePaymentRequest } from "@/api/payment";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { loadStripe } from "@stripe/stripe-js";
import { FaWhatsapp } from "react-icons/fa";
import CartItem from "./components/cart-item";

export default function Page() {
  const { items, removeAll } = useCart();
  const prices = items.map((product) => product.attributes.price);
  const totalPrice = prices.reduce((total, price) => total + price, 0);
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
  );

  const buyStripe = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: items,
      });
      removeAll();
      
      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
      
    } catch (error) {
      console.error("Error al realizar el pago:", error); // Mejor manejo de errores
      alert("Hubo un problema al procesar el pago. Inténtalo de nuevo."); // Mensaje de error para el usuario
    }
  };

  const handleWhatsApp = () => {
    const productDetails = items.map((item) => `- ${item.attributes.productName}: ${formatPrice(item.attributes.price)}`).join("\n");
    const message = `Hola, me gustaría comprar los siguientes productos:\n\n${productDetails}\n\nTotal: ${formatPrice(totalPrice)}`;
    const phoneNumber = "51930134408"; // Reemplaza con tu número de WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  };

  // const handlePurchase = () => {
  //   const productDetails = items.map((item) => `- ${item.attributes.name}: ${formatPrice(item.attributes.price)}`).join("\n");
  //   const message = `Hola, me gustaría comprar los siguientes productos:\n\n${productDetails}\n\nTotal: ${formatPrice(totalPrice)}`;
  //   const phoneNumber = "51930134408"; // Reemplaza con tu número de WhatsApp
  //   const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  //   window.open(whatsappLink, "_blank");
  // };
  return (
    <div className=" max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-5 text-3xl font-bold">Cart</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {items.length === 0 && <p>No hay productos en el carrito</p>}
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
        </div>
        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-slate-100 shadow-lg">
            <p className="mb-3 text-lg font-semibold dark:text-slate-900">order</p>
            <Separator />
            <div className="flex justify-between gap-5 my-5">
            <p className="font-medium dark:text-slate-900">Total del Pedido:</p> 
            <p className="font-bold dark:text-slate-900" >{formatPrice(totalPrice)}</p> 
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button className="w-full dark:bg-slate-900 dark:text-white" onClick={buyStripe}>
                Comprar
              </Button>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button className="w-full flex items-center justify-center dark:bg-slate-900 dark:text-white" onClick={handleWhatsApp}>
                <FaWhatsapp className="mr-2" /> Contactar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
