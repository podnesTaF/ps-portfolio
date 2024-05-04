import { Button } from "@mui/material";

interface ProjectFilterProps {
  id: number;
  name: string;
  onChange: (id: number) => void;
  active: boolean;
}

const ProjectFilter = ({
  id,
  name,
  onChange,
  active,
}: ProjectFilterProps): JSX.Element => {
  return (
    <Button
      variant={active ? "contained" : "outlined"}
      className="!rounded-none !w-full !font-semibold !text-white"
      onClick={() => onChange(id)}
    >
      {name}
    </Button>
  );
};

export default ProjectFilter;
