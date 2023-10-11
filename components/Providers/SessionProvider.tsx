"use client";
import { ISessionProvidersProps } from "@/types/ISessionProvidersProps";
import { SessionProvider } from "next-auth/react"
const SessionProviders: React.FC<ISessionProvidersProps> = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>
}
export default SessionProviders