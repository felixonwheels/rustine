import { Drawer as DrawerPrimitive } from 'vaul-svelte';

import Root from './drawer.svelte';
import Content from './drawer-content.svelte';
import Description from './drawer-description.svelte';
import Footer from './drawer-footer.svelte';
import Header from './drawer-header.svelte';
import NestedRoot from './drawer-nested.svelte';
import Overlay from './drawer-overlay.svelte';
import Title from './drawer-title.svelte';

const Trigger: typeof DrawerPrimitive.Trigger = DrawerPrimitive.Trigger;
const Portal: typeof DrawerPrimitive.Portal = DrawerPrimitive.Portal;
const Close: typeof DrawerPrimitive.Close = DrawerPrimitive.Close;

export {
	Close,
	Close as DrawerClose,
	Content,
	Content as DrawerContent,
	Description,
	Description as DrawerDescription,
	Footer,
	Footer as DrawerFooter,
	Header,
	Header as DrawerHeader,
	NestedRoot,
	NestedRoot as DrawerNestedRoot,
	Overlay,
	Overlay as DrawerOverlay,
	Portal,
	Portal as DrawerPortal,
	Root,
	//
	Root as Drawer,
	Title,
	Title as DrawerTitle,
	Trigger,
	Trigger as DrawerTrigger,
};
