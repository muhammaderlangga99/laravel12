import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Equal } from "lucide-react"
import { Link } from "@inertiajs/react"

interface Navigation {
    id: number;
    name: string;
    link: string;
}

export default function MenuMobile({ Navigation }: { Navigation: Navigation[] }) {
    const pathName = window.location.pathname;
    return (
        <Drawer>
            <DrawerTrigger>
                <Equal strokeWidth={1} className='lg:hidden' />
            </DrawerTrigger>
            <DrawerContent>

                <DrawerHeader>
                    <DrawerTitle>Menu</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription>
                    {Navigation.map((item: Navigation, index: number) => {
                        return (
                            <span key={index} className="flex flex-col items-start px-2">
                                <Link href={item.link} className={`hover:text-zinc-600 w-full mb-2 dark:bg-zinc-900 px-2 py-1 rounded ${item.link == pathName && 'text-zinc-950 dark:text-red-600 dark:hover:text-zinc-900 font-extrabold hover:text-zinc-950'}`}>{item.name}</Link>
                            </span>
                        );
                    })}
                </DrawerDescription>
            </DrawerContent>
        </Drawer>
    );
}
