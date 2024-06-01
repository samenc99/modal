import { FC } from 'react';
import { useAppSelector } from '../../store/store';

interface RenderComponentProps {}

export const RenderComponent: FC<RenderComponentProps> = ({}) => {
  const { elements } = useAppSelector(
    (state) => state.render,
  );

  return (
    <>
      {elements.map((element) => <>{element}</>)}
    </>
  );
};
