import Process from "@/core/components/Process";
import { useCartSlice } from "@/store/features/cart.slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import data from "../../../mock/data.json";
import Checkbox from "@/core/components/Checkbox/Checkbox";
import { formatSku } from "@/core/utils";
import Counter from "@/core/components/Counter/Counter";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function CartPage() {
  const [selectedOption, setSelectedOption] = useState("");
  //   const { cart } = useCartSlice();
  const [cart, setCart] = useState(data);
  const dispatch = useDispatch();

  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);

  const isAllSelected =
    selectedItemIds.length === cart.length && cart.length > 0;

  const handleToggleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedItemIds(cart.map((item) => item.id));
    } else {
      setSelectedItemIds([]);
    }
  };

  const handleToggleItem = (id: string) => {
    setSelectedItemIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <section className="px-8 lg:px-14 py-20 mx-auto max-w-[1440px] mt-20">
      <div className="">
        <h1 className="text-app-black font-poppins text-center text-[54px]/[58px] font-medium tracking-[-1px] mb-10">
          Cart
        </h1>
        <Process activeStep={1} />
      </div>
      <div className="grid md:grid-cols-3 gap-16 py-20">
        <div className="md:col-span-2">
          <div className="">
            {/* <table className="min-w-full border-collapse border-b">
              <thead>
                <tr className="">
                  <th className="pb-6 px-4 text-center text-app-black font-inter text-base/[26px] border-app-gray font-semibold border-b">
                    Product
                  </th>
                  <th className="pb-6 px-4 text-center text-app-black font-inter text-base/[26px] border-app-gray font-semibold border-b">
                    Quantity
                  </th>
                  <th className="pb-6 px-4 text-center text-app-black font-inter text-base/[26px] border-app-gray font-semibold border-b">
                    Price
                  </th>
                  <th className="pb-6 px-4 text-center text-app-black font-inter text-base/[26px] border-app-gray font-semibold border-b">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-6 px-4 border-app-light-gray border-b flex gap-4 items-center">
                    <div className="bg-primary w-24 h-24">
                      <img
                        src={"/images/product-one.png"}
                        alt={"Product Img"}
                        className="object-contain object-center h-auto max-h-full w-full"
                      />
                    </div>
                    <div className="flex-shrink-0 space-y-2">
                      <p className="text-app-black font-inter text-sm/[22px] font-semibold">
                        Tray Table
                      </p>
                      <p className="text-app-gray font-inter text-xs/5 font-normal">
                        Color: Black
                      </p>
                      <button className="flex gap-1 items-center">
                        <img
                          src={"/images/close.svg"}
                          alt={"Product Img"}
                          className="object-contain object-center h-6 w-6"
                        />
                        <p className="text-app-gray font-inter text-sm/[22px] font-semibold">
                          Remove
                        </p>
                      </button>
                    </div>
                  </td>
                  <td className="py-6 px-4 border-app-light-gray border-b">
                    <div className="flex gap-3 items-center border border-app-gray rounded py-3 px-2 w-fit">
                      <button>
                        <img
                          src="/images/minus.svg"
                          alt=""
                          className="h-4 w-4"
                        />
                      </button>
                      <p className="text-app-black font-inter font-semibold text-sm/[20px]">
                        2
                      </p>
                      <button>
                        <img src="/images/add.svg" alt="" className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                  <td className="py-6 px-4 border-app-light-gray border-b">
                    <p className="text-app-black font-inter text-lg/[30px] font-normal text-right">
                      $10.00
                    </p>
                  </td>
                  <td className="py-6 px-4 border-app-light-gray border-b">
                    <p className="text-app-black font-inter text-lg/[30px] font-semibold text-right">
                      $20.00
                    </p>
                  </td>
                </tr>
              </tbody>
            </table> */}
            <div className="p-6 rounded-md border border-app-gray bg-white space-y-3">
              <p className="text-[26px]/[30px] font-semibold">
                Cart({cart.length})
              </p>
              <div className="flex items-center">
                {/* <div className="flex items-center mr-4">
                  <input
                    id="cart-select-all"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-700 dark:border-gray-600 cursor-pointer focus:outline-none focus:ring-0"
                  />
                  <label
                    htmlFor="cart-select-all"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Select all items
                  </label>
                </div> */}
                <Checkbox
                  id="cart-select-all"
                  label="Select all items"
                  checked={isAllSelected}
                  onChange={handleToggleSelectAll}
                />
                <div className="ps-4 border-slate-200 border-l">
                  <p className="text-red-500 font-semibold underline">
                    Delete selected items
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-md border border-app-gray bg-white space-y-3 mt-6">
              {/* IF CART IS EMPTY, DISPLAY THIS PLACEHOLDER */}
              {cart.length === 0 ? (
                <div className="flex flex-col items-center">
                  <img
                    src="https://ae-pic-a1.aliexpress-media.com/kf/S7f271c8c69294001b84c83cda454992ek/518x518.png_.webp"
                    alt=""
                    className="max-h-[200px]"
                  />

                  <p className="font-bold mt-2">Your cart is empty</p>
                  <Link to="/">
                    <button className="rounded-full bg-black text-white font-bold px-16 py-3 mt-6 mb-12">
                      Explore items
                    </button>
                  </Link>
                </div>
              ) : (
                <div>
                  <ul>
                    {cart.map((item) => (
                      <li key={item.id} className="flex gap-x-2 py-3">
                        <Checkbox
                          id={`cart-item-${item.id}`}
                          checked={selectedItemIds.includes(item.id)}
                          onChange={() => handleToggleItem(item.id)}
                        />
                        <LazyLoadImage
                          src={item.image}
                          effect="blur"
                          alt={item.name}
                          className="max-h-[160px]"
                          placeholderSrc="https://placehold.co/600x400"
                        />
                        <div className="flex flex-col gap-y-2 w-full">
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-slate-400 font-semibold cursor-pointer">
                            {formatSku(item.sku)} &gt;
                          </p>
                          <div className="flex justify-between items-center">
                            <div>
                              {item.discount > 0 ? (
                                <div className="flex gap-x-4 items-end">
                                  <span className="font-semibold text-[18px]/[20px]">
                                    <span className="text-xs">$</span>
                                    {((1 - item.discount) * item.price).toFixed(
                                      2
                                    )}
                                  </span>
                                  <span className="text-[12px] text-slate-500 line-through">
                                    <span className="text-xs">$</span>
                                    {item.price}
                                  </span>
                                  <div className="bg-red-200 text-red-600 font-semibold rounded-full py-1 px-3">
                                    <p className="text-[12px]">
                                      Save <span className="text-xs">$</span>
                                      {(item.price * item.discount).toFixed(2)}
                                    </p>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  <span className="font-semibold text-[18px]/[20px]">
                                    <span className="text-sm">$</span>
                                    {item.price}
                                  </span>
                                </>
                              )}
                            </div>
                            <Counter
                              value={item.quantity}
                              onChange={(newVal) =>
                                handleQuantityChange(item.id, newVal)
                              }
                            />
                          </div>
                          <p className="text-sm text-slate-500">
                            {item.shipping_fee === 0
                              ? "Free shipping"
                              : `Shipping fee: $${item.shipping_fee}`}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="p-6 rounded-md border border-app-gray bg-white space-y-3 mb-4 md:col-span-1">
          <p className="text-app-black font-poppins text-xl/7 font-medium mb-4">
            Cart summary
          </p>
          <div
            className={`py-3 px-4 flex justify-between items-center rounded-[4px] border border-app-black ${
              selectedOption === "free-shipping" ? "bg-primary" : "bg-white"
            }`}
            onClick={() => setSelectedOption("free-shipping")}
          >
            <div className="flex gap-3 items-center">
              <input
                type="radio"
                name="shipping"
                id="free-shipping"
                checked={selectedOption === "free-shipping"}
                className="appearance-none w-5 h-5 border border-app-black rounded-full checked:bg-app-black checked:border-app-black text-app-black"
              />
              <p className="text-app-black font-inter text-base/[26px]">
                Free Shipping
              </p>
            </div>
            <p className="text-right font-inter text-base/[26px]">$0.00</p>
          </div>

          <div
            className={`py-3 px-4 flex justify-between items-center rounded-[4px] border border-app-black ${
              selectedOption === "express-shipping" ? "bg-primary" : "bg-white"
            }`}
            onClick={() => setSelectedOption("express-shipping")}
          >
            <div className="flex gap-3 items-center">
              <input
                type="radio"
                name="shipping"
                id="express-shipping"
                checked={selectedOption === "express-shipping"}
                className="appearance-none w-5 h-5 border border-app-black rounded-full checked:bg-app-black checked:border-app-black text-app-black"
              />
              <p className="text-app-black font-inter text-base/[26px]">
                Express Shipping
              </p>
            </div>
            <p className="text-right font-inter text-base/[26px]">+$15.00</p>
          </div>

          <div
            className={`py-3 px-4 flex justify-between items-center rounded-[4px] border border-app-black ${
              selectedOption === "express-shipping" ? "bg-primary" : "bg-white"
            }`}
            onClick={() => setSelectedOption("express-shipping")}
          >
            <div className="flex gap-3 items-center">
              <input
                type="radio"
                name="shipping"
                id="express-shipping"
                checked={selectedOption === "express-shipping"}
                className="appearance-none w-5 h-5 border border-app-black rounded-full checked:bg-app-black checked:border-app-black text-app-black"
              />
              <p className="text-app-black font-inter text-base/[26px]">
                Pick Up
              </p>
            </div>
            <p className="text-right font-inter text-base/[26px]">%21.00</p>
          </div>
          <div className="flex justify-between items-center border-b border-app-light-gray py-3">
            <p className="text-app-black font-inter text-base/[26px] font-normal ">
              Subtotal
            </p>
            <p className="text-app-black text-right font-inter text-base/[26px] font-semibold">
              $1234.00
            </p>
          </div>
          <div className="flex justify-between items-center pb-3">
            <p className="text-app-black font-inter text-xl/8 font-semibold ">
              Total
            </p>
            <p className="text-app-black text-right font-inter text-xl/8 font-semibold">
              $1345.00
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[424px]">
        <p className="text-app-black font-poppins text-xl/7 font-medium mb-2">
          Have a coupon?
        </p>
        <p className="text-app-gray font-inter text-base/[26px] mb-4">
          Add your code for an instant cart discount
        </p>
        <div className="px-4 border border-app-black flex gap-2 items-center w-full">
          <img
            src="/images/ticket-percent.svg"
            alt=""
            className="h-4 md:h-6 w-4 md:w-6"
          />
          <input
            type="text"
            name="coupon"
            id="coupon"
            className="border-none outline-none ring-0 focus:ring-0 w-full"
          />
          <button className="text-app-black font-inter text-base/7 font-medium tracking-[-0.4px]">
            Apply
          </button>
        </div>
      </div>
    </section>
  );
}
