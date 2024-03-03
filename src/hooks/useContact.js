import React from "react";
import { useAddressContext } from "../context/AddressContext";

const useContact = () => {
  const { setAddress } = useAddressContext();

  const handleIndiaAddress = () => {
    setAddress({
      location: "Suit-102, Dehradun, Uttarakhand India, 248001",
      phone: "+91 60063-75267",
      email: "martin_reed@myoohr.com",
    });
    const mapArea = document.querySelector("#map");
    const maploc = mapArea.setAttribute("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d881637.8070937915!2d78.017135!3d30.325427999999995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1709465368186!5m2!1sen!2sin");
  };
  const handleUniteStateAddress = () => {
    setAddress({
      location: "2931 Hickory Place, Fullerton, California 92835,United State",
      phone: "+1 714-882-1896",
      email: "mike@gmail.com",
    });
    const mapArea = document.querySelector("#map");
    mapArea.setAttribute("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3937.9378485484153!2d-117.89017781444721!3d33.90515945936977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd5a8af4e0947%3A0x1b58310e47fef63b!2s2931%20Hickory%20Pl%2C%20Fullerton%2C%20CA%2092835%2C%20USA!5e0!3m2!1sen!2sin!4v1709466613029!5m2!1sen!2sin");
  };
  const handleUTHAAddress = () => {
    setAddress({
      location: "416 West 40 South Providence UTAH 84332",
      phone: "+1 714-882-1896",
      email: "matthew@myoohr.com",
    });
    const mapArea = document.querySelector("#map");
    mapArea.setAttribute("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11914.451714700868!2d-111.828343!3d41.707291000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87547e4b9f21d481%3A0x595298596b977eec!2s416%20W%2040%20S%2C%20Providence%2C%20UT%2084332%2C%20USA!5e0!3m2!1sen!2sin!4v1709466869917!5m2!1sen!2sin");
  };

  return { handleIndiaAddress, handleUniteStateAddress, handleUTHAAddress };
};

export default useContact;
