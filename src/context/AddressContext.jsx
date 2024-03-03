import { createContext, useContext, useState } from "react";

export const AddressContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAddressContext = () => {
  return useContext(AddressContext);
};

export const AddressContextProvider = ({ children }) => {
  const [address, setAddress] = useState({
    location: "Suit-102, Dehradun, Uttarakhand India, 248001",
    phone: "+91 60063-75267",
    email: "martin_reed@myoohr.com",
  });

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
