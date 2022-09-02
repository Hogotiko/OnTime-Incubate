import { FC, useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages: string[] = ["About", "Pricing", "Testimonials", "Contact"];

const NavButton = styled(Button)({
  backgroundColor: "#180A42",
  borderRadius: "10px",
  textTransform: "none",
  width: "110px",
  height: "35px",
  "&:hover": {
    backgroundColor: "#1F0D54",
  },
  "&:active": {
    backgroundColor: "#1F0D54",
  },
});

const Navbar: FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <AppBar>
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              onClick={() => setIsMenuOpen(true)}
              sx={{ display: { xs: "inline-flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Toolbar>
              <IconButton>
                <img src={"assets/logo.png"} alt="logo" />
                <Typography
                  variant="h3"
                  color="#0F003D"
                  fontSize={22}
                  fontWeight={700}
                  ml={1.125}
                >
                  INKUBATE
                </Typography>
              </IconButton>
              <Toolbar
                sx={{ marginLeft: "30px", display: { xs: "none", md: "flex" } }}
              >
                {pages.map((page: string) => (
                  <Button key={page}>
                    <Typography color="#180A42" textTransform="none">
                      {page}
                    </Typography>
                  </Button>
                ))}
              </Toolbar>
            </Toolbar>
            <NavButton variant="contained">Try for Free</NavButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        open={isMenuOpen}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <List>
          {pages.map((page: string) => (
            <ListItem key={page}>
              <ListItemButton>{page}</ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
