import styled from 'styled-components';
import {
  FlexRow,
  ContainerContentCentered,
  RowFullLength,
} from '../../styles/sharedStyles';
import BREAKPOINTS from '../../utils/breakpoints';

export const ListItemContent = styled.span`
  ${FlexRow};
  width: 100%;
  align-items: center;
  @media only screen and (max-width: 480px) {
    min-width: 60%;
  }
`;

export const BulletPoint = styled(ContainerContentCentered)`
  height: 1.25rem;
  width: 1.25rem;
  &:before {
    content: '●';
    font-size: 1.5rem;
  }
`;

export const ImageContainer = styled(ContainerContentCentered)`
  min-width: 3rem;
  width: 3rem;
  height: 3rem;
  margin-inline: 1rem;
  box-shadow: 0px 6px 4px 1px black, 0px 2px 11px 2px black,
    0px 3px 4px -2px black;

  @media only screen and (max-width: ${BREAKPOINTS.small}px) {
    min-width: 2rem;
    width: 2rem;
    height: 2rem;
  }
`;

export const SongImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ResponsiveRowFullLength = styled(RowFullLength)`
  @media only screen and (max-width: ${BREAKPOINTS.tabletM}px) {
    flex-direction: column;
    height: 5rem;
    justify-content: space-around;
  }
`;
