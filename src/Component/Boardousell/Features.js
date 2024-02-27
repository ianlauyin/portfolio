import preview from "./img/preview.png";
import Auth0Photo from "../img/Auth0.png";
import stripePhoto from "../img/stripe.svg";
import allUserPhoto from "./FeatureImg/allUser.png";
import authUserPhoto from "./FeatureImg/authUser.png";
import adminPhoto from "./FeatureImg/admin.png";

export default function Features() {
  const introduction = (
    <div className="flex flex-col w-full">
      <b className="sticky-header">Introduction:</b>
      <div className="flex flex-col sm:flex-row justify-around items-center">
        <img
          src={preview}
          alt="preview"
          className="w-5/6 sm:w-1/3 mb-5 rounded"
        />

        <p className="w-5/6 sm:w-1/2">
          Boardousell is a e-commerce platform that allows users to purchase
          items from the shop, while also enabling shop owners to manage orders
          and projects on the same site.
        </p>
      </div>
    </div>
  );

  const tools = (
    <div className="flex flex-col w-full">
      <b className="sticky-header">Tools:</b>
      <div className="flex justify-around flex-wrap">
        <div className="flex justify-center items-center border border-primary m-5 px-5">
          <img
            src={Auth0Photo}
            alt="auth0Photo"
            className="object-contain mr-5 w-20"
          />
          Auth0
        </div>
        <div className="flex justify-center items-center border border-primary m-5 px-5">
          <img
            src={stripePhoto}
            alt="stripePhoto"
            className="object-contain mr-5 w-20"
          />
          Stripe
        </div>
      </div>
    </div>
  );

  const allUser = (
    <div className="flex flex-col w-full">
      <b className="sticky-header">All User Features:</b>
      <div className="flex flex-col sm:flex-row-reverse">
        <img
          alt="allUserPhoto"
          src={allUserPhoto}
          className="w-full sm:w-1/2 h-auto object-contain p-2 rounded-2xl"
        />
        <ol className="list-decimal list-inside items-start flex flex-col px-5 space-y-3 sm:w-1/2 list-left">
          <li>
            <b className="text-primary">Announcement</b> summary on the
            homepage.
          </li>
          <li>
            Access the <b className="text-primary">announcement details</b>{" "}
            page.
          </li>
          <li>
            <b className="text-primary">Product summary</b> includes stock,
            price.
          </li>
          <li>
            <b className="text-primary">New products</b> summary on the
            homepage.
          </li>
          <li>
            <b className="text-primary">All Products</b> on the products page.
          </li>
          <li>
            Sort <b className="text-primary">category</b> on the products page.
          </li>
          <li>
            <b className="text-primary">Product Details</b> on the product page.
          </li>
          <li>
            <b className="text-primary">Search</b> for products on the search
            page.
          </li>
          <li>
            <b className="text-primary">Contact information </b>the contact
            page.
          </li>
          <li>
            <b className="text-primary">Log in or register</b> for an account.
          </li>
        </ol>
      </div>
    </div>
  );

  const authUser = (
    <div className="flex flex-col w-full">
      <b className="sticky-header">Customer Features:</b>
      <div className="flex flex-col sm:flex-row">
        <img
          alt="authUserPhoto"
          src={authUserPhoto}
          className="w-full sm:w-1/2 h-auto object-contain p-2 rounded-2xl"
        />
        <ol className="list-decimal list-inside items-start flex flex-col px-5 space-y-3 sm:w-1/2 list-left">
          <li>
            Add product into <b className="text-primary">wishlist</b>.
          </li>
          <li>
            View <b className="text-primary">wishlist</b> items.
          </li>
          <li>
            Add product into <b className="text-primary">shopping cart.</b>
          </li>
          <li>
            View <b className="text-primary">shopping cart</b> items.
          </li>
          <li>
            <b className="text-primary">Checkout</b> for the shopping cart
            items.
          </li>
          <li>
            View <b className="text-primary">discount and total amount</b> when
            checking out.
          </li>
          <li>
            Get an <b className="text-primary">order list</b> for all order.
          </li>
          <li>
            Read the <b className="text-primary">order details</b> for each
            order.
          </li>
          <li>
            <b className="text-primary">Paid</b> the order in the order page.
          </li>
          <li>
            <b className="text-primary">Message</b> the Shopowner for each
            order.
          </li>
          <li>
            Obtain the <b className="text-primary">User</b> Infomation.
          </li>
          <li>
            <b className="text-primary">Update</b> user's phone and name.
          </li>
          <li>
            <b className="text-primary">Log out</b>.
          </li>
        </ol>
      </div>
    </div>
  );

  const admin = (
    <div className="flex flex-col w-full">
      <b className="sticky-header">Admin Features:</b>
      <div className="flex flex-col sm:flex-row-reverse">
        <img
          alt="adminPhoto"
          src={adminPhoto}
          className="w-full sm:w-1/2 h-auto object-contain p-2 rounded-2xl"
        />
        <ol className="list-decimal list-inside items-start flex flex-col px-5 space-y-3 sm:w-1/2 list-left">
          <li>
            <b className="text-primary">Search orders</b> using order no.,
            status, message, user email or products.
          </li>
          <li>
            <b className="text-primary">Change status</b> of an order.
          </li>
          <li>
            <b className="text-primary">Message</b> customer through an order
          </li>
          <li>
            <b className="text-primary">Search products</b> using name, stock or
            category.
          </li>
          <li>
            <b className="text-primary">Add product</b> and add details for the
            product.
          </li>
          <li>
            <b className="text-primary">Edit product</b> details including name,
            stock, price, category, photo... etc.
          </li>
          <li>
            Get all <b className="text-primary">category</b> data.
          </li>
          <li>
            <b className="text-primary">Delete and add category.</b>
          </li>
          <li>
            <b className="text-primary">Changing category</b> of products.
          </li>
          <li>
            Get all <b className="text-primary">contact</b> infomation of the
            shop.
          </li>
          <li>
            <b className="text-primary">Delete and add contact</b> infomation of
            the shop.
          </li>
          <li>
            <b className="text-primary">Preview map</b> when adding location
            contact.
          </li>
          <li>
            Get all <b className="text-primary">notices</b> of the shop
          </li>
          <li>
            <b className="text-primary">Delete and add notice</b> of the shop
          </li>
          <li>
            <b className="text-primary">Change notice detail</b> of a notice.
          </li>
          <li>
            <b className="text-primary">Search user </b>using email,name or
            phone.
          </li>
          <li>
            <b className="text-primary">Change user</b> points.
          </li>
          <li>
            <b className="text-primary">Get all membership</b> infomation.
          </li>
          <li>
            <b className="text-primary">Delete and add level.</b>
          </li>
          <li>
            <b className="text-primary">Edit level</b> infomation.
          </li>
          <li>
            <b className="text-primary">Log out</b>.
          </li>
        </ol>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full items-center pb-5">
      {introduction}
      {tools}
      {allUser}
      {authUser}
      {admin}
    </div>
  );
}
