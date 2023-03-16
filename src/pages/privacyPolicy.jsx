import React from "react";
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";
import { privacyPolicyItems } from "../assets/sources/privacyPolicyItems";
import Section from "../components/privacyPolicy/Section";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate(-1);
  };
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%", transition: { duration: 1 } }}
      exit={{ x: "100%", transition: { duration: 1 } }}
      className="h-[400vh]"
    >
      <div className="flex">
        <div className="mr-[57px]">
          <HiOutlineArrowLeftCircle
            onClick={handleExit}
            className="w-[40px] h-[40px]"
          />
        </div>
        <div className="h-[400px] w-full">
          <div>
            <h1 className="font-Russo text-[64px] leading-[77px] text-white">
              Harmony Launcher Privacy Policy
            </h1>
            <p className="font-medium text-[19px] leading-[159.69%] mt-[28px] mb-[20px]">
              Thank you for visiting ("Website"). The Website is owned and
              operated by harmonylauncher Inc, a company with limited liability
              incorporated in the Seychelles, and its affiliates ("Company",
              "we", "our", or "us").
            </p>
            <p className="font-medium text-[19px] leading-[159.69%]">
              This Privacy Policy ("Privacy Policy") together with our Terms of
              Services ("Terms of Services") sets out the basis on which any
              Personal Data we collect from the User. The “User" is an
              individual providing personal data to us through our Website,
              Medium pages, Telegram Channels, Discord or other social media
              accounts, or other means such as engage and complete additional
              harmonylauncher social media engagement tasks, for any
              harmonylauncher’s event or interact with us on our social media
              accounts. Hereinafter, We may refer to User as "You" in this
              Privacy Policy. By "Personal Data", we mean any information that
              enables you to be directly or indirectly identified, for example
              your name, profile picture, username, email address, contact
              details, IP address, device ID or other online identifier. Please
              read the following carefully to understand what data we collect,
              how that data is used and the ways it can be shared by us. By
              accessing, connecting, clicking on, using, or engaging in Our
              Services, you indicate and confirm that you have consented and
              agreed to the terms of this Privacy Policy. If you do not agree,
              either partially or wholly, to this Privacy Policy, you should not
              access or use the Website or use the services, functions, or
              features offered from time to time on the you must immediately
              discontinue accessing, connecting, using, or engaging in Our
              Services and Website. We will not use your Personal Information
              for any other purpose that has not been covered in this Privacy
              Policy or the Terms of Services without providing you prior
              notification or obtaining your consent. This Privacy Policy does
              not apply to services offered by other companies or service
              providers or other websites linked from our Website. You agree and
              acknowledge that we cannot guarantee that any losses, misuses,
              unauthorized accession, or alteration of your Personal Data will
              not occur. You hereby agree that You play a vital role in
              protecting your Personal Data, including your credentials.
            </p>
          </div>

          {privacyPolicyItems.map((item, index) => (
            <Section key={index} item={item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
