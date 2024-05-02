import { socialLinks } from "@/content";
import { IconButton, Link, Tooltip, Zoom } from "@mui/material";

export const SocialIcons = () => {
  const socialItems = socialLinks.map((socialItem) => (
    <Link
      href={socialItem.url}
      key={socialItem.network.toLowerCase()}
      target="_blank"
      className="block"
      rel="noopener noreferrer"
      underline="none"
    >
      <Tooltip
        title={socialItem.username}
        placement="left"
        TransitionComponent={Zoom}
      >
        <IconButton
          color="primary"
          aria-label={socialItem.network}
          className="text-white !bg-[#1b1a2e] backdrop-blur-lg hover:!bg-primary transition-all"
        >
          <socialItem.icon className="text-white" />
        </IconButton>
      </Tooltip>
    </Link>
  ));

  return (
    <div className={"fixed top-20 right-6 hidden md:flex flex-col gap-2 z-10"}>
      {socialItems}
    </div>
  );
};
