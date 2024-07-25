import { toast } from "@/components/ui/use-toast";
import { ProductType } from "@/types/product";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UseLovedProductsType {
  lovedItems: ProductType[];
  addLoveItem: (data: ProductType) => void;
  removeLovedItem: (id: number) => void;
}

export const UseLovedProducts = create(
  persist<UseLovedProductsType>(
    (set, get) => ({
      lovedItems: [],
      addLoveItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast({
            title: "El producto ya existe en la lista",
            variant: "destructive",
          });
        }
        set({
          lovedItems: [...get().lovedItems, data],
        });
        toast({
          title: "Producto añadido a la lista",
        });
      },
      removeLovedItem: (id: number) => {
        set({
          lovedItems: get().lovedItems.filter((item) => item.id !== id),
        });
        toast({
          title: "Producto eliminado de la lista",
        });
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
