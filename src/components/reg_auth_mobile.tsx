import { login, signup } from '@/app/auth/actions'


export default function LoginPage() {

    return (
        <div className="flex items-start justify-center min-h-screen px-4 pb-10">
            <div className="w-full max-w-4xl p-10 bg-white overflow-hidden">

                {/* 2 row GRID */}
                <div className="grid grid-cols-1 md:grid-rows-2">

                    {/* REGISTRATION row */}
                    <div className="p-6 md:p-2 md:pr-10">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">REGISTER</h2>

                        <form action={signup}>

                            {/* Name Field */}
                            <div className="mb-4">
                                <label htmlFor="displayName" className="block text-sm font-medium mb-1 text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="displayName"
                                    name="displayName"
                                    className="w-full p-1 border border-gray-300 rounded"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-1 border border-gray-300 rounded"
                                    required
                                />
                            </div>

                            {/* Password Field */}
                            <div className="mb-6">
                                <label htmlFor="register-password" className="block text-sm font-medium mb-1 text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="register-password"
                                    name="password"
                                    className="w-full p-1 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="submit"
                                        className="bg-white border border-blue-950 text-blue-950 p-2 pl-5 pr-5 rounded-full font-semibold
                                    hover:bg-blue-950 hover:text-white transition">
                                    CREATE
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* LOGIN FORM */}
                    <div className="p-6 md:p-2 md:pl-10 border-l">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">LOG-IN</h2>

                        <form action={login}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-sm font-medium mb-1 text-gray-700">Email</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="email"
                                    className="w-full p-1 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="login-password" className="block text-sm font-medium mb-1 text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="login-password"
                                    name="password"
                                    className="w-full p-1 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="submit"
                                        className="bg-red-800 border border-white text-white p-2 pl-5 pr-5 rounded-full font-semibold
                                    hover:bg-white hover:border-red-800  hover:text-red-800 transition">
                                    LOG IN
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}