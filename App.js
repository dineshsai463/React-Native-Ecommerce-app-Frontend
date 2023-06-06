import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { StripeProvider } from "@stripe/stripe-react-native";

const stripeKey =
  "pk_test_51NDOqESHvVXIEK7aqfAMyqgjhHAj1gcSBOXG53DOICWU22GFyEBGIdRYXbV1UM1Z7MGUkb6DrZSTDXnZsACLqBC800maI4842N";

export default function App() {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5,
      }}
      merchantIdentifier="6-pack-ecom.com"
      publishableKey={stripeKey}
    >
      <Provider store={store}>
        <Main />
      </Provider>
    </StripeProvider>
  );
}