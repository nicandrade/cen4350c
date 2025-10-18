import {createServerClient, type CookieOptions} from '@supabase/ssr';
import {cookies} from 'next/headers';
import {Database} from '@/lib/database.types';


export interface Product {
    id: number;
    name: string;
    image_url: string;
}

export async function createClient() {
    const cookieStore = await cookies();

    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get: (name: string) => cookieStore.get(name)?.value,

                set: (name: string, value: string, options: any) => {
                    try {
                        cookieStore.set({name, value, ...options});
                    } catch (error: unknown) {
                    }
                },

                remove: (name: string, options: any) => {
                    try {
                        cookieStore.set({name, value: '', maxAge: 0, ...options});
                    } catch (error: unknown) {
                    }
                },
            },
        }
    );
}