export type PageTitleProps = {
  title: string;
};

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {title}
    </h1>
  );
};
