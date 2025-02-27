import { children, User } from '@/types'
import Navigation from '@/components/navbar';

export default function Main({ children, auth }: children & { auth: { user: User } }) {
    return (
        <>
            <Navigation auth={auth} />
            {children}
        </>
    );
}
