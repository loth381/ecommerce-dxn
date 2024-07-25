interface ProductTasteOrigin {
    taste: string,
    origin: string
}

const ProductTasteOrigin = (props: ProductTasteOrigin) => {
    const {origin, taste} = props
    return(
        <div className="items-center flex justify-between gap-3">
            <p className="px-2 py-1  text-sm text-white bg-black rounded-full dark:bg-white dark:text-black">
              {taste}
            </p>
            <p className="px-2 py-1  text-sm text-white bg-yellow-900 rounded-full w-fit">
              {origin}
            </p>
          </div>

    )
}

export default  ProductTasteOrigin