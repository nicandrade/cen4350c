'use server'

import {createClient} from '@/utils/supabase/server'
import {redirect} from 'next/navigation'


export async function signup(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const displayName = formData.get('displayName') as string
    const supabase = await createClient()

    const {error} = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                display_name: displayName,
            },
            emailRedirectTo: undefined,
        },
    })

    if (error) {
        console.error('Oops, unable to authenticate:', error.message)
        return redirect('/')
    }

    return redirect('/')
}


export async function login(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const supabase = await createClient()

    const {error} = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        console.error('Issu logging in:', error.message)
        return redirect('/')
    }

    return redirect('/')
}

export async function logout() {
    const supabase = await createClient()
    await supabase.auth.signOut()
    return redirect('/')
}