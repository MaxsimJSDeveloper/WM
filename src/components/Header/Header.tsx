import { useState } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";

import CloseIcon from "@mui/icons-material/Close";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header>
      <RxHamburgerMenu
        style={{
          width: 42,
          height: 42,
          color: "#fff",
          backgroundColor: "#91bf65",
          padding: 6,
          borderRadius: 6,
          position: "fixed",
        }}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-navigation"
        aria-describedby="modal-navigation-description"
      >
        <Box
          onClick={handleClose}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "70%",
              maxWidth: "500px",
              bgcolor: "background.paper",
              p: 4,
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
            <Navigation onLinkClick={handleClose} />
          </Box>
        </Box>
      </Modal>
    </header>
  );
};

export default Header;
