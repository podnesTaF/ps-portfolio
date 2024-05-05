import { socialLinks } from "@/lib";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";

export const SpeedDials = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const actionIcons = socialLinks.map((action) => (
    <SpeedDialAction
      key={action.network.toLowerCase()}
      icon={<action.icon />}
      tooltipTitle={action.network}
      onClick={handleClose}
    />
  ));

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial"
        className="absolute top-2 right-4 z-50 md:!hidden"
        hidden={false}
        classes={{
          fab: "bg-primary",
        }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="down"
      >
        {actionIcons}
      </SpeedDial>
    </>
  );
};
