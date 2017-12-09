const STRIPE_PUBLISHABLE =
process.env.NODE_ENV === "production"
  ? "pk_live_MKDafIwqewgL8xgNYY02lZIl"
  : "pk_test_SfQYmJDofbhoC5V5Dhf632ob";;;

export default STRIPE_PUBLISHABLE;

