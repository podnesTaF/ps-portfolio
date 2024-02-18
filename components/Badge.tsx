const Badge = ({ title }: { title: string }): JSX.Element => {
  return (
    <div className="rounded-2xl bg-white px-4 py-1 2xl:py-2 w-fit">
      <p className="text-lg font-semibold">{title}</p>
    </div>
  );
};

export default Badge;
