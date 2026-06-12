import { ReactNode } from 'react';

export type RenderSlotType<P extends object = object> = (props: P) => ReactNode;
