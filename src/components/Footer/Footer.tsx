import { Link, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { FC } from "react";
import Form from "../Form";

export const Footer: FC = (): JSX.Element => {
  return (
    <Stack sx={{ display: "flex", maxWidth: "1440px", margin: "0 auto" }}>
      <Typography
        color="#0F003D"
        fontSize={28}
        fontWeight={700}
        textAlign={"center"}
        mb={15}
      >
        Testimonials
      </Typography>

      <Box
        margin={"0 auto"}
        mb={"200px"}
        width={1120}
        height={613}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundImage: "url(assets/footerImages/cloud.svg)",
          display: { xs: "none", lg: "flex" },
        }}
      >
        <Typography
          color={"#0F003D"}
          width={744}
          textAlign={"center"}
          sx={{ lineHeight: "32.67px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
      <Box
        width={"100%"}
        height={"620px"}
        sx={{
          backgroundImage: "url(assets/footerImages/boy.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
          opacity: { xs: 0.8, lg: 1 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "center", lg: "flex-start" },
            flexDirection: "column",
            margin: "0 140px",
          }}
        >
          <Box>
            <img src="assets/footerImages/questchion.png" alt="questchion" />
          </Box>
          <Box sx={{ mb: "50px" }}>
            <img src="assets/footerImages/contact.png" alt="contact" />
          </Box>
          <Box>
            <Form />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            padding: "0 70px",
          }}
        >
          <Box>
            <Link href="#">
              <img src="assets/footerImages/incubate.svg" alt="incubate" />
            </Link>
          </Box>
          <Box>
            <Link href="https://www.facebook.com" target={"_blank"}>
              <img src="assets/footerImages/facebook.svg" alt="facebook" />
            </Link>
            <Link href="https://www.instagram.com" target={"_blank"}>
              <img
                src="assets/footerImages/instagramm.svg"
                alt="instagram"
                style={{ marginLeft: "30px" }}
              />
            </Link>
          </Box>
        </Box>
        <Typography textAlign={"center"} mb={1.3}>
          Copyright © 2022 . All rights reserved.
        </Typography>
      </Box>
    </Stack>
  );
};
