import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import { store } from './store.js'  
import { ThemeProvider } from './../features/theme/ThemeContext.jsx'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000,
            gcTime: 10 * 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false
        }
    }
})

export function AppProvider({ children }){
    return (
        <QueryClientProvider client={queryClient}>
            <ReduxProvider store={store}>
                <ThemeProvider>
                    {children}
                    <ReactQueryDevtools initialIsOpen={false}/>
                </ThemeProvider>
            </ReduxProvider>
        </QueryClientProvider>
    )
}